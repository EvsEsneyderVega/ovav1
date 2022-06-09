import { questions } from './data/questions.js'
import { Quiz } from './models/Quiz.js'
import { UI } from './models/UI.js'

const renderpage = (quiz,ui) => {
    if(quiz.isEnded()){
        ui.showScores(quiz.score);
    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choise,(currentChoise) => 
        {quiz.guess(currentChoise)
        renderpage(quiz,ui)});
        ui.showProgress(quiz.indice+1,quiz.questions.length);
        ui.showSound(quiz.getQuestionIndex().noise);
        //ui.repSound()
    }
    
}

function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderpage(quiz,ui)
}   
main();
