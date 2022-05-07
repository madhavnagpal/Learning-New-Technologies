import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 10%;
`;

const Title = styled.h1`
  background: ${(props) => (props.primary ? "#473baa" : "white")};
  color: ${(props) => (props.primary ? "white" : "#473baa")};
  border: 2px solid #473baa;
  font-size: 24px;
  border-radius: 12px;
  padding: 12px;
  text-transform: capitalize;
  text-align: center;
  margin: 12px 0;
`;

const TomatoTitle = styled(Title)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <Wrapper>
      <Title primary>lets learn styled components</Title>
      <Title>lets learn styled components</Title>
      <TomatoTitle as="h3">lets learn styled components</TomatoTitle>
    </Wrapper>
  );
}

export default App;
