//1-100の数字で17の倍数を3個表示
var max = 100
var number = 1
var count = 0

while (number < max) {
    if(number % 17 == 0){
        console.log(number)
        count += 1
    }
    if(count == 3){
        break
    }
    number++
}

//rerities
var rerities = [
    {type: 'N', name: 'ノーマル', probability: 70},
    {type: 'NP', name: 'ノーマル+', probability: 20},
    {type: 'R', name: 'レア', probability: 6},
    {type: 'SR', name: 'スーパーレア', probability: 3},
    {type: 'SSR', name: 'レジェンド', probability: 1},
]

function randomNumber(min, max)
{
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor( Math.random() * (max + 1 - min) ) + min;
    return number
}

const play = () => {
    var min = 0
    var max = 100
    var number = randomNumber(min,max)
    var selected_rerity
    for (const rerity of rerities) {
        max = min + rerity.probability
        if (number >= min && number <= max) {
            selected_rerity = rerity
            break;
        }
        min = max
    }
    console.log(selected_rerity)
    document.getElementById('rarity_name').innerHTML = selected_rerity.name
}