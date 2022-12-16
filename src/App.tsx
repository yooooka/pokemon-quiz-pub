/** @jsxImportSource theme-ui */
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Question } from "./trivia/Question";
import { Start } from "./trivia/Start";
import { Final } from "./trivia/Final";

export default function App() {
  const [numberCorrect, setNumberCorrect] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/question/:questionIndex"
          element={
            <Question
              setNumberCorrect={setNumberCorrect}
              numberCorrect={numberCorrect}
            />
          }
        />
        <Route
          path="/final"
          element={
            <Final
              setNumberCorrect={setNumberCorrect}
              numberCorrect={numberCorrect}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
