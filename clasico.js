const choices = ["piedra", "papel", "tijeras"];
const resultText = document.getElementById("result");
const iaChoiceDiv = document.getElementById("ia-choice");

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, ia) {
    if (player === ia) {
        return "Empate";
    } else if (
        (player === "piedra" && ia === "tijeras") ||
        (player === "papel" && ia === "piedra") ||
        (player === "tijeras" && ia === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

function playerChoose(playerChoice) {
    const iaChoice = getRandomChoice();
    updateIAChoice(iaChoice);
    const result = determineWinner(playerChoice, iaChoice);
    resultText.textContent = result;
}

function updateIAChoice(choice) {
    const imagePath = `${choice}.png`;
    iaChoiceDiv.innerHTML = `<img src="${imagePath}" alt="${choice}">`;
}
