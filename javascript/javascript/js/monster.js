var stage = document.createElement("stage")

//pタグ作成
var monsterElement1 = document.createElement("p")
monsterElement1.innerHTML = "スライム"

var monsterElement2 = document.createElement("p")
monsterElement2.innerHTML = "キメラ"

//pタグを親要素(stage)に追加
stage.appendChild(monsterElement1)
stage.appendChild(monsterElement2)

//親要素から子要素を削除
stage.removeChild(monsterElement1)

//aリンク作成
//<a href = "https://gogle.com/search?q=スライム" target = "_blank">スライム</a>

var a = document.createElement("a")
a.href = "https://gogle.com/search?q=" + monsterElement1.innerHTML
a.target = "_blank"
a.innerHTML = monsterElement1.innerHTML
stage.appendChild(a)

//関数
const createMonster = (monsterName, imageName) => { 
    var monsterFrame = document.createElement('div')
    var monsterElement = document.createElement('p')
    var monsterImage = document.createElement('img')
    // <p>xxxxx</p>
    monsterElement.innerHTML = monsterName
    // <img src="./images/xxxxx.jpg"/>
    monsterImage.src = "./images/" + imageName + '.png'
    // div に p と img を追加
    monsterFrame.appendChild(monsterElement)
    monsterFrame.appendChild(monsterImage)
    // stage に div を追加
    stage.appendChild(monsterFrame)
}

createMonster('モンスター1', 'monster_006')
createMonster('モンスター2', 'monster_022')
createMonster('モンスター3', 'monster_040')