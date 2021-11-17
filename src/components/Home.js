import homeImage from '../images/gratibox_home.png';
//import homeImageMobile from '../images/gratibox_home_mobile.png';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <img src={homeImage} alt='home' />
      <TopBox>
        <h1>Bem vindo ao GratiBox</h1>
        <h2>
          Receba em casa um box com chás, produtos organicos, incensos e muito
          mais...
        </h2>
      </TopBox>
      <BottomBox>
        <ToStartButton>Quero começar</ToStartButton>
        <AlreadyThankfulButton>Já sou grato</AlreadyThankfulButton>
      </BottomBox>
    </Container>
  );
}

//----- Styled Components -----

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  img {
    width: 100vw;
    height: 100vh;
  }
`;

const TopBox = styled.div`
  width: 25vw;
  height: 20vh;
  position: fixed;
  top: 0;
  left: calc(50vw - (25vw / 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 30px;
    color: #fff;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: #fff;
  }
`;

const BottomBox = styled.div`
  width: 25vw;
  height: 20vh;
  position: fixed;
  bottom: 0;
  left: calc(50vw - (25vw / 2));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px;
`;

const ToStartButton = styled.button`
  width: 202px;
  height: 45px;
  background: #8c97ea;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
`;

const AlreadyThankfulButton = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  background-color: #4d65a8;
  cursor: pointer;
`;
