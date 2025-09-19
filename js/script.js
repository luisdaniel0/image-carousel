//keep track of the current slide by setting a value at 0 // currentSlide is our index tracker (starts at 0)
let currentSlide = 0;
const images = document.querySelectorAll('.carousel-slide')
console.log(images)


const leftBtn = document.querySelector('.left-btn')
const rightBtn=document.querySelector('.right-btn')
const dotButtons = document.querySelector('.carousel-nav')
const dots = Array.from(dotButtons.children)
console.log(dots)


leftBtn.addEventListener("click",()=>{
    if(currentSlide<=0){
        images[currentSlide].classList.add('hidden')
        currentSlide= images.length -1
        images[currentSlide].classList.remove('hidden')
    } else{
        images[currentSlide].classList.add('hidden')
        currentSlide--
        images[currentSlide].classList.remove('hidden')
    }
})

rightBtn.addEventListener("click",()=>{
    //images[currentSlide] gets the specific <li> element at that position
    //.classList.add('hidden') applies the CSS class that makes display: none
    images[currentSlide].classList.add('hidden')
    // NEW: Remove highlight from current dot BEFORE changing currentSlide
    dots[currentSlide].classList.remove('current-slide')

    if(currentSlide>=images.length-1){
        currentSlide=0;
    } else{
        currentSlide++
        
    }

    images[currentSlide].classList.remove('hidden')
    // NEW: Add highlight to new dot AFTER changing currentSlide
    dots[currentSlide].classList.add('current-slide')

})


//when i click left, move slides to the left
//when i click right, move slides to the right
//when i click an indicator, move to that slide