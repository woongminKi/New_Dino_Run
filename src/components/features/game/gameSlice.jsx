import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myReadyState: false,
  player2Ready: false,
  player3Ready: false,
  player4Ready: false,
  faceEmotionHappyScore: 0,
  myScore: 0,
  player2Score: 0,
  player2Video: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    readyRequest: (state, action) => {
      state.myReadyState = action.payload;
    },
    otherPlayerReadyRequest: (state, action) => {
      state.player2Ready = action.payload;
    },
    getFaceEmotion: (state, action) => {
      if (action.payload.length) {
        state.faceEmotionHappyScore = action.payload[0].expressions.happy;
      }
    },
    getMyScore: (state, action) => {
      state.myScore = action.payload;
    },
    getPlayer2Score: (state, action) => {
      state.player2Score = action.payload;
    },
    getPlayer2Video: (state, action) => {
      console.log("2플레이어 비디오??", action.payload);
      // state.player2Video = action.payload;
    },
  },
});

export const {
  readyRequest,
  otherPlayerReadyRequest,
  getFaceEmotion,
  getMyScore,
  getPlayer2Score,
  getPlayer2Video,
} = gameSlice.actions;
export default gameSlice.reducer;