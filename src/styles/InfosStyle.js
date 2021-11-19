import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #6d7ce4;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  width: 100vw;
  height: auto;
  padding: 10px;
  margin-bottom: 20px;

  h1 {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    color: #ffffff;
    margin-bottom: 25px;
  }

  h2 {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
`;

const BottomBox = styled.div`
  width: 95vw;
  height: auto;
  background-color: #fff;
  margin: 0px 10px 0 10px;
  border-radius: 25px;
  padding: 0 20px 10px 20px;
  display: flex;
  flex-direction: column;

  img {
    width: 28%;
  }

  @media (max-width: 1200px) {
    img {
      width: 35%;
    }
  }

  @media (max-width: 1000px) {
    img {
      width: 42%;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 50%;
    }
  }

  @media (max-width: 700px) {
    display: inherit;
    height: auto;
    img {
      width: 100%;
    }
  }
`;

const ChoiceBox = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #e0d1ed;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const Choice = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 5px;
  background-color: #e0d1ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: bold;
  font-size: 18px;
  color: #4d65a8;
`;

const DropChoice = styled.div`
  width: 100%;
  height: auto;
  border-radius: 5px;
  background-color: #e0d1ed;
  padding: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;

  h1 {
    margin-left: 5px;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const Box = styled.div`
  width: auto;
  height: auto;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;

const NextButton = styled.button`
  width: 202px;
  height: 39px;
  border-radius: 10px;
  background-color: #8c97ea;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 25px;
  margin: 20px auto 0 auto;
`;

const Primary = styled.input`
  width: 100%;
  height: 44px;
  background-color: rgba(224, 209, 237, 0.62);
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding-left: 10px;
  border: none;
  margin-bottom: 10px;

  ::placeholder {
    color: #4d65a8;
  }
`;

const SecundaryBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const SecundaryCity = styled.input`
  width: 60%;
  height: 44px;
  background-color: green;
  border-radius: 5px;
  border: none;
  background-color: rgba(224, 209, 237, 0.62);
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding-left: 10px;

  ::placeholder {
    color: #4d65a8;
  }
`;

const StateBox = styled.div`
  width: 37%;
  height: auto;
  border-radius: 5px;
  background-color: rgba(224, 209, 237, 0.62);
  margin-bottom: 10px;
`;

const SecundaryState = styled.div`
  width: 100%;
  height: 44px;
  background-color: blue;
  border-radius: 5px;
  border: none;
  background-color: rgba(224, 209, 237, 0.62);
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropChoiceInfo = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 5px;
  background-color: rgb(224, 209, 237);
  padding: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  overflow: scroll;

  h1 {
    margin-left: 5px;
    font-size: 18px;
    color: #4d65a8;
  }
`;

const State = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0;
`;

export {
  Container,
  Message,
  Box,
  NextButton,
  DropChoice,
  Choice,
  ChoiceBox,
  BottomBox,
  Primary,
  SecundaryBox,
  SecundaryCity,
  StateBox,
  SecundaryState,
  DropChoiceInfo,
  State,
};
