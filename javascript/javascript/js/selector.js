//「セレクタ」という記述で HTML から Element オブジェクトを取得します。
var title = document.querySelector("h1")
console.log(title)

//idがtitleのものを取得 idを指定するパターン
title = document.querySelector("#title")
console.log(title)

//クラスを指定するパターン
var cities = document.querySelectorAll(".city")
console.log(cities)

//繰り返し表示
cities.forEach(function(city){
    console.log(city.innerHTML)
})

for (const city of cities) {
    console.log(city.innerHTML)
}

var titles = document.querySelectorAll("h2,h3")
console.log(titles)

// class=item_list >指定した要素の子要素
var items = document.querySelectorAll("ul.item_list > li")
console.log(items)

//問題1
var shops = document.querySelector("#shop")
console.log(shops.innerHTML)

//問題２
var countries = document.querySelectorAll("ul.countory_list > li")
for (const country of countries) {
    console.log(country.innerHTML)
}

//classname

//データの方が変わる
cities = document.getElementsByClassName("city")
console.log(cities)
//直接ForEachで回すことが出来ない
// cities.forEach(function(city){
//     console.log(city.innerHTML)
// })

//こっちでは回せる
for (const city of cities) {
    console.log(city.innerHTML)
}

//これで回せるようになる
Array.from(cities).forEach(function(city){
    console.log(city.innerHTML)
})

var itemlists = document.getElementsByClassName("item_list")
console.log(itemlists)
for (const items of itemlists) {
    console.log(items.innerHTML)
}

for (const items of itemlists) {
    for (const item of items.children) {
        console.log(item.innerHTML)
    }
}

console.log('-- querySelector item_list ---')
itemlist = document.querySelectorAll('.item_list')
itemlist.forEach(function (items) {
    for (const item of items.children) {
        console.log(item.innerHTML)
    }
})