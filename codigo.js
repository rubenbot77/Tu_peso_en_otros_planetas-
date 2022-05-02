 
        var caja = document.getElementById("peso_del_usuario")
        var botoncito = document.getElementById("boton")
        botoncito.addEventListener ("click", calcularPesoPorClick );

        var g_earth = 9.8;
        
        var g_mercury = 3.7;
        var g_uranus = 8.8;
        var g_venus = 8.8;
        var g_neptune = 11.1
        var g_jupiter = 24.7;
        var g_saturn = 10.4;
        var final_weight;
        var name;
        var error;
        function calcularPesoPorClick()
        {
            var box = parseInt(caja.value);
            var g_mars = 3.7;
            document.write("tu peso en marte es  " ,  + (box * g_mars / 9.8));
        }
