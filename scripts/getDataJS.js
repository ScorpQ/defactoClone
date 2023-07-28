//json dosyasından ürünleri listemek
fetch("jsons/Search.json").then((response) => response.json())
.then((data) => {
    //short-cut of json path. Bu değişkenler json dosyası ile ilişkili.
    let shortJsonDoc = data.Data.SearchResponse.Documents;

    // content div'inin referansı
    let contentDiv = document.getElementsByClassName("content")[0];

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
});