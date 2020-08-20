var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Prince Robot IVV", "Robot Mike Tyson"];
var enemyHealth = 50;
var enemyAttack = 12;
// you can also log multiple values at once like this

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        // ask user if they'd liked to fight or run
        var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
    
        // if user picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
          // confirm user wants to skip
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
          // if yes (true), leave fight
          if (confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
          }
        }
    
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + ' has combusted!');
    
          // award player money for winning
          playerMoney = playerMoney + 20;
    
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
        }
    
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
        );
    
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + ' is no longer motivated!');
          // leave while() loop if player is dead
          break;
        } else {
          window.alert(playerName + ' still has ' + playerHealth + ' health left.');
        }
      }
    };



var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
         if(playerHealth > 0){
             window.alert("welcome to Robot Gladiators! Round " + ( i +1 ) );
   
            var pickedEnemyName = enemyNames[i];
   
            enemyHealth = 50;
   
            fight(pickedEnemyName);
           
            if ( playerHealth > 0 && i< enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                if (storeConfirm) {
                shop();
            }

            }
            }   
        else{
             window.alert("You have lost everything! Game Over!");
            break;
    }
  }
  endGame();
};
var endGame = function(){
    if (playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in the chaos.");
    }
    var playAgainConfirm = window.confirm("Would youlike to play again?");
    
    if (playAgainConfirm) {
        startGame();
    }
    else{
        window.alert("Thank you for playing Robot Gladiators!");
    }
};
var shop = function(){
    var shopOptionPrompt = window.prompt(
        "would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please eneter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );
    switch(shopOptionPrompt){
        case "refill":
        case "REFILL":
        case "Refill":
            if(playerMoney >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
            break;
        case "upgrade":
        case "UPGRADE":
        case "Upgrade":
            if (playerMoney >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money")
            }
            break;
        case "leave":
        case "LEAVE":
        case "Leave":
            window.alert("Leave the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};
startGame();