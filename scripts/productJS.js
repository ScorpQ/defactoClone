fetch("jsons/ProductDetail.json")
    .then(response => response.json())
    .then( data => {

        // JSON'dan title çekildi.
        document.title = data.Data.MetaTitle;

        //JSON'dan breadcrumb verileri çekildi.
        for(let i=0; i<4; i++){
            document.getElementsByTagName("ul")[4].getElementsByTagName("a")[i].innerHTML = data.Data.Breadcrumbs[i].Name;
            if(i==3){
                document.getElementsByTagName("ul")[4].getElementsByTagName("a")[4].innerHTML =data.Data.ProductName;
            }
        }    

        //JSON'Dan ürün adı, fiyat ve ürün kodu çekildi.
        document.getElementsByClassName("detail-text")[0].getElementsByTagName("p")[0].innerHTML = data.Data.ProductName;
        document.getElementsByClassName("detail-text")[0].getElementsByClassName("price")[0].innerHTML = data.Data.ProductVariantDiscountedPriceInclTax + document.getElementsByClassName("detail-text")[0].getElementsByClassName("price")[0].innerHTML;        
        document.getElementsByClassName("detail-text")[0].getElementsByTagName("span")[1].innerHTML = data.Data.ProductMainCode;
    
        //ProductDetailPictures
        for(let i = 0; i < 4; i++){
            document.getElementsByClassName("product-images")[0].children[i].src = data.Data.ProductDetailPictures[i].ProductPictureName;
        }
    })

    //Headerbar animasyon kodları.
    function headerBorder(){
        document.getElementsByClassName("header-container")[0].children[0].style.height = 0;
        document.getElementsByClassName("header-container")[0].children[0].style.opacity = 0;
        document.getElementsByClassName("header-container")[0].children[0].style.padding = 0;
        document.getElementsByClassName("header-container")[0].children[0].style.margin = 0;
        document.getElementsByClassName("header-container")[0].children[0].style.overflow = "hidden";
        document.getElementsByClassName("header-container")[0].style.borderBottom = "1px solid rgb(206, 204, 204)";
        document.getElementsByClassName("header-container")[0].style.paddingBottom = "10px";
        if(document.documentElement.scrollTop == 0){
            document.getElementsByClassName("header-container")[0].children[0].style.height = "max-content";
            document.getElementsByClassName("header-container")[0].children[0].style.opacity = 1;
            document.getElementsByClassName("header-container")[0].children[0].style.padding = "4px 0 0 0";
            document.getElementsByClassName("header-container")[0].children[0].style.marginBottom = "10px";
            document.getElementsByClassName("header-container")[0].children[0].style.overflow = "visible";
            document.getElementsByClassName("header-container")[0].style.borderBottom = "none";
        }
    }

    //Sidebar sticky-absolute değişim kodları.
    function stickyToAbsolute(){
        if(document.documentElement.scrollTop >= 1000){
            document.getElementsByClassName("sticky-container")[0].style.position = "absolute";
        }
        else{
            document.getElementsByClassName("sticky-container")[0].style.position = "sticky";
        }
    }