$(document).ready(function(){
    /*La imagen va a tener un alto exactamente igual al navegador*/
    /*$("#banner").css({"height":$(window).height() + "px"});*/

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        if(scroll >= 140){
            if(!flag){
                $("#izq").css({"margin-top": "-5px", "width": "160px", "height": "46px"});
                $("#cen").css({"margin-top": "-5px", "width": "29px", "height": "46px"});
                $("#der").css({"margin-top": "-5px", "width": "29px", "height": "46px"});
                $("header").css({"background-color": "#FFFFFF"});
                $("header").css({"border-bottom": "1px solid #F4F7FC"});
                flag = true;
            }
        }else{
            if(flag){
                $("#izq").css({"margin-top": "220px", "width": "178px", "height": "300px"});
                $("#cen").css({"margin-top": "80px", "width": "178px", "height": "300px"});
                $("#der").css({"margin-top": "80px", "width": "178px", "height": "300px"});
                $("header").css({"background-color": "transparent"});
                $("header").css({"border-bottom": "transparent"});
                /*$("#paw").css({"position": "relative"});*/
                flag = false;
            }
        }
    });
});


/*$(document).ready(function(){
    var height = $(window).height();

    ajustesIniciales();
    
    function ajustesIniciales(){
        $("section#body").css({"margin-top": height - 80 + "px"});
    }

    $(document).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTo / 70;
        if(scrollTop < height){
            $("section#banner").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });
        }
    });
});*/
