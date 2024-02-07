import styled from "styled-components";

const CircularButton = ({
  icon,
  width,
  height,
  bgColor,
  textColor,
  fontSize,
  translateX,
  translateY,
}) => {
  return (
    <Container
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $textColor={textColor}
      $fontSize={fontSize}
      $translateX={translateX}
      $translateY={translateY}
    >
      <span>{icon}</span>
    </Container>
  );
};
const Container = styled.div`
  background-color: ${(props) => props.$bgColor};
  min-width: ${(props) => props.$width};
  min-height: ${(props) => props.$height};
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => props.$translateX})
    translateY(${(props) => props.$translateY});
  span {
    color: ${(props) => props.$textColor};
    font-size: ${(props) => props.$fontSize};
    text-align: center;
  }
`;

export default CircularButton;
