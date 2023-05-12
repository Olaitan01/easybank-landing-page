//Mobile Burger Menu
const burgerBtn=document.querySelector(".burger-btn")
const openBtn=document.querySelector(".open-btn")
const closeBtn=document.querySelector(".close-btn")
const nav=document.querySelector(".nav-menu")

burgerBtn.addEventListener("click",()=>{
    if(closeBtn.style.display=="block"){
        openBtn.style.display="block"
        nav.style.display="none"
        closeBtn.style.display="none"
    }else{
        openBtn.style.display="none"
        nav.style.display="block"
        closeBtn.style.display="block"
    }
})

// const config={
//     root:null,
//     rootMargin:"0px 0px 50px 0px",
//     threshold:0.5
// }

// const observer= new IntersectionObserver(entries=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//          const animationName=entry.target.CDATA_SECTION_NODE.animation;
//          entry.target.classList.add(animationName)
//          observer.unobserve(entry.target)   
//         }
//     })
// })
// const animatedElements = document.querySelectorAll('.animated');
//   animatedElements.forEach((element) => {
//     observer.observe(element);
    
//   });