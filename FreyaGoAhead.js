function freyaAhead(){
  var times = 0;
  $(document).ready(function(){
  $("#move").addClass("disabled");
    });
  
    var int = setInterval(() => {
                times++; console.log(times);
                $(document).ready(function(){
                  $("#train").attr("src", "diapositive/2.png");
                });
                setTimeout(() => {
                  $(document).ready(function(){
                    $("#train").attr("src", "diapositive/3.png");
                  });
                }, 200)
                setTimeout(() => {
                  $(document).ready(function(){
                    $("#train").attr("src", "diapositive/4.png");
                  });
                }, 400);
                setTimeout(() => {
                  $(document).ready(function(){
                    $("#train").attr("src", "diapositive/3.png");
                  });
                }, 600);

                setTimeout(() => {
                  if(times >= 6){
                    clearInterval(int);
                    $(document).ready(function(){
                      $("#train").attr("src", "diapositive/2.png");
                    });
                    setTimeout(() => {
                      $(document).ready(function(){
                        $("#train").attr("src", "diapositive/1.png");
                      });
                      $(document).ready(function(){
                        $("#move").removeClass("disabled");
                      });
                    }, 100);
                  }
                }, 701);
              }, 800)
            };

/*
var i = 0;
var images = [
  ['diapositive/13.png', 'diapositive/12.png', 'diapositive/11.png', 'diapositive/10.png', 'diapositive/9.png', 'diapositive/10.png', 'diapositive/11.png', 'diapositive/12.png']
];    // Images Array
var n = 0;
// Change Image
function freyaAhead(){
  if (n >= images.length) {
    return;
  }
  if (i + 1 >= images[n].length) {
    i = 0;
    n++;
    return;
  }

  setInterval(function() {
    document.train.src = images[n][i];
    freyaAhead();
  }, 300);
}
*/