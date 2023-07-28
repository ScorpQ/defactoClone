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