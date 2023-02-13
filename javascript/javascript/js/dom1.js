var titleElement = document.getElementById("title")
var priceElement = document.getElementById("price")
var messageElement = document.getElementById("message")
console.log(priceElement)

titleElement.textContent = "DICE"

var price = priceElement.textContent
console.log(price)

messageElement.textContent = "いらっしゃい"
console.log(message)

// var number = Math.random() * 6
// number = number.toFixed()

// resultElement.textContent = number

function randomNumber(min, max)
{
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return number
}
document.getElementById("result").innerHTML = randomNumber(1,6)

var welcomElement = document.getElementById("welcome_buttom");
document.getElementById("welcome_button").addEventListener("click", function(){
    alert("ようこそ！")
})

var characterElement = document.getElementById("character_name")
var message2Element = document.getElementById("message2")

function inputCharacterName(){
    console.log("change!!")

    var character_name = characterElement.value;
    var message = character_name + "さん、いらっしゃい"
    message2Element.innerHTML = message;
}

