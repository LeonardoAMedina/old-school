function cargar_calendario()
{
    let dias = ["Domingo","Lunes","Martes",
                "Miércoles","Jueves","Viernes",
                "Sábado"];

    let arr_dias =  [
                    [0,6],
                    [1,0],
                    [2,1],
                    [3,2],
                    [4,3],
                    [5,4],
                    [6,5]
                    ];
    
    let arr_articles = [42];
    arr_articles[42] = "";
    
    var fec= document.getElementById('date').value+'-1';
    var dt=new Date(fec);
    
    var dia_sem;
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