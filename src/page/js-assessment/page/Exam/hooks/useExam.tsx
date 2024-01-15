import { useCallback, useEffect, useState } from "react";
import { usePosts } from "./usePosts";

export interface IQuestion {
  id: number;
  description: string;
  answers: Array<string>;
  userAnswerIndex: null | number;
}
export interface IActiveQuestion extends IQuestion {
  startedDate: Date;
  number: number;
}
interface QuestionProgress {
  userFriendlyValue: string;
  value: number;
  max: number;
  isNextButtonActive: boolean;
}
export const useExam = () => {
  const [questionProgress, setQuestionProgress] =
    useState<QuestionProgress | null>(null);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(-1);
  const [activeQuestion, setActiveQuestion] = useState<IActiveQuestion | null>(
    null
  );
  const [questions, setQuestions] = useState<Array<IQuestion> | null>(null);
  const { data, loading } = usePosts();

  const setQuestionByIndex = useCallback(
    (index: number, questionArray: Array<IQuestion> | null) => {
      if (!questionArray) {
        return;
      }
      const question = questionArray[index];
      if (!question) {
        setIsExamCompleted(true);
        document.title = `Exam Completed`;
        return;
      }
      setActiveQuestionIndex(index);
      setActiveQuestion({
        ...question,
        startedDate: new Date(),
        number: index + 1,
      });
      document.title = `Question: ${index + 1} / ${questionArray?.length}`;
    },
    []
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    const first10Data = data.splice(0, 10);
    const questions: Array<IQuestion> = first10Data.map((post) => ({
      id: post.id,
      description: post.title,
      answers: post.body.split("\n").map((str) => str.trim()),
      userAnswerIndex: null,
    }));
    setQuestions((prev) => {
      if (!prev) {
        setQuestionByIndex(0, questions);
        return questions;
      }
      return prev;
    });
  }, [setQuestionByIndex, data, loading]);

  const onNext = useCallback(() => {
    setQuestionByIndex(activeQuestionIndex + 1, questions);
  }, [questions, setQuestionByIndex, activeQuestionIndex]);
  useEffect(() => {
    if (isExamCompleted) {
      return;
    }
    const id = setInterval(() => {
      if (!activeQuestion) {
        return;
      }
      const questionTime = 30 * 1000;
      const nextButtonTime = questionTime - 10 * 1000;
      // const nextButtonTime = questionTime - 1 * 1000;
      const completeTime = activeQuestion.startedDate.getTime() + questionTime;
      const offsetTime = completeTime - new Date().getTime();
      const isNextButtonActive = offsetTime > nextButtonTime;
      setQuestionProgress({
        userFriendlyValue: (offsetTime / 1000).toFixed(1),
        value: offsetTime,
        max: questionTime,
        isNextButtonActive,
      });
      if (offsetTime > 0) {
        return;
      }
      onNext();
      setQuestionProgress(null);
    }, 100);

    return () => clearInterval(id);
  }, [activeQuestion, onNext, isExamCompleted]);

  const setActiveQuestionAnswer = useCallback(
    (answerIndex: number) => {
      setQuestions((prev) => {
        if (!prev) {
          return prev;
        }
        const arr = [...prev];
        const question = arr[activeQuestionIndex];
        arr[activeQuestionIndex] = {
          ...question,
          userAnswerIndex: answerIndex,
        };
        return arr;
      });
      setActiveQuestion((prev) => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          userAnswerIndex: answerIndex,
        };
      });
    },
    [activeQuestionIndex]
  );
  const questionCount = questions?.length || 0;
  const getResult = useCallback(() => {
    if (!questions) {
      return [];
    }
    return [...questions];
  }, [questions]);
  return {
    getResult,
    activeQuestion,
    isExamCompleted,
    loading,
    questionProgress,
    questionCount,
    onNext,
    setActiveQuestionAnswer,
  };
};
