var drinks = ['コーヒー', '紅茶', 'ほうじ茶']
console.log(drinks)

var drink  = drinks[1]
console.log(drink)

//値(要素)を追加
drinks.push('炭酸水');
console.log(drinks)
console.log(drinks.length)

//要素削除
drinks.pop();
console.log(drinks)
console.log(drinks.length)

//先頭の要素を削除
drinks.shift();
console.log(drinks)
console.log(drinks.length)

//先頭に要素を追加
drinks.unshift("オレンジジュース");
console.log(drinks)
console.log(drinks.length)

//スプライス
//第一引数:追加する配列の場所
//第二引数：指定した場所からどれだけ要素を削除するか
//存在しないところを指定してもエラーが出ないため注意が必要

//index = 1の後に要素を追加
drinks.splice(1,0,"ココア","コーンポタージュ"); //第二引数入れた後にデータをは削除する個数
console.log(drinks)          //削除ナシは0
console.log(drinks.length)

//index = 1の要素から二つ削除
drinks.splice(1,2); 
console.log(drinks)    
console.log(drinks.length)

//インデックスの取得
var index = drinks.indexOf("ほうじ茶")
console.log(index)

//インデックスを指定して値を更新
drinks[1] = "ウーロン茶"
console.log(drinks)          //削除ナシは0
console.log(drinks.length)

//問題１
var sports = ['サッカー', 'テニス', 'バスケットボール', 'ゴルフ', 'マラソン', ''];
sport = sports[4]
console.log(sport)

//問題２
var weekdays = ["日","月","火","水","木", "金","土"]
var date = new Date()
var weekIndex = date.getDay()
var weekString = weekdays[weekIndex]

document.getElementById("weekday").innerHTML = weekString