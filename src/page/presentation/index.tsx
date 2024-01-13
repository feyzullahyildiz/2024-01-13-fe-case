import { Link } from "react-router-dom";
import styled from "@emotion/styled";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Presentation = () => {
  return (
    <Div>
      <h1>Presentation</h1>
      <Link to="/css-assesment">Click here to go CSS Assesment</Link>
      <br />
      <Link to="/js-assesment">Click here to go JS Assesment</Link>
    </Div>
  );
};
