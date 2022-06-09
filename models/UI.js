export class UI {
    constructor(){}
    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTittle = document.getElementById('question');
        questionTittle.innerHTML=text;
    }

    /**
     * 
     * @param {string[]} choice 
     */
    showChoices(choice,callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML='';
        for(let i=0;i<choice.length;i++){
            const buton = document.createElement('button');
            buton.innerText=choice[i];
            buton.className='button';
            choicesContainer.append(buton);
            buton.addEventListener("click",() => callback(choice[i]));
        }
    }
    /**
     * 
     * @param {number} score 
     */
    showScores(score){
        const quizEndHtml = 
        '<h1>Resultado</h1>'+
        '<h2>Su puntaje es:'+ score +'</h2>';
        const element = document.getElementById('quiz');
        element.innerHTML=quizEndHtml;
    }
    /*
    repSound(sound){
        const music = new Audio('sound/'+sound);
        music.play();
        music.loop =true;
        music.playbackRate = 2;
        music.pause();
    }
    */
    /**
    * 
    * @param {string} sound 
    */
    showSound(sound){
        const media = document.getElementById('sound')
        media.setAttribute('src','audio/'+sound);
    }
    /**
     * 
     * @param {number} curretIndex 
     * @param {number} total 
     */
    showProgress(curretIndex,total){
        const progress = document.getElementById('progress');        
        progress.innerHTML = 'Pregunta ' + curretIndex + ' de '+ total;
    }
}