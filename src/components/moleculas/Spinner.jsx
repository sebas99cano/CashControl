import styled from "styled-components";

const Spinner = () => {
  return (
    <Container>
      <div className="spinner" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.gbTotal};

  .spinner {
    border: 10px solid rgba(0, 0, 0, 0.1);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-left-color: ${({ theme }) => theme.carouselColor};
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Spinner;
