var f = document.getElementById('contentWindow')

$(document).ready(function(){
    window.onclick = function(event) {

    }
        $("#aboutMeButton").on("click", function() {

            if ($(".aboutMe").data("visible") === false) {
                    $("#contentWindow").css({"width":"80%"})
                    $("#contentWindow").css({"height":"85%"})
                    f.style.transform = 'translateY(-40%)';
                    $(".aboutMe").css({"overflow":"auto"});
                    setTimeout(function() {
                        $(".aboutMe").fadeIn(300)
                    },200)   
                    
                    $(".portfolio").css({"display":"none"})
                    $(".contact").css({"display":"none"})

                    $(".aboutMe").data("visible", true)
                    $(".portfolio").data("visible", false)
                    $(".contact").data("visible", false)
            }
            else if ($(".aboutMe").data("visible") === true) {

                $("#contentWindow").css({"height":"15%"})
                setTimeout(function(){
                    changeContentWindowWidth()
                },500)

                $(".aboutMe").css({"overflow":"hidden"});
                $(".aboutMe").fadeOut(100)
                
                $(".portfolio").css({"display":"none"})
                $(".contact").css({"display":"none"})

                $(".aboutMe").data("visible", false)
                $(".portfolio").data("visible", false)
                $(".contact").data("visible", false)
            }
        })


        $("#portfolioButton").on("click", function() {
            if ($(".portfolio").data("visible") === false) {

                $("#contentWindow").css({"width":"80%"})
                $("#contentWindow").css({"height":"85%"})
                $(".portfolio").css({"overflow":"initial"});
                f.style.transform = 'translateY(-40%)';
                setTimeout(function() {
                    $(".portfolio").fadeIn(300)
                },200)
                
                
                $(".aboutMe").fadeOut(100)
                $(".contact").fadeOut(100)
                $(".portfolio").data("visible", true)
                $(".aboutMe").data("visible", false)
                $(".contact").data("visible", false)
            }
            else if ($(".portfolio").data("visible") === true){

                $("#contentWindow").css({"height":"15%"})
                setTimeout(function(){
                    changeContentWindowWidth()
                },500)
                $(".portfolio").css({"overflow":"hidden"});    
                $(".portfolio").fadeOut(50)
                
                $(".portfolio").data("visible", false)
                $(".aboutMe").data("visible", false)
                $(".contact").data("visible", false)

                $(".aboutMe").fadeOut(100)
                $(".contact").fadeOut(100)
            }
        })


        $("#contactButton").on("click", function() {
            if ($(".contact").data("visible") === false) {
                $("#contentWindow").css({"width":"80%"})
                $("#contentWindow").css({"height":"85%"});
                $(".contact").css({"overflow":"auto"});
                f.style.transform = 'translateY(-40%)';
                setTimeout(function() {
                    $(".contact").fadeIn(300)
                },200)      
        
                
                
                $(".contact").data("visible", true)

                $(".aboutMe").data("visible", false)
                $(".portfolio").data("visible", false)
                $(".aboutMe").fadeOut(100)
                $(".portfolio").css({"display":"none"})
            }
            else if($(".contact").data("visible") === true) {

                $("#contentWindow").css({"height":"15%"})
                setTimeout(function(){
                    changeContentWindowWidth()
                },500)
                $(".contact").css({"overflow":"hidden"});      
                $(".contact").fadeOut(100)
                
                $(".portfolio").css({"display":"none"})
                $(".aboutMe").css({"display":"none"})

                $(".contact").data("visible", false)
                $(".aboutMe").data("visible", false)
                $(".portfolio").data("visible", false)
            }
        })
    })
    function changeContentWindowWidth() {
        if (x.matches) { 
            console.log("under 450px")
            $("#contentWindow").css({"width":"80%"})
        } else if (y.matches) {
            console.log("under 750")
            $("#contentWindow").css({"width":"50%"})
        }
        else if (z.matches) {
            console.log("under 1000")
            $("#contentWindow").css({"width":"40%"})
        } else {
            console.log("about 1000")
            $("#contentWindow").css({"width":"25%"})
        }
}




var x = window.matchMedia("(max-width: 450px)"),
    y = window.matchMedia("(max-width: 750px)"),
    z = window.matchMedia("(max-width: 1000px)")
 // Call listener function at run 
