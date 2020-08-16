const trasnlate = document.querySelectorAll(".translate");
const banner = document.querySelectorAll(".banner");
const bannerA = document.getElementById('bannerA');


window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;    
    let bannerHeight = bannerA.offsetHeight;
    
    trasnlate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(-${scroll * speed}px)`;
    })
    
    banner.forEach(element => {
        // element.style.height = `calc(${bannerHeight}px - ${scroll}px)`;
        element.style.height = `calc(95vh - ${scroll}px)`;
    });    
});

// function myFunction(x) {
//     if (x.matches) {
//         window.addEventListener('scroll', () => {
//             let scroll = window.pageYOffset;
//             let bannerHeight = bannerA.offsetHeight; myFunction(x);

//             trasnlate.forEach(element => {
//                 let speed = element.dataset.speed;
//                 element.style.transform = `translateY(-${scroll * speed}px)`;
//             })

//             banner.forEach(element => {
//                 element.style.height = `calc(50vh - ${scroll}px)`;
//             });
//         });
        
//     } else {
//         console.log('Pantalla PC');
//         window.addEventListener('scroll', () => {
//             let scroll = window.pageYOffset;

//             trasnlate.forEach(element => {
//                 let speed = element.dataset.speed;
//                 element.style.transform = `translateY(-${scroll * speed}px)`;
//             })

//             banner.forEach(element => {
//                 element.style.height = `calc(95vh - ${scroll}px)`;
//             });
//         });
//     }
// };

// function myFunction(x){
//     if(x.matches){
//         console.log('Celular');
//     } else{
//         console.log('Pantalla PC');
//     }
// };

// var x = window.matchMedia("(max-width: 992px)");

// myFunction(x);
// x.addEventListener(myFunction);

