import styled from "styled-components";
import { SaveButton } from "../moleculas/SaveButton";
import { variables } from "../../styles/variables";
import { googleSignInFirebase } from "../../api/firebase/Auth";

const SignInTemplate = () => {
  const signInGoogle = () => {
    googleSignInFirebase()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <Container $image={variables.bgImage}>
      <div className="contentCard">
        <span className="version">version1.0</span>
        <div className="contentImg">
          <img src={variables.logo} />
        </div>
        <Title>Cash Control</Title>
        <p className="description">
          Toma el control de tu 💰 y empieza a controlar tus gastos.
        </p>
        <ContainerBtn>
          <SaveButton
            title={"Iniciar con Google"}
            icon={<variables.iconGoogle />}
            bgColor={variables.colorSecondary}
            buttonFunction={signInGoogle}
          />
        </ContainerBtn>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${(props) => props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    .version {
      color: #727272;
      text-align: start;
    }
    .contentImg {
      img {
        max-width: 60%;
        animation: flotar 1.5s ease-in-out infinite alternate;
      }
    }
    .description {
      color: #909090;
      font-size: 1.2rem;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: 700;
`;

export default SignInTemplate;
