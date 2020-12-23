//log(Math.floor(Math.random()*6+1)) //0.1111 -> 0.99999)
function play (str){
    //dice 1
    let randomNumber1 = Math.floor(Math.random()*6+1) //0.1111 -> 0.99999)
    let sourceRandomNo1 = "images/dice"+randomNumber1 + ".png"
    document.querySelector(".img1").setAttribute("src",sourceRandomNo1)

    //dice 2
    let randomNumber2 = Math.floor(Math.random()*6+1) //0.1111 -> 0.99999)
    let sourceRandomNo2 = "images/dice"+randomNumber2 + ".png"
    document.querySelector(".img2").setAttribute("src",sourceRandomNo2)

    //dice 3
    let randomNumber3 = Math.floor(Math.random()*6+1) //0.1111 -> 0.99999)
    let sourceRandomNo3 = "images/dice"+randomNumber3 + ".png"
    document.querySelector(".img3").setAttribute("src",sourceRandomNo3)
    
    // Tổng 3 con xúc xác >10 thì tài bé hơn 10 thì xỉu
    const total = randomNumber1 + randomNumber2 + randomNumber3
    
    if (str === "xiu") {
        document.querySelector("#player-selection").innerText="Xiu 小"
        if (total  <=10 ){
            //win
            document.querySelector("#game-result").innerText = "WIN"
        }
        else {
            //lose
            document.querySelector("#game-result").innerText = "LOSE"
        }
    }
    else {
        document.querySelector("#player-selection").innerText="Tài 大"
        if (total >10 ){
            //Win
            document.querySelector("#game-result").innerText = "WIN"
        }
        else {
            //lose
            document.querySelector("#game-result").innerText = "LOSE"

        }
    }

}

//play()