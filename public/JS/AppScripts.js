//Instance variables for the program
let icount = 0;
let a = new Array();
let ticket = new Array();

/**
 * BetterLuckNextTime function 
 * throws an alert that you have lost the game 
 * Prompts the user to play again
 */
function betterLuckNextTime(){
    alert("Better luck next time")
    if(confirm("Would you like to play again")){
        location.reload(true)
    }
}
/**
 * Generates a random number within the range of 1 to 25
 * and some game logic included
 */
function addNumber() {
    let x = Math.floor((Math.random() * 25) + 1);
    for(let i=0; i<a.length; i++){
        if(a.includes(x)){
            x = Math.floor((Math.random() * 25) + 1)
        }
        else{
            continue
        }
    }
    let numberElement = document.createElement("p")
    numberElement.id = "number" + icount
    icount++;
    if(a.length<15){
        a.push(x);
        $(numberElement).html(x);
        $(".bingoNumbers .col-lg-12").append(numberElement)
    }
    else{
        betterLuckNextTime()
    }
}
/**
 * Checks if the user has clicked the right numbers which match the ones generated
 * Also it congratulates the user and prompts for a re game.
 */
function bingo(){
    let counter = 0;
    for(let m=0; m<ticket.length; m++){
        for(let n=0; n<a.length; n++){
            if(a[n]==ticket[m]){
                counter += 1
            }
        }
    }
    if(counter == 5){
        alert("BINGO!! Congratulations you have won the game.")
        if(confirm("Would you like to play again")){
            location.reload(true)
        }
    }
    else{
        betterLuckNextTime()

    }
}
/**
 * Adding a class to the matching numbers in our ticket when clicked upon
 */
$(".gameCol span").click(async function(){
    await css($(this).parent());
    ticket.push($(this).html())
    if(ticket.length==5){
        bingo();
    }
})
/**
 * 
 * @param {*} element apply css to this element
 * returns true when css is applied to this 
 */
function css(element){
    element.css("background","#cccccc")
    return Promise.resolve(1);
}