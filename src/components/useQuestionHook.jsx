import { useState } from 'react';
import { GetRandomObject } from './GetRandomObject';

//Nastavuje 15 nahodnych indexu z pole
export const useQuestionHook = (questionsData) => {
  const questionIndex = questionsData.map((value, index) => {
    return index;
  });

  let buildSet = [];
  for (let i = 0; i < 15; i++) {
    buildSet.push(GetRandomObject(questionIndex));
  }

  const [questionSet, setQuestionSet] = useState(buildSet);
  return [questionSet, setQuestionSet];
};
