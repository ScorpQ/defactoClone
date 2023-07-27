function searchProduct() {
    // Ürün sayısı
    let productLength;
  
    // Inputtaki değer
    let target = document.getElementsByTagName("input")[0].value;
    //if(target.length >= 4){
        fetch("jsons/Search.json")
        .then(response => response.json())
        .then((data) => {
          // Döngüyü ürün sayısı kadar döndürmek için alındı.
          productLength = data.Data.SearchResponse.Documents.length;
    
          // content div'inin referansı
          let contentDiv = document.getElementsByClassName("content")[0];
    
          // content div'inin sıfırlama
          contentDiv.innerHTML = "";
    
          for (let i = 0; i < productLength; i++) {
            // inputtaki isime uygun ürünleri getirme
            if (!(data.Data.SearchResponse.Documents[i].ProductName.trim().toLowerCase().startsWith(target.trim().toLowerCase()))) { 
                    continue;
                }   
                // img tag'i oluşturuluyor
                let newProductImg = document.createElement("img");
                newProductImg.src = data.Data.SearchResponse.Documents[i].ProductPictures[0].ProductPicturePath;
                newProductImg.classList.add("product");
    
                // a tag'i oluşturuluyor
                let newProduct = document.createElement("a");
                newProduct.href = data.Data.SearchResponse.Documents[i].ProductLink;
    
                // a tag'ine img tag'i eklendi
                newProduct.appendChild(newProductImg);
    
                // content div'ine a tag'i eklendi.
                contentDiv.appendChild(newProduct);
            }


            if(target){
                return;
            }
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
      })     
   // }
}


//en az 3 karater ile arama başlasın.