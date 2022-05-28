



//FUNCIÓN presionar para video Frío


   

export function presionar() { 
   
     
   
   const $videofrio=document.getElementById("video-frio");
      
   if(!$videofrio.paused && !$videofrio.ended) { 
      $videofrio.pause(); 
      
      
   
   } 
   else 
   { 
      $videofrio.play();
        
        
   } 
  
}



