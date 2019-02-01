var target = document.getElementsByClassName('expand')
var i;

for(i=0; i<target.length; i++){
    target[i].addEventListener("click",function(){
        this.classList.toggle("active","rotate");
        
        var panel =this.closest('.task').nextElementSibling;
        if(panel.style.display==="flex"){
            panel.style.display = "none"
        }else{
            panel.style.display = "flex"
        }
    });

}
