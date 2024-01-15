import { useCallback } from "react";
import styled from "@emotion/styled";
import { Container } from "../../../../components";
import { Link, useLocation } from "react-router-dom";
import { IQuestion } from "../Exam/hooks";

const H1 = styled.h1`
  text-align: center;
`;
const Table = styled.table`
  text-align: center;
  border: 1px solid white;
  border-collapse: collapse;
  td {
    border: 1px solid white;
    border-collapse: collapse;
  }
`;
const TD = styled.td`
  padding: 8px;
`;
const Fill = styled.div`
  flex: 1;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 8px;
`;

export const ShowResult = () => {
  const location = useLocation();
  const questions = location.state as IQuestion[];

  const getText = useCallback((value: number | null) => {
    if (value === null) {
      return "-";
    }
    return String.fromCharCode(65 + value);
  }, []);
  return (
    <Container vertical style={{ margin: 0 }}>
      <H1>EXAM RESULT</H1>
      <Table>
        <tbody>
          <tr>
            <TD>NUMBER</TD>
            <TD>RESULT</TD>
          </tr>
          {questions.map((question) => (
            <tr key={question.id}>
              <TD>{question.id}</TD>
              <TD>{getText(question.userAnswerIndex)}</TD>
            </tr>
          ))}
        </tbody>
      </Table>
      <Fill />
      <LinkContainer>
        <Link to="/"> Go back to MAIN PAGE</Link>
        <Link to="/js-assesment"> Go back to START PAGE</Link>
      </LinkContainer>
    </Container>
  );
};
