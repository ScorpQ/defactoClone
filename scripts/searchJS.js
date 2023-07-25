function searchProduct(){   

    //ürün sayısı
    let productLength; 

    //inputtaki değer
    let target = document.getElementsByTagName("input")[0].value;

    fetch("jsons/Search.json")
        .then(response => response.json())
        .then( (data) => { 

        //Döngüyü ürün sayısı kadar döndürmek için alındı.  
        productLength = data.Data.SearchResponse.Documents.length;
        for(let i = 0; i < productLength; i++){

            //inputtaki isime uygun ürünleri getirme
            if(data.Data.SearchResponse.Documents[i].ProductName.trim().toLowerCase().startsWith(target.trim().toLowerCase())){
                
                //img tag'i olusturuluyor
                let newProductImg = document.createElement("img");
                newProductImg.src = data.Data.SearchResponse.Documents[i].ProductPictures[0].ProductPicturePath;
                newProductImg.classList.add("product");
            
                //a tag'i olusturuluyor
                let newProduct = document.createElement("a");
                newProduct.href= data.Data.SearchResponse.Documents[i].ProductLink;
                
                //a tag'ine img tag'i eklendi
                newProduct.appendChild(newProductImg);

                //aAAa
                document.getElementsByClassName("content")[0].innerHTML = "";

                //content div'ine a tag'i eklendi.
                document.getElementsByClassName("content")[0].appendChild(newProduct);
            }
            else if(target==" "){  
                    console.log("tüm ürünler");

                // tüm ürünleri getirme
                for(let i = 0; i < productLength; i++){
                    
                    //img tag'i olusturuluyor
                    let newProductImg = document.createElement("img");
                    newProductImg.src = data.Data.SearchResponse.Documents[i].ProductPictures[0].ProductPicturePath;
                    newProductImg.classList.add("product");

                    //a tag'i olusturuluyor
                    let newProduct = document.createElement("a");
                    newProduct.href= data.Data.SearchResponse.Documents[i].ProductLink;
                    
                    //a tag'ine img tag'i eklendi
                    newProduct.appendChild(newProductImg);

                    //content div'ine a tag'i eklendi.
                    document.getElementsByClassName("content")[0].appendChild(newProduct);
                } 
            }
        }
    }) 

}