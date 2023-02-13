var charactorElement = document.getElementById("charactor_name")
var messageElement = document.getElementById("message")

var itemElement = document.getElementById("item_name")
var priceElement = document.getElementById("item_price")
var amountElement = document.getElementById("amount")

//anfn
const inputCharactorName = () => {
    console.log("変更されました")
    //valueで中の値をとってこれる
    var message = charactorElement.value + "さん、いらっしゃい"
    messageElement.innerHTML = message
}
const buy =  () => {
    console.log("購入")
    
    var item_name = itemElement.innerText;
    var item_price = priceElement.innerText;
    var amount = amountElement.value;

    var totalprice = item_price * amount;
    var message = item_name + "を" + amount + "個でいいか" + "合計金額は" + totalprice + "Gだ";
    messageElement.innerHTML = message;
}