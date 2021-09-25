
// roll function
function roll(){
 
    const img = document.getElementById("img1");

    // creating random number 1 between 1 to 6
    let randomNumer1 = Math.floor(Math.random() * 6)+1;
    console.log(randomNumer1);
    
    //changing thee image based on randomnumber1 for img1(which is dice1)
    img.setAttribute("src",`${randomNumer1}.png`);
    console.log(img1); // displaying image of dice based on random number. dice of 1 for number 1, dice of 3 for number 3

    
    const img2 = document.getElementById("img2");
     // creating second random number between 1 to 6
    let randomNumer2 = Math.floor(Math.random() * 6)+1;
    console.log(randomNumer2);

    //changing thee image based on randomnumber2 for img2(which is dice2)
    img2.setAttribute("src",`${randomNumer2}.png`);

    // displaying image of dice based on random number. dice of 1 for number 1, dice of 3 for number 3
    console.log(img2);


}

// function to show message on screen 
function message(){
    alert("Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die or two dice. Like other cross and circle games")
}





