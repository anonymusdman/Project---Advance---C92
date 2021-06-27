var player1;
var player2;
var question_turn = "player1";
var answer_turn = "player2";
var number1 = 0;
var number2 = 0;
var player1_score = 0;
var player2_score = 0;
var get_answer = 0;
     player1 = localStorage.getItem("player_1_name");
     player2 = localStorage.getItem("player_2_name");
     document.getElementById("player1_name").innerHTML = player1 + " score: ";
     document.getElementById("player2_name").innerHTML = player2 + " score: ";
     document.getElementById("player1_name_output").innerHTML = player1;
     document.getElementById("player2_name_output").innerHTML = player2;
     document.getElementById("player1_score").innerHTML = player1_score;
     document.getElementById("player2_score").innerHTML = player2_score;
     function send(){
          number1 = document.getElementById("number1").value;
          number2 = document.getElementById("number2").value;
          answer = parseInt(number1) * parseInt(number2);
          question_numbers = "<h4>" + number1 + "X" + number2 + "</h4>";
          inputbox = "<br>Answer: <input id='input_answer' placeholder='Enter your answer here'>";
          check_button = "<br><br><button type='button' class='btn btn-primary' onclick='check()'>Check</button>";
          row = question_numbers + inputbox + check_button;
          document.getElementById("output").innerHTML = row;
          document.getElementById("number1").value = "";
          document.getElementById("number2").value = "";
     }
     function check(){
          get_answer = document.getElementById("input_answer").value;
          document.getElementById("output").innerHTML = "";
          if(get_answer == answer){
               if(answer_turn == "player2"){
                    answer_turn = "player1";
                    player2_score = player2_score + 1;
                    document.getElementById("player1_score").innerHTML = player1_score;
                    document.getElementById("player2_score").innerHTML = player2_score;
               }
               else{
                    answer_turn = "player2";
                    player1_score = player1_score + 1;
                    document.getElementById("player1_score").innerHTML = player1_score;
                    document.getElementById("player2_score").innerHTML = player2_score;
               }
               if(question_turn == "player2"){
                    question_turn = "player1";
                    document.getElementById("player1_name_output").innerHTML = player1;
                    document.getElementById("player2_name_output").innerHTML = player2;
               }
               else{
                    question_turn = "player2";
                    document.getElementById("player1_name_output").innerHTML = player2;
                    document.getElementById("player2_name_output").innerHTML = player1;
               }
          }
     }