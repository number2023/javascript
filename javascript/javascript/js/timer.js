
var counterElement = document.getElementById("counter")
var interval = 1000
var timer

//いったん変数で定義しておいて引数に入れる
var updatecount = function(){
    count++
    counterElement.innerHTML = count
}

const start = () => {
    clearInterval(timer) //リセットしてくれる
    count = 0
    timer = setInterval(updatecount,interval)
    //無名関数で一気にやる
    // timer = setInterval(function(){
    //     count++
    //     counterElement.innerHTML = count
   // },interval)//intervalで設定された時間で実行される 1秒は1000分の一
}

const stop = () => {
    clearInterval(timer) 
}