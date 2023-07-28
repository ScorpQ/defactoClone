function searchProduct() {

    // Inputtaki değer
    let target = document.getElementsByTagName("input")[0].value;

    //if(target.length >= 4){
        fetch("jsons/Search.json")
        .then(response => response.json())
        .then((data) => {

        //short-cut of json path. Bu değişkenler json dosyası ile ilişkili.
        let shortJsonDoc = data.Data.SearchResponse.Documents;
    
        // content div'inin referansı
        let contentDiv = document.getElementsByClassName("content")[0];

        // en az 3 karakter girilmeli, aksi takdirde search yapılamaz.
        if(target.length >= 3){
    
          // content div'inin sıfırlama
          contentDiv.innerHTML = "";
    
          for (let i = 0; i < shortJsonDoc.length; i++) {
            // inputtaki isime uygun ürünleri getirme
            if (!(shortJsonDoc[i].ProductName.trim().toLowerCase().startsWith(target.trim().toLowerCase()))) { 
                    continue;
                }   
                // img tag'i oluşturuluyor
                let newProductImg = 
                imgTagCreater(shortJsonDoc[i].ProductPictures[0].ProductPicturePath);
    
                // a tag'i oluşturuluyor
                let newProduct = 
                aTagCreater(shortJsonDoc[i].ProductLink);
                

                newProduct.appendChild(newProductImg); // a tag'ine img tag'i eklendi
                contentDiv.appendChild(newProduct); // content div'ine a tag'i eklendi.
            }
        }
        else{
            
            // eger kosul saglanmazsa (target boş degil ise) fonksiyon return ederek alta inmez.
            if(target){
                return;
            }

            // tüm ürünleri getirme
            for(let i = 0; i < shortJsonDoc.length; i++){
                
                // img tag'i oluşturuluyor
                let newProductImg = 
                imgTagCreater(shortJsonDoc[i].ProductPictures[0].ProductPicturePath);
                
                // a tag'i oluşturuluyor
                let newProduct = 
                aTagCreater(shortJsonDoc[i].ProductLink);
                
                newProduct.appendChild(newProductImg); // a tag'ine img tag'i eklendi
                contentDiv.appendChild(newProduct); // content div'ine a tag'i eklendi.
            }
        }
    })     
}