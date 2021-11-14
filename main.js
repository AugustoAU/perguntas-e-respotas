var elementos = document.querySelectorAll('[type=radio]');

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change',function(e){
        let marcado = e.target.value;
        if(marcado == "correta"){
           
            let parentNode = e.target.parentNode;
           

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var m = 0; m < els.length; m++) {
                els[m].disabled = true;
            }

        }else if (marcado == "Errada"){
            let parentNode = e.target.parentNode;
            

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for(var m = 0; m < els.length; m++) {
                els[m].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.width = '10%'.backgroundColor = 'green';
           
        }    
     })
}