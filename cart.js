/*------------------------- JS Code By Nirav ---------------------------*/


let cartList = JSON.parse(localStorage.getItem('cartList'))




function showCart(){

    let output = '';

    
    
    if(cartList.length > 0){

        cartList?.forEach((product) => {

        output += `
        
            <div class="row shadow mt-4 p-4" style="background-color: white; border-radius: 10px;">

                <div style="width: 250px; height: 200px; overflow: hidden;" class="p-1 col-6">
                    <img src="${product.p_url}" alt="product image"
                        style="width: 100%; height: 100%; object-fit: contain;">
                </div>


                <div class="col-8 ms-5">
                    <h5>Category : ${product.category}</h5>
                    <h5>Product : ${product.p_name}</h5>
                    <h5>Price : ${product.p_price} &#8377;</h5>
                    <h5>Quantity : ${product.count}</h5>
                    <h5>Total Amount : ${product.p_price * product.count} &#8377;</h5>
                    <button class="btn" onclick="removeCart(${product.id})"
                        style="border-radius: 0; background-color: red; color: white;"><i
                            class="fa-solid fa-trash"></i></button>
                </div>


            </div>
        `
    } )

    document.querySelector('#cartDetails').innerHTML = output

    }
    else{

        document.querySelector('#cartDetails').innerHTML = ` 
        
        <div class="row shadow mt-4 p-4" >

        
                <div class="col-12 m-auto text-center">
                    <h1>No Item Added....</h1>
                </div>
               

            </div>
        `

    }
}

showCart()





function removeCart(id){

    
    
    alert(id)

    const filterData = cartList.filter((cart) => {
        return cart.id !== id
    })

    localStorage.setItem('cartList', JSON.stringify(filterData))
    

    location.reload()

    showCart()

}































