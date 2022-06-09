export class Question{
    /**
     * 
     * @param {string} text pregunta
     * @param {string[]} choices opciones
     * @param {string} answer respuesta
     * @param {string} noise sonido
     */
    constructor(text,choices,answer,noise){
        this.text = text;
        this.choise = choices;
        this.answer = answer;
        this.noise = noise;
    }

    /**
     * 
     * @param {string} choice opcion seleccionada 
     * @returns {boolean}
     */
    correctAnswer(choice){
        return this.answer === choice;
    }

}