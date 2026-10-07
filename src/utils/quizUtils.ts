import { Question, ClinicalCase } from '../types';

/**
 * Modern Fisher-Yates array shuffle
 */
export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Randomize options of a question while correctly updating correctIndex
 */
export function randomizeQuestionOptions(q: Question): Question {
  const originalCorrectOption = q.options[q.correctIndex];
  
  // Pair options with their identity
  const paired = q.options.map((opt, idx) => ({
    text: opt,
    isCorrect: idx === q.correctIndex,
  }));
  
  const shuffledPairs = shuffleArray(paired);
  const newCorrectIndex = shuffledPairs.findIndex(p => p.isCorrect);
  
  return {
    ...q,
    options: shuffledPairs.map(p => p.text),
    correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
  };
}

/**
 * Randomizes an entire list of questions (and optionally shuffles question order too)
 */
export function randomizeQuestionsList(
  questions: Question[], 
  randomizeOptions = true, 
  shuffleQuestionOrder = false
): Question[] {
  let list = questions.map(q => randomizeOptions ? randomizeQuestionOptions(q) : { ...q });
  if (shuffleQuestionOrder) {
    list = shuffleArray(list);
  }
  return list;
}

/**
 * Randomizes clinical case step options
 */
export function randomizeClinicalCaseSteps(clinicalCase: ClinicalCase): ClinicalCase {
  return {
    ...clinicalCase,
    steps: clinicalCase.steps.map(step => {
      const originalCorrectOption = step.options[step.correctIndex];
      const paired = step.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === step.correctIndex
      }));
      const shuffled = shuffleArray(paired);
      const newCorrectIndex = shuffled.findIndex(p => p.isCorrect);
      return {
        ...step,
        options: shuffled.map(p => p.text),
        correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0
      };
    })
  };
}
