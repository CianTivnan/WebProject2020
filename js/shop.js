//access json data for all shop
//first we fetch our data
(function() {
    fetch("https://api.npoint.io/d727ed899d900383505e")
        .then(response => response.json())
        .then(data => {
        const myData = data;
        console.log(myData); 
        //we access our root in the html
        const app = document.getElementById('root');
        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        app.appendChild(container);
        
        //now we loop through each item genre
        //each item has a card created and appended to the page
        for(let i=0; i<4; i++)
                {
                const card = document.createElement('div');
                card.setAttribute('class', 'col-md-4');
                card.classList.add("card");

                const h3 = document.createElement('h3');
                h3.textContent = myData.Cars[i].Name;

                const h4 = document.createElement('h4');
                h4.textContent = "By " +myData.Cars[i].Manufacturer;

                const myimg = document.createElement('img');
                myimg.style.width = "250px";
                myimg.style.height = "250px";
                myimg.style.marginLeft = "auto";
                myimg.style.marginRight = "auto";
                myimg.src = myData.Cars[i].ImgUrl;

                const p = document.createElement('p');                  
                myData.Cars[i].Desc = myData.Cars[i].Desc.substring(0, 150);
                p.textContent = `${myData.Cars[i].Desc}...`;
                
                const button = document.createElement('button');
                
                button.classList.add("btn");
                button.classList.add("btn-dark");
                button.classList.add("addtocart");
                    
                const text = document.createTextNode("€" + myData.Cars[i].Price + " - Add to Cart");        
                button.appendChild(text);
                    
                const productId = document.createElement("param");
                productId.textContent = JSON.stringify(myData.Cars[i]);
                    
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(h4);
                card.appendChild(myimg)
                card.appendChild(p);
                card.appendChild(button);
                button.appendChild(productId);
                }
        
            for(let i=0; i<4; i++)
                {
                const card = document.createElement('div');
                card.setAttribute('class', 'col-md-4');
                card.classList.add("card");

                const h3 = document.createElement('h3');
                h3.textContent = myData.Scifi[i].Name;

                const h4 = document.createElement('h4');
                h4.textContent = "By " +myData.Scifi[i].Manufacturer;

                const myimg = document.createElement('img');
                myimg.style.width = "200px";
                myimg.style.height = "200px";
                                    myimg.style.marginLeft = "auto";
                myimg.style.marginRight = "auto";
                myimg.src = myData.Scifi[i].ImgUrl;

                const p = document.createElement('p');
                myData.Scifi[i].Desc = myData.Scifi[i].Desc.substring(0, 150);
                p.textContent = `${myData.Scifi[i].Desc}...`;
                    
                const button = document.createElement('button');
                
                button.classList.add("btn");
                button.classList.add("btn-dark");
                button.classList.add("addtocart");
                    
                const text = document.createTextNode("€" + myData.Scifi[i].Price + " - Add to Cart");        
                button.appendChild(text);
                    
                const productId = document.createElement("param");
                productId.textContent = JSON.stringify(myData.Scifi[i]);
                    
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(h4);
                card.appendChild(myimg)
                card.appendChild(p);
                card.appendChild(button);
                button.appendChild(productId);
                }
        
            for(let i=0; i<4; i++)
                {
                const card = document.createElement('div');
                card.setAttribute('class', 'col-md-4');
                card.classList.add("card");
                
                const h3 = document.createElement('h3');
                h3.textContent = myData.Tanks[i].Name;

                const h4 = document.createElement('h4');
                h4.textContent = "By " +myData.Tanks[i].Manufacturer;

                const myimg = document.createElement('img');
                myimg.style.width = "200px";
                myimg.style.height = "200px";
                myimg.style.marginLeft = "auto";
                myimg.style.marginRight = "auto";
                myimg.src = myData.Tanks[i].ImgUrl;

                const p = document.createElement('p');
                myData.Tanks[i].Desc = myData.Tanks[i].Desc.substring(0, 150);
                p.textContent = `${myData.Tanks[i].Desc}...`;
                    
                const button = document.createElement('button');
                
                button.classList.add("btn");
                button.classList.add("btn-dark");
                button.classList.add("addtocart");
                    
                const text = document.createTextNode("€" + myData.Tanks[i].Price + " - Add to Cart");        
                button.appendChild(text);
                    
                const productId = document.createElement("param");
                productId.textContent = JSON.stringify(myData.Tanks[i]);
                    
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(h4);
                card.appendChild(myimg)
                card.appendChild(p);
                card.appendChild(button);
                button.appendChild(productId);
                }
        
            for(let i=0; i<4; i++)
                {
                const card = document.createElement('div');
                card.setAttribute('class', 'col-md-4');
                card.classList.add("card");

                const h3 = document.createElement('h3');
                h3.textContent = myData.Planes[i].Name;

                const h4 = document.createElement('h4');
                h4.textContent = "By " +myData.Planes[i].Manufacturer;

                const myimg = document.createElement('img');
                myimg.style.width = "200px";
                myimg.style.height = "200px";
                myimg.style.marginLeft = "auto";
                myimg.style.marginRight = "auto";
                myimg.src = myData.Planes[i].ImgUrl;

                const p = document.createElement('p');
                myData.Planes[i].Desc = myData.Planes[i].Desc.substring(0, 150);
                p.textContent = `${myData.Planes[i].Desc}...`;
                    
                const button = document.createElement('button');
                
                button.classList.add("btn");
                button.classList.add("btn-dark");
                button.classList.add("addtocart");
                    
                const text = document.createTextNode("€" + myData.Planes[i].Price + " - Add to Cart"); 
                button.appendChild(text);
                    
                const productId = document.createElement("param");
                productId.textContent = JSON.stringify(myData.Planes[i]);
                    
                container.appendChild(card);
                card.appendChild(h3);
                card.appendChild(h4);
                card.appendChild(myimg)
                card.appendChild(p);
                card.appendChild(button);
                button.appendChild(productId);
                }
        
        //we delcare an array to hold items added to the cart
        var cartObjects = []
        
        //this function is called when an add to cart button is pressed
        $(".addtocart").click(function(e){
            //we take the parameter appended to each card and parse it into JSON
            let itemAdded = e.currentTarget;
            let info = itemAdded.lastChild.textContent;   
            info = JSON.parse(info);
            
            //we then push this JSON to the array
            cartObjects.push(info);
            //now we turn the array into a string and send it to local storage
            localStorage.setItem("cartObjects", JSON.stringify(cartObjects));  
            
            //now we can update our total in the header
            $("#checkout").html("[ " + cartObjects.length + " ]");
    });        
    })   
})();