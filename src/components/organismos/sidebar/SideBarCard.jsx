import styled from "styled-components";
import SaveButton from "../../moleculas/SaveButton";
import { variables } from "../../../styles/variables";
import { useContext } from "react";
import { UserThemeContext } from "../../../context/ThemeContext";

const SideBarCard = () => {
  const [themeState] = useContext(UserThemeContext);
  const { generalDictionary } = themeState;
  return (
    <Container>
      <span className="icon">{<variables.iconHelp />}</span>
      <div className="cardContent">
        <div className="circle1" />
        <div className="circle2" />
        <h3>{generalDictionary.HELP_CENTER}</h3>
        <div className="contentBtn">
          <SaveButton
            title={generalDictionary.CONTACT}
            bgColor={variables.colorSelect}
          />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.bg5};
    border-radius: 10px;
    overflow: hidden;

    .circle1,
    .circle2 {
      position: absolute;
      background: ${(props) => props.theme.whiteBg};
      border-radius: 50%;
      opacity: 0.7;
    }
    .circle1 {
      height: 100px;
      width: 100px;
      top: -50px;
      left: -50px;
    }
    .circle2 {
      height: 130px;
      width: 130px;
      bottom: -80px;
      right: -70px;
    }
    h3 {
      font-size: 1.1rem;
      margin-top: 1rem;
      padding: 1rem 0;
      font-weight: 800;
      color: #000;
    }
    .contentBtn {
      position: relative;
    }
  }
`;
export default SideBarCard;
