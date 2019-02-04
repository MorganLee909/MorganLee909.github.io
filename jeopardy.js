var headers = document.querySelectorAll(".header th");
var choices = document.querySelectorAll(".table-row td");
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content p");

for(var i = 0; i < 6; i++){
    var currentQuestions = [];
    var modalQuestion = "";
    for(var i = 0; i < 6; i++){
        var keys = Object.keys(questions);
        currentQuestions[i] = questions[keys[Math.floor(keys.length * Math.random())]];
    }

    var count = 0;
    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 6; j++){
            choices[count].row = i;
            choices[count].column = j;
            count++;
        }
    }

    choices.forEach(function(choice){
        choice.addEventListener("click", buttonClick);
    });

    function buttonClick(){
        var currentQuestion = currentQuestions[this.column];
        var keys = Object.keys(currentQuestion);
        modalQuestion = currentQuestion[keys[this.row + 1]];

        modalContent.innerHTML = (modalQuestion.question).toUpperCase();
        modal.style.visibility = "visible";

        this.innerHTML = "";
        this.style.cursor = "default";
        this.removeEventListener("click", buttonClick);
    }

    for(var i = 0; i < 6; i++){
        headers[i].innerHTML = currentQuestions[i].title.toUpperCase();
    }

    var showingQuestion = true;
    modal.addEventListener("click", function(){

        if(showingQuestion){
            modalContent.innerHTML = (modalQuestion.answer).toUpperCase();
            showingQuestion = false;
        }else{
            modal.style.visibility = "hidden";
            showingQuestion = true;
        }
    });
}