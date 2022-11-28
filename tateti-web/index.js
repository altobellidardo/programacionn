botones = [
    document.getElementById("0"),
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4"),
    document.getElementById("5"),
    document.getElementById("6"),
    document.getElementById("7"),
    document.getElementById("8"),
]

function inicio(){
    t = [0,0,0,0,0,0,0,0,0]
    x = []
    o = []
    gameover = false
    document.getElementsByTagName("h5")[0].innerHTML = '&nbsp'
    document.getElementById("restart").style.display = "none"
    document.getElementsByTagName("h5")[0].style.margin = "0px 0px 80px 0px";
}
inicio()

function restart() {
    inicio()
    for (u=0;u<9;u++) {
        botones[u].innerHTML = ""
        botones[u].style.backgroundColor = "#2ba5dd"
    }
}

function line(uno,dos,tres,player){
    botones[uno].style.backgroundColor = "#fcba03"
    botones[dos].style.backgroundColor = "#fcba03"
    botones[tres].style.backgroundColor = "#fcba03"
    if (player == 1) document.getElementsByTagName("h5")[0].innerHTML = "----------Gano X----------"
    else document.getElementsByTagName("h5")[0].innerHTML = "----------Gano O----------"
    document.getElementById("restart").style.display = "block"
    document.getElementsByTagName("h5")[0].style.margin = "0px 0px 10px 0px";
}

function check(){

    if (t[0]==1 && t[1]==1 && t[2]==1) {line(0,1,2, 1); return true}
    if (t[3]==1 && t[4]==1 && t[5]==1) {line(3,4,5, 1); return true}
    if (t[3]==1 && t[4]==1 && t[5]==1) {line(3,4,5, 1); return true}
    if (t[3]==1 && t[4]==1 && t[5]==1) {line(3,4,5, 1); return true}
    if (t[6]==1 && t[7]==1 && t[8]==1) {line(6,7,8, 1); return true}
    if (t[0]==1 && t[3]==1 && t[6]==1) {line(0,3,6, 1); return true}
    if (t[1]==1 && t[4]==1 && t[7]==1) {line(1,4,7, 1); return true}
    if (t[2]==1 && t[5]==1 && t[8]==1) {line(2,5,8, 1); return true}
    if (t[0]==1 && t[4]==1 && t[8]==1) {line(0,4,8, 1); return true}
    if (t[2]==1 && t[4]==1 && t[6]==1) {line(2,4,6, 1); return true}

    if (t[0]==2 && t[1]==2 && t[2]==2) {line(0,1,2, 0); return true}
    if (t[3]==2 && t[4]==2 && t[5]==2) {line(3,4,5, 0); return true}
    if (t[3]==2 && t[4]==2 && t[5]==2) {line(3,4,5, 0); return true}
    if (t[3]==2 && t[4]==2 && t[5]==2) {line(3,4,5, 0); return true}
    if (t[6]==2 && t[7]==2 && t[8]==2) {line(6,7,8, 0); return true}
    if (t[0]==2 && t[3]==2 && t[6]==2) {line(0,3,6, 0); return true}
    if (t[1]==2 && t[4]==2 && t[7]==2) {line(1,4,7, 0); return true}
    if (t[2]==2 && t[5]==2 && t[8]==2) {line(2,5,8, 0); return true}
    if (t[0]==2 && t[4]==2 && t[8]==2) {line(0,4,8, 0); return true}
    if (t[2]==2 && t[4]==2 && t[6]==2) {line(2,4,6, 0); return true}

    if (x.length + o.length == 9) {
        document.getElementsByTagName("h5")[0].innerHTML = "----------Empate----------"
        for (u=0;u<9;u++){
            botones[u].style.backgroundColor = "#fcba03"
        }
        document.getElementById("restart").style.display = "block"
        document.getElementsByTagName("h5")[0].style.margin = "0px 0px 10px 0px";
        return true
    }
}

function dar(num){
    if (t[num] == 0 && !gameover){
        botones[num].innerHTML = "X"
        t[num] = 1
        x.push(num)

        if (check()) {
            gameover = true
            return
        }

        libre = []
        for (u=0;u<9;u++){
            if (t[u] == 0) libre.push(u)
        }
        
        pos = libre[Math.floor(Math.random() * libre.length)]
        botones[pos].innerHTML = "O"
        t[pos] = 2
        o.push(pos)

        if (check()) {
            gameover = true
            return
        }
    }   
}