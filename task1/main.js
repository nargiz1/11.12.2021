let myNavItems= document.querySelectorAll("#list li");
let myTexts= document.querySelectorAll("#texts div")

for(let j=0; j<myNavItems.length; j++){
    myNavItems[j].addEventListener("click", function(){
        for(let i=0; i<myNavItems.length; i++){
            if(myNavItems[i].classList.contains("clicked")){
                myNavItems[i].classList.remove("clicked")
                }
            }
        myNavItems[j].classList.add("clicked");

        for(let n=0; n<myTexts.length; n++){
            if(!myTexts[n].classList.contains("d-none")){
                myTexts[n].classList.add("d-none");
            }
        }
        myTexts[j].classList.remove("d-none");
    });
}
