/** @jsxImportSource theme-ui */
import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heading, Checkbox, Label, Button, Text } from "theme-ui";
import { questions, Response } from "../data";
import { Next } from "../Icons";
import { Layout } from "./Layout";

interface QuestionProps {
  setNumberCorrect: React.Dispatch<React.SetStateAction<number>>;
  numberCorrect: number;
}

const Single: FC<{
  responses: Response[];
  onAnswered: (isCorrect: boolean) => void;
}> = ({ responses, onAnswered }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>();
  return (
    <>
      {responses.map((r, currentIndex) => (
        <div key={r.text}>
          <Button
            variant={selectedIndex === currentIndex ? "selected" : "response"}
            sx={{
              width: "100%",
              height: "100%",
              py: "2",
              opacity: selectedIndex !== undefined ? "0.65" : null
            }}
            disabled={selectedIndex !== undefined}
            onClick={() => {
              onAnswered(r.isCorrect);
              setSelectedIndex(currentIndex);
            }}
          >
            {r.text}
          </Button>
        </div>
      ))}
    </>
  );
};

const Multiple: FC<{
  responses: Response[];
  onAnswered: (isCorrect: boolean) => void;
}> = ({ responses, onAnswered }) => {
  const [checked, setChecked] = useState(new Set<number>());
  const [answered, setAnswered] = useState(false);
  return (
    <>
      {responses.map((r, i) => (
        <div key={r.text}>
          <Label
            sx={{
              opacity: answered ? "0.65" : null,
              pointerEvents: answered ? "none" : null
            }}
          >
            <Checkbox
              defaultChecked={false}
              sx={{
                color: "currentColor"
              }}
              onChange={(e) => {
                setChecked((prev) => {
                  const next = new Set(prev);
                  if (e?.target?.checked) {
                    next.add(i);
                  } else {
                    next.delete(i);
                  }
                  return next;
                });
              }}
            />
            <div>{r.text}</div>
          </Label>
        </div>
      ))}
      <Button
        sx={{
          display: answered ? "none" : null,
          gridColumnEnd: [null, "span 2", "span 2"],
          placeSelf: "center"
        }}
        onClick={() => {
          const wrongResponse = responses.find((value, index) => {
            if (value.isCorrect && checked.has(index)) {
              return false;
            }
            if (!value.isCorrect && !checked.has(index)) {
              return false;
            }
            return true;
          });
          onAnswered(wrongResponse === undefined);
          setAnswered(true);
        }}
      >
        Check Answer
      </Button>
    </>
  );
};

export const Question: FC<QuestionProps> = ({
  numberCorrect,
  setNumberCorrect
}) => {
  const navigate = useNavigate();
  const { questionIndex } = useParams();
  const [isCorrect, setIsCorrect] = useState<boolean>();
  useEffect(() => {
    setIsCorrect(undefined);
  }, [questionIndex]);
  const current = parseInt(questionIndex || "0", 10);
  const next = current + 1;
  const question = questions?.[current];
  const isMultiSelect =
    question.responses.filter((resp) => resp.isCorrect).length > 1;

  return (
    <Layout animate={isCorrect === true}>
      <div key={questionIndex}>
        <Heading as="h1" variant="text.h1" sx={{ color: "secondary" }}>
          Question {current + 1}
        </Heading>
        <Text as="p" sx={{ color: "secondary" }}>
          {question.text}
        </Text>
        <div
          sx={{
            p: 3,
            paddingInline: 0,
            marginBlock: 0,
            display: "grid",
            gridAutoFlow: "row",
            gridGap: 3,
            gridTemplateRows: [null, "auto", "auto"],
            gridTemplateColumns: [null, "1fr 1fr", "1fr 1fr"]
          }}
        >
          {isMultiSelect === true ? (
            <Multiple
              responses={question.responses}
              onAnswered={(answerIsCorrect) => setIsCorrect(answerIsCorrect)}
            />
          ) : (
            <Single
              responses={question.responses}
              onAnswered={(answerIsCorrect) => setIsCorrect(answerIsCorrect)}
            />
          )}
        </div>
        {numberCorrect !== undefined ? (
          <Text as="p" variant="smaller" sx={{ color: "secondary" }}>
            Score: {numberCorrect + (isCorrect ? 1 : 0)} / {questions.length}
          </Text>
        ) : null}
        {isCorrect !== undefined ? (
          <>
            <Text
              as="p"
              variant="text.p"
              sx={{
                fontWeight: "bold"
              }}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </Text>
            <Button
              variant="primary"
              sx={{ display: "flex", margin: "auto", paddingRight: 2, mb: 2 }}
              onClick={() => {
                if (isCorrect) {
                  setNumberCorrect((prev) => prev + 1);
                }
                navigate(
                  next < questions.length ? `/question/${next}` : "/final"
                );
              }}
            >
              {next < questions.length ? "Next" : "Complete"}
              <Next />
            </Button>
          </>
        ) : null}
      </div>
    </Layout>
  );
};
