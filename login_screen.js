function Login(){
    player_1_name = document.getElementById("input1").value;
    player_2_name = document.getElementById("input2").value;
    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);
    window.location = "game_page.html";
}