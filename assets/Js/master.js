let stars = document.querySelectorAll(' .etoile')

stars.forEach(star  =>{
    
        star.addEventListener('click', ()=>{
            let src = star.src
            if (src.includes('FILLED')) {
                star.src= '/assets/Images/Icones/01_Homepage/FAVORIS.svg'
            }else{
                star.src= '/assets/Images/Icones/01_Homepage/FAVORIS FILLED.svg'
            }
                
        })


})