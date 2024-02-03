import styled from "styled-components";

export const SaveButton = ({ buttonFunction, title, bgColor, icon }) => (
  <Container>
    <span className="icon">{icon}</span>
    <span className="btn" onClick={buttonFunction}>
      {title}
    </span>
  </Container>
);

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
`;
