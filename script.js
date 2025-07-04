/*------------------------- JS Code By Nirav ---------------------------*/



const productInfo = document.querySelector('#productInfo')

let productList = JSON.parse(localStorage.getItem('productList'))

let cartList = JSON.parse(localStorage.getItem('cartList'))





productInfo.addEventListener('submit', (e) => {


    e.preventDefault()


    const category = document.querySelector('#category').value
    const p_name = document.querySelector('#p_name').value
    const p_price = document.querySelector('#p_price').value
    const p_url = document.querySelector('#p_url').value



    const arr = productList || [];


    const id = arr.length + 1;


    const newProduct = {
        id, category, p_name, p_price, p_url
    }



    arr.push(newProduct)

    localStorage.setItem('productList', JSON.stringify(arr))


    location.reload();

})



function show() {
    
    let output = "";

    productList.forEach((product) => {

        output += `
  
            <div class="col-xl-3 col-lg-4 col-md-6 mt-4 " style="border-radius: 10px;">
                <div class="card border-0 shadow">

                    <div style="width: 250px; height: 200px; overflow: hidden;" class="p-1">
                        <img src="${product.p_url}" alt="product image"
                            style="width: 100%; height: 100%; object-fit: contain;">
                    </div>



                    <div class="cart-body p-2 d-flex flex-column align-items-center">

                        <h4 class="text-center">${product.p_name}</h4>

                        <ul style="list-style: none; align-self: flex-start;">
                            <li>Catagory : ${product.category}</li>
                            <li>Price : ${product.p_price} &#8377;</li>
                        </ul>
                    
                    <div>
                         <button onclick="addToCart(${product.id})" class="btn  m-1 mx-auto"
                            style="border-radius: 0;background-color: #ffde00;">Add To Cart</button>
                        
                            <button onclick="removeproduct(${product.id})" class="btn  m-1 ms-1 mx-auto"
                            style="border-radius: 0;background-color: red; color:white;"><i class="fa-solid fa-trash"></i>
                        </button>
                    </div>

                    </div>

                </div>
            </div>   `

                

    })

    document.querySelector('#showProduct').innerHTML = output
}

show()






function addToCart(id) {

    alert("Product Added To Cart............")

    const singleProduct = productList.find((product) => {
        return product.id === id;
    })


    //check cartList exist or not

    let cartList = JSON.parse(localStorage.getItem('cartList')) || []


    // check cart exist or not based on id

    const singleCart = cartList.find((cart) => {
        return cart.id === id;
    })


    if (singleCart) {

        singleCart.count += 1

    } else {
        const newCart = {
            ...singleProduct,
            count: 1
        }
         cartList.push(newCart)
    }

    localStorage.setItem('cartList', JSON.stringify(cartList))

    location.reload()



}



//for remove product from productList

function removeproduct(id){

   
   let  newproductList = productList.filter((product) => {
    return product.id !== id
   })

   localStorage.setItem('productList', JSON.stringify(newproductList))

   
   location.reload()
   show()

} 














//For showing number of items added beside cart button....

function countCart(){
    
    const cartList = JSON.parse(localStorage.getItem('cartList'))

    console.log( "carlist length....", cartList.length);

     
    let totalcounts = 0;
    

    cartList.forEach((cart) => {

        totalcounts += cart.count

    })


    console.log("Total counts.....",totalcounts);
    


    document.querySelector('#cartCount').innerHTML = totalcounts;

    
}

countCart()








