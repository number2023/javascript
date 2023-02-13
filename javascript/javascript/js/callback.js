var drinks = ["コーヒー","紅茶","カフェラテ"]

//関数を入れる
drinks.forEach(function(drink){
    console.log(drink)
});

var scores = [70,80,76,46,53,24,96,49,102]
//scoreを2倍 mapは新たに作成  ↓コールバック関数
var new_score = scores.map(function(score){
    return score*2
})
console.log(new_score)

//70以上のデータのみ作成
new_score = scores.filter(function(score) {
    return score >= 70
})
console.log(new_score)

//合計値
var sum = scores.reduce((prev,current)=>{
    return prev + current
})
console.log(sum)

//70以上80未満のデータのみ作成 filterは抽出
var new_score = scores.filter((score) =>score>=70).filter((score) =>score<=80)
console.log(new_score)
