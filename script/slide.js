
document.getElementById("1dots").style.opacity=1
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
console.log("jaySanodiya");
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    let count=1;
    nxtBtn[i].addEventListener('click', () => {
       
        console.log(count)
        if(count==1){
            document.getElementById("1dots").style.opacity=.3
            document.getElementById("2dots").style.opacity=1
        }
        
        if(count==2){
            document.getElementById("2dots").style.opacity=.3
            document.getElementById("3dots").style.opacity=1
        }
         
        count++
        item.scrollLeft += containerWidth;
       
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
        count--
        if(count==1){
            document.getElementById("2dots").style.opacity=.3
            document.getElementById("1dots").style.opacity=1
        }
        
        if(count==2){
            document.getElementById("3dots").style.opacity=.3
            document.getElementById("2dots").style.opacity=1
        }
     
        console.log(count)
    })
})

 