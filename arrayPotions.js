document.getElementsByClassName('potions-function')[0].onclick = function(){console.log(0)};
document.getElementsByClassName('potions-function')[1].onclick = function(){console.log(0)};
document.getElementsByClassName('potions-function')[2].onclick = function(){console.log(0)};
document.getElementsByClassName('potions-function')[3].onclick = function(){console.log(0)};
document.getElementsByClassName('potions-function')[4].onclick = function(){console.log(0)};
document.getElementsByClassName('potions-function')[5].onclick = function(){console.log(0)};

var colorToTake = 0;
function giveColorToPotions(){
for(color = 0; color <= 5 /*document.getElementsByClassName('potions-color').length*/; color++){
    document.getElementsByClassName('potions-color')[color].style.backgroundColor = document.getElementsByClassName('Hex_color_code')[colorToTake].textContent;
    colorToTake++;
    }
}
