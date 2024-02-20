import styled from "styled-components";
import CategoriesTemplate from "../../components/templates/CategoriesTemplate";

const Categories = () => {
  return (
    <Container>
      <CategoriesTemplate />
    </Container>
  );
};
const Container = styled.main`
  height: 100vh;
`;

export default Categories;
