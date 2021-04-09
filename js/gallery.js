let active=document.getElementsByClassName(' li-active');
  let x=document.querySelectorAll(' .gallary li');

console.log(x)
console.log(active)
function activeClass(){
    //add active class to btn
    if (active.length>=0) 
    {
      active[0].className=active[0].className.replace("li-active"," ")
    }
   
    console.log(active)
    this.className+= "li-active";


    var data=this.getAttribute('data-target'),all=document.getElementsByClassName('all');
     
    if(data==="all")
    {
            for(i=0;i<all.length;i++)
            {
                    

                

                    // all[i].style.display="block" ;
                    all[i].style.transform="scale(1)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="1" ;

                    

            }
    }
    if(data==="Engineer")
    {
            for(i=0;i<all.length;i++)
            {
                 
                    if(all[i].classList.contains('Engineer') ){   all[i].style.transform="scale(1)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="1" ;
}  
                else  {all[i].style.transform="scale(0.01)" ;

                all[i].style.transition="all 2s" ;
              all[i].style.opacity="0" ; }



            }
    }

            if(data==="Logos")
            {
                for(i=0;i<all.length;i++)
                {
                     
                    if(all[i].classList.contains('Logos') ){ all[i].style.transform="scale(1)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="1" ;}  
                    else  {all[i].style.transform="scale(0.01)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="0" ; }
    
    
    
                }
             }
            
   

            if(data==="Building")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Building') ){all[i].style.transform="scale(1)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="1" ;}  
                        else  {all[i].style.transform="scale(0.01)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="0" ;}
        
    
    
                }
            }

            if(data==="Bridge")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Bridge') ){ all[i].style.transform="scale(1)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="1" ;}  
                        else  {all[i].style.transform="scale(0.01)" ;all[i].style.transition="all 1s" ;all[i].style.opacity="0" ;}
        
    
    
                }
            }

            if(data==="Videos")
            {
                for(i=0;i<all.length;i++)
                {
                         
                        if(all[i].classList.contains('Videos') ){ all[i].style.opacity="1" ;}  
                        else  {all[i].style.opacity=".2" ;}
        
    
    
                }
            }

        
  }
for(i=0;i<x.length;i++){x[i].addEventListener('click',activeClass)}