function searchProduct(){
    let productLength; //ürün sayısı
    let target = document.getElementsByTagName("input")[0].value; //inputtaki değer
    fetch("jsons/Search.json")
        .then(response => response.json())
        .then( data => { 
          
        //Döngüyü ürün sayısı kadar döndürmek için alındı.  
        productLength = data.Data.SearchResponse.Documents.length;
        for(let i = 0; i < productLength; i++){


        if(data.Data.SearchResponse.Documents[i].ProductName.toLowerCase().startsWith(target.toLowerCase())){
            //console.log(data.Data.SearchResponse.Documents[i].ProductName);
            console.log("Adım 1 tamamdır.");
            
        }
       







        }
    }) 

}