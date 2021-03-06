import React from "react";
import { ThemeProvider } from "styled-components";
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbImported }) {
    return (
      <ThemeProvider theme={dbImported.theme}>
        <QuizScreen
          externalQuestions={dbImported.questions}
          externalBg={dbImported.bg}
        />
      </ThemeProvider>
    );
  }

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");

  try {
    const dbImported = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    )
      .then((responseServer) => {
        if (responseServer.ok) {
          return responseServer.json();
        }
        throw new Error("Falha em pegar os dados");
      })
      .then((responseObject) => responseObject)
      .catch((err) => {
        console.log(err)
      });
    return {
      props: {
        dbImported,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
