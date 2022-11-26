const wrapper = document.querySelector('.cards-wrapper');
const dots =document.querySelectorAll('.dot');
let activeDotNum = 0;
dots.forEach((dot, idx) =>{
    dot.setAttribute('data-num',idx);
    dot.addEventListener('click', e =>{
        let clickedDotNum = e.target.dataset.num;
        if(clickedDotNum == activeDotNum) return;
        else{
            let displayWidthArea = document.querySelector('.display-area').clientWidth;
            console.log(displayWidthArea);
            let pixelToMove = -displayWidthArea*clickedDotNum;
            wrapper.style.transform ='translateX(' + pixelToMove + 'px)'
            dots[activeDotNum].classList.remove('active');
            dots[clickedDotNum].classList.add('active');
            activeDotNum = clickedDotNum;
        }

    })

})