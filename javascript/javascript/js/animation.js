var photo = $("#photo")

$(() => {
    // slideToRight()

    //クリックイベントを追加
    $("#startBtn").on("click",slideToRight)
    $("#stopBtn").on("click",stop())
    $("#UpBtn").on("click",slideToUp)
    $("#DownBtn").on("click",slideToDown)
    $("#RightBtn").on("click",slideToRight)
    $("#LeftBtn").on("click",slideToLeft)

    function stop(){
        photo.stop()
    }

    //それぞれの方向に移動
    function slideToRight(){
        if (!photo.is(':animated')){
            photo.animate(
                { left: 300 }, 1000, 'swing'
            )
        }
    }
    function slideToLeft(){
        if (!photo.is(':animated')){
            photo.animate(
            { left: 50 }, 1000, 'swing'
            )
        }  
    }function slideToUp(){
        if (!photo.is(':animated')){
            photo.animate(
                { top: 50 }, 1000, 'swing'
            )
        }
    }function slideToDown(){
        if (!photo.is(':animated')){
            photo.animate(
                { top: 300 }, 1000, 'swing'
            )
        }
    }
})