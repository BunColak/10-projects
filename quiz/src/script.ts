import QUESTIONS from './questions.json'
const CORRECT_ANSWERS = (QUESTIONS as any).map((question: any) => question.answers.indexOf(question.answers.find((answer: any) => answer.correct)))
let userAnswers: number[] = [];

let currentIndex = 0;

const TITLE_ELEMENT = document.getElementById("question-title")!;
const ANSWER_1_ELEMENT = document.getElementById("choice-label-1")!;
const ANSWER_2_ELEMENT = document.getElementById("choice-label-2")!;
const ANSWER_3_ELEMENT = document.getElementById("choice-label-3")!;
const ANSWER_4_ELEMENT = document.getElementById("choice-label-4")!;
const ANSWERS: any = document.getElementsByClassName('card__answer');
const ANSWER_LIST = document.getElementsByClassName('card__answer-list')[0] as HTMLDivElement;
const BUTTON = document.getElementsByClassName("card__button")![0]! as HTMLButtonElement;
const ERROR_EL = document.getElementsByClassName("card__error")![0]!; 

const setContent = (index: number) => {
  TITLE_ELEMENT.innerHTML = QUESTIONS[index].title;
  ANSWER_1_ELEMENT.innerHTML = QUESTIONS[index].answers[0].content;
  ANSWER_2_ELEMENT.innerHTML = QUESTIONS[index].answers[1].content;
  ANSWER_3_ELEMENT.innerHTML = QUESTIONS[index].answers[2].content;
  ANSWER_4_ELEMENT.innerHTML = QUESTIONS[index].answers[3].content;
};

const renderResults = () => {
    const score = userAnswers.reduce((acc, val, index) => val === CORRECT_ANSWERS[index] ? acc + 1 : acc, 0)

    ANSWER_LIST.style.display = "none";
    TITLE_ELEMENT.innerHTML = "Congrats, you have finished the quiz"

    BUTTON.innerHTML = `${score}/${QUESTIONS.length}`
    BUTTON.disabled = true;
}

const initQuiz = () => {
  setContent(0);
};

const getSelectedAnswer = () => {
    let selected;
    for (let i = 0; i < ANSWERS.length; i++ ) {
        if (ANSWERS[i].checked)
            selected = i;
    }
    return selected;
}

const onFormSubmit = (e: any) => {
    const selectedAnswer = getSelectedAnswer();

    if (typeof selectedAnswer === "undefined") {
        ERROR_EL.innerHTML = "Please select an option."
    } else {
        ERROR_EL.innerHTML = ""

        userAnswers.push(selectedAnswer);

        if (currentIndex !== QUESTIONS.length - 1) {
            currentIndex++;
            setContent(currentIndex);
        } else {
            renderResults()
        }
    }
}

BUTTON.addEventListener('click', onFormSubmit);

initQuiz();
