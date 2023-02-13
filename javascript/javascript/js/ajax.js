//id=gettextをクリックしたら
$("gettext").on("click",() => {
    const href = location.href
    const index = href.lastIndexOf('/') + 1;
    const baseUrl = href.substring(0, index);
    const apiUrl = baseUrl + 'data/foods.json'

    $.ajax({
        type: "get",
        url: apiUrl,
        dataType: "text",
    }).done((data) => {
        //jsonデータを取得
        console.log(data)
        //jsonデータをパース
        var result = JSON.parse(data)
        console.log(result)
        console.log(result.foods)
    });   
})

