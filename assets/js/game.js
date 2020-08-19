var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Prince Robot IVV", "Robot Mike Tyson"];
var enemyHealth = 50;
var enemyAttack = 12;
// you can also log multiple values at once like this



var fight = function(enemyName) {
   // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or RUN from this battle? Enter 'FIGHT' or 'RUN' to decide.");
    // if player choses to fight then fight
    if (promptFight === "fight" || promptFight === "FIGHT" || promptFight === "Fight") {
    //Subtract the value of 'playerAttack'from the value of 'enemyHealth' and use that result to update tje valuein the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    //Loga resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has exploaded!");
    }
    else{
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
        playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName = " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    // check player's health
    if (playerHealth <= 0){
        window.alert(playerName + " has combusted!");
    }
    else{
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player chooses to skip
} else if (promptFight === "run" || promptFight === "RUN" || promptFight === "Run") {
    // confirm user wants to run
    var confirmSkip = window.confirm("Are you sure you'd like to run away from a challenge?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to embarass his bloodline.");
        //subtract money from playerMoney for running
        playerMoney = playerMoney - 2;
    }
    else {
        fight();
    }
} else {
    window.alert("You need to pick a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
