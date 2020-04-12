function goToLab(){
    document.getElementById('potions-colors').style.display = "block";
/*debugger;*/ document.getElementById('languaggesCanvas').style.display = "none";
    document.getElementById('train').style.display = "none";
    document.getElementById('move').style.display = "none";
    document.getElementById('username').style.display = "none";
    document.getElementById('LabCanvas').style.display = "block";
    document.getElementById('>').style.display = "block";

    var backToHome = document.createElement('button');
    backToHome.textContent = "Home";
    backToHome.id = "backToHome";
    backToHome.setAttribute("style", "z-index: 4; position: absolute; top: 300px; left: 30px;")
    backToHome.onclick = function(){
        document.getElementById('train').style.display = "block";
        document.getElementById('move').style.display = "block";
        document.getElementById('username').style.display = "block";
        document.getElementById('languaggesCanvas').style.display = "block";
        document.getElementById('LabCanvas').style.display = "none";
        document.body.removeChild(document.getElementById('backToHome'));
        document.getElementById('potions-colors').style.display = "none";
        document.getElementById('>').style.display = "none";
        document.body.appendChild(ChatButton);
    };
    document.body.appendChild(backToHome);
}