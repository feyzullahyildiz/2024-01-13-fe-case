import styled from "@emotion/styled";
import { Button, Container, Progress } from "../../../../components";
import { Question } from "./components";
import { useExam } from "./hooks";
import { Navigate } from "react-router-dom";

const Status = styled.h2`
  width: 100%;
  padding: 8px 0;
  margin: 0;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`;

const QuestionContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const ButtonContainer = styled.div`
  width: 100%;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;
  gap: 16px;
  padding-top: 16px;
`;

export const Exam = () => {
  const {
    isExamCompleted,
    activeQuestion,
    questionProgress,
    questionCount,
    getResult,
    setActiveQuestionAnswer,
    onNext,
  } = useExam();

  if (isExamCompleted) {
    return (
      <Navigate to="/js-assesment/show-result" state={getResult()} replace />
    );
  }
  return (
    <Container noPadding style={{ margin: 0, maxWidth: "unset" }} vertical>
      <Progress
        value={activeQuestion?.number}
        max={questionCount}
        barColor="#e9ecef"
        color="#228be6"
      />
      <Container
        vertical
        alignItems="flex-start"
        style={{ margin: 0, flex: 1, maxWidth: "unset" }}
      >
        <Status>
          <span>Exam Status</span>
          <span>
            {activeQuestion?.number} / {questionCount}
          </span>
        </Status>
        <QuestionContainer>
          {activeQuestion && (
            <Question
              question={activeQuestion}
              onSetAnswerIndex={setActiveQuestionAnswer}
            />
          )}
        </QuestionContainer>
        {questionProgress && (
          <Progress
            value={questionProgress.value}
            max={questionProgress.max}
            barColor="#e9ecef"
            color="#228be6"
          />
        )}
        <ButtonContainer>
          <Button
            disabled={questionProgress?.isNextButtonActive || false}
            onClick={onNext}
          >
            {questionProgress && `(${questionProgress.userFriendlyValue})`} Next
            Question
          </Button>
        </ButtonContainer>
      </Container>
    </Container>
  );
};
