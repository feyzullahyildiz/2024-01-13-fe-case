import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../../components";

import { useCallback } from "react";

export const Entrance = () => {
  const navigate = useNavigate();
  const onStartExam = useCallback(() => {
    const res = confirm(
      "The exam will be started after you confirm this dialog"
    );
    if (!res) {
      return;
    }
    navigate("/js-assesment/exam");
  }, [navigate]);
  return (
    <Container vertical>
      <h1>Online Examination System</h1>

      <h3>Question Dynamics:</h3>
      <ul>
        <li>
          A curated set of 10 questions forms the core of each examination,
          promoting a focused and targeted assessment process.
        </li>
        <li>
          Each question comes with a time limit of 30 seconds, challenging
          participants to provide prompt yet accurate responses.
        </li>
      </ul>

      <h3>Automatic Progression:</h3>
      <ul>
        <li>
          To maintain a steady pace, the system seamlessly transitions to the
          next question if a participant exceeds the 30-second time
          limit—excluding the final question.
        </li>
        <li>
          This automatic progression ensures a dynamic testing environment,
          keeping participants engaged throughout the examination.
        </li>
      </ul>

      <h3>Strategic Timing Consideration:</h3>
      <ul>
        <li>
          Acknowledging the significance of timing, participants are temporarily
          disabled from advancing to the next question within the initial 10
          seconds.
        </li>
        <li>
          This brief pause encourages thoughtful consideration before moving on,
          striking a balance between swift decision-making and fair assessment.
        </li>
      </ul>

      <h3>Challenge and Fairness Nexus:</h3>
      <ul>
        <li>
          The strategic interplay of time constraints adds a layer of challenge
          to the examination, fostering an environment that simulates real-world
          decision-making scenarios.
        </li>
        <li>
          At the same time, the system remains committed to fairness, ensuring
          all participants face similar conditions, irrespective of their
          ability to navigate the time limitations.
        </li>
      </ul>

      <h3>Real-Time Monitoring:</h3>
      <ul>
        <li>
          Administrators have the capability to monitor the progress of
          participants in real-time, allowing for immediate identification and
          resolution of any technical issues or anomalies.
        </li>
        <li>
          This real-time monitoring feature enhances the overall reliability and
          integrity of the assessment process.
        </li>
      </ul>

      <h3>Post-Exam Feedback:</h3>
      <ul>
        <li>
          Participants receive detailed feedback on their performance, including
          insights into the time taken for each question.
        </li>
        <li>
          This post-exam feedback not only aids in understanding strengths and
          weaknesses but also serves as a valuable tool for continuous
          improvement in subsequent assessments.
        </li>
      </ul>

      <Button onClick={onStartExam}>Start Exam</Button>
    </Container>
  );
};
