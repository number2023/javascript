
function caluculate(x) {
    var y = x + 1;
    return y
}

var answer = caluculate(3)
console.log(answer)

//税率
const TAX = 0.1

//メソッド定義
function totalprice(price,amount) {
    var total_price = price * amount *(1 +TAX)  
    return total_price.toFixed()  
}

//メソッド実行
var total_price = totalprice(300,5)
console.log(total_price)


//無名関数
const hello = function(name){
    return name + "さん、いらっしゃい"
}

var message = hello("横浜太郎")
console.log(message)

//アロー関数 anfn
const hello2 = (name) => {
    return name + "さん、いらっしゃい"
}

var message = hello2("横浜太郎")
console.log(message)

//問題
function speed(distance,time) {
    time_speed = distance / time 
    return time_speed.toFixed()
}

var time_speed = speed(325,4)
console.log(time_speed)

const number = () => {
    random = Math.random() * 6
    return random.toFixed()
}

var random_number = number()
console.log(random_number)


//onload 
//HTMLの読み込みが完了したら実行  すべて読み込まれてから実行
window.onload = () => {
    console.log("東京")
}

console.log("横浜")