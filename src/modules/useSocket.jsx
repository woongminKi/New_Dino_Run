import io from "socket.io-client";
import { eventChannel } from "redux-saga";
import { call, put, take } from "redux-saga/effects";
import { joinRoom } from "../components/features/room/roomSlice";
import {
  otherPlayerReadyRequest,
  getPlayer2Score,
  getPlayer2Video,
} from "../components/features/game/gameSlice";

export const socket = io.connect("http://localhost:8000", {
  path: "/socket.io",
  transports: ["websocket"],
  cors: {
    origin: "http://localhost:8000",
  },
});

export const socketAction = {
  joinRoom: (data) => {
    socket.emit("joinRoom", data);
  },
  otherPlayerReadyRequest: (data) => {
    socket.emit("otherPlayerReadyStatus", data);
  },
  gameScore: (score) => {
    socket.emit("gameScore", score);
  },
  otherPlayerVideo: (video) => {
    socket.emit("otherPlayerVideo", video);
  },
};

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.on("joinRoom", (userData, currentRoom) => {
      emit(joinRoom(userData, currentRoom));
    });
    socket.on("otherPlayerReadyStatus", (readyData) => {
      emit(otherPlayerReadyRequest(readyData));
    });
    socket.on("gameScore", (score) => {
      emit(getPlayer2Score(score));
    });
    socket.on("otherPlayerVideo", (video) => {
      console.log("서버에서 넘어온 상대 비디오???", video);
      emit(getPlayer2Video(video));
    });

    return () => {
      socket.off("joinRoom");
      socket.off("otherPlayerReadyStatus");
      socket.off("gameScore");
      socket.off("otherPlayerVideo");
    };
  });
}

export function* gameSocketSaga() {
  const readyGame = yield call(createSocketChannel, socket);
  while (true) {
    const action = yield take(readyGame);
    yield put(action);
  }
}