const enemy = document.getElementsByClassName("enemy")[0]

var alto = window.innerHeight;

var pos = -100
enemy.style.top = pos + "px"

var run = true
var speed = 100

document.addEventListener("click",() => {run = !run})

function caer(){
    if (run){
        pos = pos + 20
        if (pos == -80){
            enemy.style.left = Math.floor(Math.random() * (window.innerWidth-100))+ "px"
            enemy.style.top = pos + "px"
        }
        else if (pos <= alto - 100){
            enemy.style.top = pos + "px"
        }
        else if (pos > alto-100 && pos < alto-20){
            enemy.style.top = pos + "px"
            enemy.style.height = (alto-pos) + "px"
        }
        else{
            pos = -100
            enemy.style.top = pos + "px"
            enemy.style.height = "100px"
            speed = speed -10
            clearInterval(timer)
            timer = setInterval(caer,speed);
        }
    }
}

//timer = setInterval(caer,speed);

