    function usar(){
        var a;
        var vl;
        var p;
        var imc;
        a = parseFloat(document.getElementById("altura").value);  
        p = parseFloat(document.getElementById("peso").value);
        vl = parseFloat(document.getElementById("valor").value);
        imc = p/(a*a);
        valor.value = imc;
        if(imc < 18.5){
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/abaixo.png";
        }else if(imc > 18.5 && imc < 24.9){
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/normal.png";
        }else if (imc > 24.9){
            alert(imc);
            document.getElementById('foto').src = "lib/fotos/acima.png";
        }
    }
