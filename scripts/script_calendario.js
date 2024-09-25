    function frames1(num)
    {
        cargar_calendario();
    }
    
    function cargar_calendario()
    {
        let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
        let arr_dias = [
                        [0,6],
                        [1,0],
                        [2,1],
                        [3,2],
                        [4,3],
                        [5,4],
                        [6,5]
                        ];
        //alert("jose");
        //fecha(1,9,2024);
        // let arr_articles = [
        //                     ["Reunion de los Miercoles","Baby shower","comprar café"],
        //                     ["111","222","333"],
        //                     ["444","555","666"]
        //                     ];
    
        let arr_articles = [42];
        arr_articles[42] = "fresa";
    
        //var mes=9,dia=2,anio=2024;

        var dt = new Date("2024-9-1");
                        
        var dia_sem;
        var fec;
    
        for (let i = 0; i < arr_articles.length; i++) {                
            var aux=dt.getUTCDay();
            var aux2=dias[dt.getUTCDay()];
            var aux3=arr_dias[dt.getUTCDay()][1];
            if(i==0)
                dt.setDate(dt.getDate()-aux3);
            dia_sem=dt.getDate();
    
            document.getElementById('id_'+i).innerHTML=dia_sem;
            dt.setDate(dt.getDate()+1);
            debugger;
        }
    }