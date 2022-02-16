
    function usar(){
        var a;
        var p;
        var imc;
        a = parseFloat(document.getElementById("altura").value);  
        p = parseFloat(document.getElementById("peso").value);
        imc = p/a*a;
        if(imc < 18,5){
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/abaixo.png";
        }else if(imc > 18,5 && imc < 24,9){
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/normal.png";
        }else{
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/acima.png";
        }
    }
