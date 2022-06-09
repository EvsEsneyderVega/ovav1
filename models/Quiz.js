//@ts-check
import { Question } from "./Question.js";
export class Quiz{
    indice = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions=questions;
    }

    /**
     * 
     * @returns {Question}
     */
    getQuestionIndex(){
        return this.questions[this.indice]
    }

    isEnded(){
        return this.questions.length === this.indice;
    }

    /**
     * 
     * @param {string} answer 
     */
    guess(answer){
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score ++;
        }
        this.indice ++;
    }
}