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


//img tag'i olusturan fonksiyon
function imgTagCreater(src, className){

    // Eğer "className" tanımlanmamışsa else çalıştılır.
    if(typeof className != "undefined"){
        let newProductImg = document.createElement("img");
        newProductImg.src = src;
        newProductImg.classList.add(className);

        return newProductImg;   
    }
    else{
        let newProductImg = document.createElement("img");
        newProductImg.src = src;
    
        return newProductImg; 
    }
}


//a tag'i olusturan fonksiyon
function aTagCreater(href, className){

    // Eğer "className" tanımlanmamışsa else çalıştılır.
    if(typeof className !== "undefined"){
        let newProduct = document.createElement("a");
        newProduct.href = href;
        newProduct.classList.add(className);

        return newProduct;
    }
    else{
        let newProduct = document.createElement("a");
        newProduct.href = href;

        return newProduct;
    }

}