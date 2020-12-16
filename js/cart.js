(function() {
    //in this function we retrieve the contents of our cart from local storage
    var cartObjects = JSON.parse(localStorage.getItem("cartObjects"));
    console.log(cartObjects);
    
    //we then call these methods
    //first we render the cart
    RenderCart(cartObjects);
    //then we check if the cart has no items, which will prevent the user going to the checkout
    CheckZero(cartObjects);
    //finally we check if the user is signed in. if not, we prevent them from getting to the checkout
    CheckSignIn();
})();

function RenderCart(cartObjects)
{
    //we get the root in the html and set up a container
    const root = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    root.appendChild(container);
    
    for(let i=0; i<cartObjects.length; i++)
        {
            //now we loop through the objects in the cart to display them
            const row = document.createElement('div');
            row.setAttribute("class", "row");
            row.setAttribute("class", "w-100");
            row.style.margin = "10px";
            row.style.border = ".5em solid #04adc7";
            row.style.borderRadius = "1em";
            
            const item = document.createElement('div');
            item.setAttribute("class", "col-12");
            item.setAttribute("class", "my-auto");
            
            const img = document.createElement('img');
            img.style.width = "100px";
            img.style.height = "100px";
            img.src = cartObjects[i].ImgUrl;
            img.style.float = "left";
            img.style.margin = "1em";
            
            const name = document.createElement('p');
            name.textContent = cartObjects[i].Name;
            name.style.float = "left";
            name.style.fontSize = "2em";
            name.style.margin = "1em";
            
            //here we create and add an event listener to our remove button
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.classList.add("btn");
            remove.classList.add("btn-dark");
            remove.style.float = "right";
            remove.style.marginTop = "2em";
            remove.addEventListener("click", function() {
                Remove(event, cartObjects);
            }, false);
            
            const productId = document.createElement("param");
            productId.textContent = JSON.stringify(cartObjects[i]);
            
            const price = document.createElement('p');
            price.textContent = "€" + cartObjects[i].Price
            price.style.float = "right";
            price.style.fontSize = "2em";
            price.style.margin = "1em";
            
            container.appendChild(row);
            row.appendChild(item);
            item.appendChild(img);
            item.appendChild(name);
            item.appendChild(remove);
            item.appendChild(price);
            item.appendChild(productId);
        }
    
    //here we create our totals for items in the cart and the total price of all items
    const row = document.createElement('div');
    row.setAttribute("class", "row");
    row.setAttribute("class", "w-100");
    row.style.margin = "10px";
            
    const item = document.createElement('div');
    item.setAttribute("class", "col-12");
    
    const totalItems = document.createElement('p');
    totalItems.textContent = "Items : " + cartObjects.length;
    totalItems.style.fontSize = "2em";
    totalItems.style.float = "left";
    
    let totalPrice = 0;
    for(let j=0; j<cartObjects.length; j++)
        {
            totalPrice += parseFloat(cartObjects[j].Price)
            console.log(totalPrice);
        }
    
    localStorage.setItem("totalItems", parseInt(cartObjects.length));
    localStorage.setItem("totalPrice", totalPrice);
    
    const totalPriceString = document.createElement('p');
    totalPriceString.textContent = "Total : €" + totalPrice.toString();
    totalPriceString.style.fontSize = "2em";
    totalPriceString.style.float = "right";
    
    container.appendChild(row);
    row.appendChild(item);
    item.appendChild(totalItems);
    item.appendChild(totalPriceString);
    
}

function Remove(event, cartObjects)
{
    //this function allows us to remove items from the cart
    // it will reload the page without the removed item and remove it from local storage
    let button = event.target;
    let item = button.parentElement;
    let itemJSON = JSON.parse(item.lastChild.textContent);
    
    for(let i=0; i<cartObjects.length; i++)
        {
            if (itemJSON.ItemID == cartObjects[i].ItemID)
                {
                    cartObjects.splice(i, 1);
                }
        }
    Clear();
    localStorage.setItem("cartObjects", JSON.stringify(cartObjects));
    RenderCart(cartObjects);
    
    document.getElementById("checkout").innerHTML = cartObjects.length;
    CheckZero(cartObjects);
}

function Clear()
{
    //this function clears the elements on the page
    const app = document.getElementById('root'); 
    while (app.firstChild) {
    app.removeChild(app.firstChild);
    }
}

function CheckZero(cartObjects)
{
    //this function checks to see if there are any objects in the cart
    if(cartObjects.length == 0)
        {
            let button = document.getElementById("checkoutButton");
            button.disabled = true;
            let link = button.firstChild;
            link.setAttribute("href", "");
            button.innerHTML = "Your cart is empty";
        }
}

function CheckSignIn()
{
    //this function checks to see if the user is logged in
    let loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn);
    
    if(loggedIn == 0)
        {
            let button = document.getElementById("checkoutButton");
            let link = button.firstChild;
            link.setAttribute("href", "login.html");
            link.innerHTML = "You must log in to continue";
        }
}