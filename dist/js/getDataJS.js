fetch("jsons/Search.json").then((e=>e.json())).then((e=>{let t=e.Data.SearchResponse.Documents,n=document.getElementsByClassName("content")[0];for(let e=0;e<t.length;e++){let a=imgTagCreater(t[e].ProductPictures[0].ProductPicturePath),r=aTagCreater(t[e].ProductLink);r.appendChild(a),n.appendChild(r)}}));