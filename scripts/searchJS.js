function searchProduct() {

    // Inputtaki değer
    let target = document.getElementsByTagName("input")[0].value.trim().toLowerCase();

    //if(target.length >= 4){
        fetch("jsons/Search.json")
        .then(response => response.json())
        .then((data) => {

        //short-cut of json path. Bu değişkenler json dosyası ile ilişkili.
        let shortJsonDoc = data.Data.SearchResponse.Documents;
    
        // content div'inin referansı
        let contentDiv = document.getElementsByClassName("content")[0];

        // en az 3 karakter girilmeli, aksi takdirde search yapılamaz.
        if(target.length >= 0){
    
            // content div'inin sıfırlama
            contentDiv.innerHTML = "";

            //input'ta yazılan değerle eşleşen ürünlerin json dosyasındaki bilgilerini getirir.
            const results = shortJsonDoc.filter(product => 
                product.ProductName.trim().toLowerCase().startsWith(target));

            //array-like yapısındaki ürünleri listeler.
            results.forEach((product) => {

                // img tag'i oluşturuldu.
                let newProductImg = imgTagCreater(product.ProductPictures[0].ProductPicturePath);

                // a tag'i oluşturuldu.
                let newProduct = aTagCreater(product.ProductLink);

                newProduct.appendChild(newProductImg); // a tag'ine img tag'i eklendi
                contentDiv.appendChild(newProduct); // content div'ine a tag'i eklendi.
            })

           /*ESKİ UZUN VE UNOPTİMİZE YAPI.
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
            */


        }
        else{
            // eger kosul saglanmazsa (target boş degil ise) fonksiyon return ederek alta inmez.
            if(target){
                return;
            }
            // tüm ürünleri getirme
            for(let i = 0; i < shortJsonDoc.length; i++){
                
                // img tag'i oluşturuluyor
                let newProductImg =  imgTagCreater(shortJsonDoc[i].ProductPictures[0].ProductPicturePath);
                
                // a tag'i oluşturuluyor
                let newProduct = aTagCreater(shortJsonDoc[i].ProductLink);
                
                newProduct.appendChild(newProductImg); // a tag'ine img tag'i eklendi
                contentDiv.appendChild(newProduct); // content div'ine a tag'i eklendi.
            }
        }
    })     
}