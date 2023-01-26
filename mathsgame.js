let sound = new Audio();
let score = 0;
let vraagBox = document.getElementById("vraag");
let antwForm = document.getElementById("quizForm");
let feedback = document.getElementById("feedback");
let loop;
let counter = 0;




function setAdditionGame() {
    antwForm.setAttribute("data-gametype", "addition");
    //laat 1.5 sec lang plussommen zien
    loop = setInterval(additionQuiz,150);
}

function setSubtractionGame() {
    antwForm.setAttribute("data-gametype", "subtraction");
    loop = setInterval(subtractionQuiz,150);   
}

function setMultiplicationGame() {
    antwForm.setAttribute("data-gametype", "multiplication"); 
    loop = setInterval(multiplicationQuiz,150); 
}

function setDivisionGame() {
    antwForm.setAttribute("data-gametype", "division");
    loop = setInterval(divisionQuiz,150);
}


function checkAnswer() {
    let gametype = antwForm.getAttribute("data-gametype");
    
    if (antwForm["answer"].value ==antwForm["rightAnswer"].value) {
        document.getElementById("ans").innerHTML = "Goed gedaan! Weer een puntje erbij!";
        //tel een punt bij de score op
        score++;
        //speel geluid af bij juist antwoord
        sound.src ="sound/cheer.wav";
        sound.play();
        //Laat plaatje zien bij goed antwoord
        feedback.src = "img/goed.png";
    }else{
        document.getElementById("ans").innerHTML = "Jammer! Het juiste antwoord had " + antwForm["rightAnswer"].value + " moeten zijn. Dat kost je 1 punt!";
        score--;
        //speel geluid af bij fout antwoord
        sound.src ="sound/booh.wav";
        sound.play();
        //laat plaatje zien bij fout antwoord
        feedback.src = "img/fout.png";
    }
    antwForm["answer"].value = "";
    scoreBox.textContent = score;
    if (gametype == "addition"){
        additionQuiz()
        }else if (gametype == "subtraction"){
        subtractionQuiz()
    }else if (gametype =="multiplication"){
        multiplicationQuiz()
    }

    else if (gametype == "division") {
        divisionQuiz();
        }
        return false; 

}


//Functie optellen

function additionQuiz() {
   
let num1 = Math.floor(Math.random() *100);
let num2 = Math.floor(Math.random() *50);

 vraagBox.textContent = "Hoeveel is: " + num1 + " + " + num2 + " ?";
 antwForm["rightAnswer"].value = (num1 + num2);
 
 
//Zodra er meer dan 5 sommen in de loop voorbij zijn gekomen clear interval en counter weer naar 0
 if(counter>6){
    clearInterval(loop);
    counter = 0;
  }
  counter++;
  }


//Functie Aftrekken
function subtractionQuiz() {
    let num1 = Math.floor(Math.random() *30)+ 30;
    let num2 = Math.floor(Math.random() *30);

 vraagBox.textContent = "Hoeveel is: " + num1 + " - " + num2 + " ?";
 antwForm["rightAnswer"].value = (num1 - num2);

 if(counter>6){
    clearInterval(loop);
    counter = 0;
  }
  counter++;
  }


//Functie vermenigvuldigen
function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() *25)+ 1;
    let num2 = Math.floor(Math.random() *10)+ 1;

 vraagBox.textContent = "Hoeveel is: " + num1 + " x " + num2 + " ?";
 antwForm["rightAnswer"].value = (num1 * num2);

 if(counter>6){
    clearInterval(loop);
    counter = 0;
  }
  counter++;
  }


//Functie delen
function divisionQuiz(){
    
    let num2 = Math.round(Math.random() * 8);
    let num1 = Math.round(Math.random() * 10)  * num2 ;
    
    //Als num1 of num2 nul is dan een nieuwe som genereren door de functie divisonQuiz() opnieuw te starten
    if (num1 ==0 || num2 == 0) {
        divisionQuiz() ; 
    }
    //Wanneer er geen nul in de gegenereerde getallen voor komt dan de vraag stellen en controleren van het ingevoerde antwoord
    else {
        vraagBox.textContent = "Hoeveel is: "+ num1 + " / " + num2 + " ?";
        antwForm["rightAnswer"].value = Math.round(num1 / num2);
       
    }
  
if(counter>6){
    clearInterval(loop);
    counter = 0;
  }
  counter++;
  };

