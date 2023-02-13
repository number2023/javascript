var photo = $("#photo")

photo.hide()
function open(){
    //3秒のフェードイン
    photo.fadeIn(2000,"swing",() => {
        setTimeout(close,5000)
    });
}

function close(){
    //3.5秒あとフェードアウト
    photo.fadeOut(2000,"swing",() => {
        var path = './images/monster_006.png'
        $('#photo > img').attr('src', path)//attr変更したりするときに使うimgのsrcを変える
        setTimeout(open,500)
    });
}

//HTML読み込み終了後に実行
$(() => {
    open()
})