function headerBorder(){document.getElementsByClassName("header-container")[0].children[0].style.height=0,document.getElementsByClassName("header-container")[0].children[0].style.opacity=0,document.getElementsByClassName("header-container")[0].children[0].style.padding=0,document.getElementsByClassName("header-container")[0].children[0].style.margin=0,document.getElementsByClassName("header-container")[0].children[0].style.overflow="hidden",document.getElementsByClassName("header-container")[0].style.borderBottom="1px solid rgb(206, 204, 204)",document.getElementsByClassName("header-container")[0].style.paddingBottom="10px",0==document.documentElement.scrollTop&&(document.getElementsByClassName("header-container")[0].children[0].style.height="max-content",document.getElementsByClassName("header-container")[0].children[0].style.opacity=1,document.getElementsByClassName("header-container")[0].children[0].style.padding="4px 0 0 0",document.getElementsByClassName("header-container")[0].children[0].style.marginBottom="10px",document.getElementsByClassName("header-container")[0].children[0].style.overflow="visible",document.getElementsByClassName("header-container")[0].style.borderBottom="none")}function stickyToAbsolute(){document.documentElement.scrollTop>=1e3?document.getElementsByClassName("sticky-container")[0].style.position="absolute":document.getElementsByClassName("sticky-container")[0].style.position="sticky"}fetch("jsons/ProductDetail.json").then((e=>e.json())).then((e=>{document.title=e.Data.MetaTitle;for(let t=0;t<e.Data.Breadcrumbs.length;t++)document.getElementsByTagName("ul")[4].getElementsByTagName("a")[t].innerHTML=e.Data.Breadcrumbs[t].Name,3==t&&(document.getElementsByTagName("ul")[4].getElementsByTagName("a")[4].innerHTML=e.Data.ProductName);document.getElementsByClassName("detail-text")[0].getElementsByTagName("p")[0].innerHTML=e.Data.ProductName,document.getElementsByClassName("detail-text")[0].getElementsByClassName("price")[0].innerHTML=e.Data.ProductVariantDiscountedPriceInclTax+document.getElementsByClassName("detail-text")[0].getElementsByClassName("price")[0].innerHTML,document.getElementsByClassName("detail-text")[0].getElementsByTagName("span")[1].innerHTML=e.Data.ProductMainCode;for(let t=0;t<4;t++)document.getElementsByClassName("product-images")[0].children[t].src=e.Data.ProductDetailPictures[t].ProductPictureName;for(let t=0;t<e.Data.ProductDetailSize.DetailSizes.length;t++){let a=document.createElement("div");a.innerHTML=e.Data.ProductDetailSize.DetailSizes[t].Size,a.classList.add("size"),document.getElementsByClassName("body-measures-options")[0].appendChild(a)}}));