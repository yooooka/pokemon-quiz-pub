import { Button, Heading, Grid, Paragraph } from "theme-ui";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { questions } from "../data";
import useLocalStorage from "../LocalStorage";
import { Layout } from "./Layout";

interface FinalProps {
  setNumberCorrect: React.Dispatch<React.SetStateAction<number>>;
  numberCorrect: number;
}

export const Final: FC<FinalProps> = ({ numberCorrect, setNumberCorrect }) => {
  const [bestScore, setBestScore] = useLocalStorage<{
    score: number;
    date: number;
  }>("best-score", {
    score: 0,
    date: 0
  });
  const navigate = useNavigate();

  let message = "Try again?";
  if (numberCorrect > (1 / 3) * questions.length) {
    message = "You did great!";
  }
  if (numberCorrect > (2 / 3) * questions.length) {
    message = "You are a Pokémon Expert!";
  }

  let timestamp = bestScore.date;
  let formattedDate = new Date(timestamp).toLocaleDateString("en-US");

  return (
    <Layout>
      <Heading as="h1" variant="text.h1">
        {message}
      </Heading>
      <Heading as="h2" variant="text.h2" sx={{ color: "secondary", pb: 4 }}>
        You got {numberCorrect} out of {questions.length} questions.
      </Heading>
      {bestScore.date > 0 ? (
        <Paragraph
          variant="text.p"
          sx={{ color: "secondary", "& span": { fontWeight: "bold" }, pb: "3" }}
        >
          Your best score so far was <span>{bestScore.score}</span> on &nbsp;
          <span>{formattedDate}</span>
        </Paragraph>
      ) : null}
      <Grid columns={1} sx={{ justifyItems: "center" }}>
        <Button
          onClick={() => {
            setBestScore((prev) => {
              if (numberCorrect > prev.score) {
                return {
                  score: numberCorrect,
                  date: Date.now()
                };
              }
              return bestScore;
            });
            setNumberCorrect(0);
            return navigate("/");
          }}
        >
          Go Back to Start
        </Button>
      </Grid>
    </Layout>
  );
};
