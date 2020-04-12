let Numberr = null;
let buttonForWrittingMachine = null;
var writeNumber = 8;

function move(){
    let interval = setInterval(() => {
        Numberr = Numberr + 5;
        var down = Numberr + "px";
        buttonForWrittingMachine.style.top = down;
        setTimeout(() => {
            clearInterval(interval);
            var interval2 = setInterval(() => {
                Numberr = Numberr - 5;
                down = Numberr + "px";
                buttonForWrittingMachine.style.top = down;
                setTimeout(() => {
                    clearInterval(interval2);
                        }, 20);
                }, 45);
        }, 50);
  }, 50);
}

/*
function move(){
    let interval = setInterval(() => {
        Numberr = Numberr + 5;
        down = Numberr + "px";
        buttonForWrittingMachine.style.top = down;
        if (Numberr == 10){

            clearInterval(interval);
            var interval2 = setInterval(() => {
                Numberr = Numberr - 5;
                down = Numberr + "px";
                buttonForWrittingMachine.style.top = down;
                if (Numberr == 0){
                    clearInterval(interval2);
                    }
                }, 100);
        }
  }, 100);
}

*/

/*
function showPosition() {
    var div = document.getElementById("d");
    var rect = div.getBoundingClientRect();
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
    var left = document.getElementById('d').style.left;
    var top = document.getElementById('d').style.top;
    console.log(left, top);
  }
*/

var charactersNumber = 0;

document.getElementById('1').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('1');
    if(charactersNumber <= 12){
    calculator.display.value += '1';
    /*setTimeout(() => {
        buttonForWrittingMachine = document.getElementById("null");
    }, 50);*/
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('2').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('2');
    if(charactersNumber <= 12){
    calculator.display.value += '2';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('3').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('3');
    if(charactersNumber <= 12){
    calculator.display.value += '3';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('4').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('4');
    if(charactersNumber <= 12){
    calculator.display.value += '4';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('5').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('5');
    if(charactersNumber <= 12){
    calculator.display.value += '5';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('6').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('6');
    if(charactersNumber <= 12){
    calculator.display.value += '6';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('7').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('7');
    if(charactersNumber <= 12){
    calculator.display.value += '7';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('8').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('8');
    if(charactersNumber <= 12){
    calculator.display.value += '8';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('9').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('9');
    if(charactersNumber <= 12){
    calculator.display.value += '9';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('0').addEventListener('click', event => {
    move();
    buttonForWrittingMachine = document.getElementById('0');
    if(charactersNumber <= 12){
    calculator.display.value += '0';
    if(charactersNumber >= 1){
    writeNumber = writeNumber + 12;
    document.getElementById('storto').style.left = writeNumber + "px";
    console.log(charactersNumber);
    }
    setTimeout(() => {
        charactersNumber = charactersNumber + 1;
        }, 1);
    }
});

document.getElementById('clear').addEventListener('click', event => {
    buttonForWrittingMachine = document.getElementById('clear');
    move();
    str = calculator.display.value.slice(0, -1); calculator.display.value = str;
    if(charactersNumber > 1){
        writeNumber = writeNumber - 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        $(document).ready(function(){$('#storto').attr('src', '/Writing machine/writer.png');}); document.getElementById('storto').style.top = 15 + 'px'; setTimeout(() => {document.getElementById('storto').style.top = 26 + 'px'; $(document).ready(function(){$('#storto').attr('src', '/Writing machine/Storto.png');});}, 250);
        setTimeout(() => {
            charactersNumber = charactersNumber - 1;
            console.log(charactersNumber);
        }, 1);
    }
    else if(charactersNumber == 1){
        $(document).ready(function(){$('#storto').attr('src', '/Writing machine/writer.png');}); document.getElementById('storto').style.top = 15 + 'px'; setTimeout(() => {document.getElementById('storto').style.top = 26 + 'px'; $(document).ready(function(){$('#storto').attr('src', '/Writing machine/Storto.png');});}, 250);
        writeNumber = 8;
        setTimeout(() => {
            charactersNumber = charactersNumber - 1;
            console.log(charactersNumber);
        }, 1);
    }
});
    var UpperOrLowerCase = "Lower"; 
    document.getElementById('q').addEventListener('click', event => {
        // showPosition()
        // Numberr = document.getElementById('q').style.top;    
        move();
        buttonForWrittingMachine = document.getElementById('q');
        if(charactersNumber <= 12){
            if(UpperOrLowerCase == "Lower")
        calculator.display.value += 'q';
            else calculator.display.value += document.getElementById('q').textContent.toUpperCase();
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('w').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('w');
        if(charactersNumber <= 12){
        calculator.display.value += 'w';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('e').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('e');
        if(charactersNumber <= 12){
        calculator.display.value += 'e';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('r').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('r');
        if(charactersNumber <= 12){
        calculator.display.value += 'r';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('t').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('t');
        if(charactersNumber <= 12){
        calculator.display.value += 't';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('y').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('y');
        if(charactersNumber <= 12){
        calculator.display.value += 'y';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('u').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('u');
        if(charactersNumber <= 12){
        calculator.display.value += 'u';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('i').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('i');
        if(charactersNumber <= 12){
        calculator.display.value += 'i';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('o').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('o');
        if(charactersNumber <= 12){
        calculator.display.value += 'o';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('p').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('p');
        if(charactersNumber <= 12){
        calculator.display.value += 'p';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('a').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('a');
        if(charactersNumber <= 12){
        calculator.display.value += 'a';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('s').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('s');
        if(charactersNumber <= 12){
        calculator.display.value += 's';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('d').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('d');
        if(charactersNumber <= 12){
        calculator.display.value += 'd';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('f').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('f');
        if(charactersNumber <= 12){
        calculator.display.value += 'f';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('g').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('g');
        if(charactersNumber <= 12){
        calculator.display.value += 'g';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('h').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('h');
        if(charactersNumber <= 12){
        calculator.display.value += 'h';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('j').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('j');
        if(charactersNumber <= 12){
        calculator.display.value += 'j';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('k').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('k');
        if(charactersNumber <= 12){
        calculator.display.value += 'k';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('l').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('l');
        if(charactersNumber <= 12){
        calculator.display.value += 'l';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('z').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('z');
        if(charactersNumber <= 12){
        calculator.display.value += 'z';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('x').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('x');
        if(charactersNumber <= 12){
        calculator.display.value += 'x';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('c').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('c');
        if(charactersNumber <= 12){
        calculator.display.value += 'c';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('v').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('v');
        if(charactersNumber <= 12){
        calculator.display.value += 'v';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('b').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('b');
        if(charactersNumber <= 12){
        calculator.display.value += 'b';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('n').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('n');
        if(charactersNumber <= 12){
        calculator.display.value += 'n';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

    document.getElementById('m').addEventListener('click', event => {
        move();
        buttonForWrittingMachine = document.getElementById('m');
        if(charactersNumber <= 12){
        calculator.display.value += 'm';
        if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
            }, 1);
        }
    });

document.getElementById('space').addEventListener('click', event => {
    var Numero = 170;
    var interval = setInterval(() => {
    Numero = Numero + 5;
    if (Numero == 180){

    clearInterval(interval);
    var interval2 = setInterval(() => {
        Numero = Numero - 5;
        down = Numero + "px";
        document.getElementById('space').style.top = down;
        if (Numero == 170){
            clearInterval(interval2);
            }
        }, 100);
          }
      }, 100);
      if(charactersNumber <= 12){
        var down = Numero + "px";
        document.getElementById('space').style.top = down;
        calculator.display.value += ' ';
      if(charactersNumber >= 1){
        writeNumber = writeNumber + 12;
        document.getElementById('storto').style.left = writeNumber + "px";
        console.log(charactersNumber);
        }
    }
        setTimeout(() => {
            charactersNumber = charactersNumber + 1;
        }, 1);
      });

      var td2 = document.createElement('td');
      td2.setAttribute('class', "td");
      td2.textContent = "MAIUSC";
      td2.style.fontSize = 10 + "px";
      td2.style.textTransform = 'uppercase';
      td2.id = "maiusc";
      td2.onclick = function(){UpperOrLowerCase = 'Upper'; document.getElementById('divOfKeyboard').style.textTransform = 'uppercase'; document.getElementById('keyboard_line_with_maiusc').replaceChild(td, document.getElementById('maiusc'));};

      var td = document.createElement('td');
      td.setAttribute('class', "td");
      td.textContent = "Maiusc";
      td.style.fontSize = 10 + "px";
      td.style.textTransform = 'lowercase';
      td.id = "minusc";
      td.onclick = function(){UpperOrLowerCase = 'Lower'; document.getElementById('divOfKeyboard').style.textTransform = 'lowercase'; document.getElementById('keyboard_line_with_maiusc').replaceChild(td2, document.getElementById('minusc'));}