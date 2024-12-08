let mncircle = document.querySelectorAll(".mncircle");

mncircle.forEach(function (val, ind) {


    val.addEventListener("click", function (e) {
        gsap.to("#circle", {
            rotate: [3 - (ind + 1)] * 10,
            ease: Bounce.easeOut,
            duration:2,

        });

        grayOut();

        gsap.to(this,{
            opacity:1
        })
    });
})


function grayOut(){
    gsap.to(mncircle, {
        opacity:.2
        
    })
}

gsap.to("#circle", {
    rotate: 0,
    duration: 4,
    delay: .2,
    ease: Bounce.easeOut
})