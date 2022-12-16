import { Button, Heading, Grid, Paragraph, Link } from "theme-ui";
import { useNavigate } from "react-router-dom";
import { Layout } from "./Layout";

export function Start() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Heading as="h1" variant="text.h1">
        Wanna play?
      </Heading>
      <Paragraph variant="text.p">
        Answer questions if you are bored!
        <span role="img" aria-label="emoji-lightning">
          ⚡️
        </span>
        Pika!
      </Paragraph>
      <Grid columns={1} sx={{ justifyItems: "center" }}>
        <Button
          onClick={() => {
            return navigate("/question/0");
          }}
        >
          Start
        </Button>
        <Link
          href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
          variant="text.smaller"
          target="_blank"
        >
          Nope, I wanna learn.
        </Link>
      </Grid>
    </Layout>
  );
}
