import { FC } from "react";
import styled from "@emotion/styled";
import { IActiveQuestion } from "../hooks";

const List = styled.ol`
  counter-reset: answer-counter;
  list-style: none;
  padding: 0;
`;
const ListItem = styled.li`
  font-size: 16px;
  counter-increment: answer-counter;
  position: relative;
  position: flex;
  padding-left: 24px;
  margin-bottom: 8px;

  &::before {
    font-size: 20px;
    position: absolute;
    left: 0;
    bottom: -4px;
    content: counter(answer-counter, upper-latin);
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Radio = styled.input`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
interface Props {
  question: IActiveQuestion;
  onSetAnswerIndex: (val: number) => void;
}
export const Question: FC<Props> = ({ question, onSetAnswerIndex }) => {
  return (
    <div>
      <div>
        <strong>Question ({question.number}): </strong>
        {question.description}
      </div>
      <List type="A">
        {question.answers.map((answer, index) => (
          <ListItem key={index}>
            <Label>
              <Radio
                type="radio"
                name="answer"
                checked={question.userAnswerIndex === index}
                onChange={() => onSetAnswerIndex(index)}
              />
              {answer}
            </Label>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
