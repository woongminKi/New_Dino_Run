import React from "react";
import styled from "styled-components";
import kakaoImage from "../images/kakao_login_medium_narrow.png";

export default function Home() {
  const clientId = "fc68dfe18e2e8c79b2dfba1be0fc0eb7";
  const redirectURI = "http://localhost:3000/oauth/callback/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&response_type=code`;

  return (
    <Container>
      <div className="dino-title">Dino Run</div>
      <a href={KAKAO_AUTH_URL}>
        <KakaoBtn>
          <img src={kakaoImage} alt="login" />
        </KakaoBtn>
      </a>
    </Container>
  );
}

const Container = styled.div`
  background: url(https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F993F4C3359C52BF5379685);
  background-repeat: repeat-y;
  background-size: 100%;
  background-position: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .dino-title {
    font-size: 10rem;
    font-weight: 600;
  }
`;

const KakaoBtn = styled.div`
  background-size: cover;
  margin: 50px auto;
  padding: -10px;
  color: transparent;
  width: 150px;
  height: 45px;
`;