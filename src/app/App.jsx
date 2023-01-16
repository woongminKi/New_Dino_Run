import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Main from "../components/Main";
import KakaoRedirectHandler from "../components/kakao/KakaoRedirectHandler";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />

        <Route
          path="/oauth/callback/kakao"
          element={<KakaoRedirectHandler />}
        />
      </Routes>
    </>
  );
}

export default App;