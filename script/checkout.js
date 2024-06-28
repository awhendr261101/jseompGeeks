// getting the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 

let orders = JSON.parse(localStorage.getItem('cart'));

let table = document.querySelector('[table]');

let amounts = []
orders.forEach(order => {
    amounts.push(order.amount)

    table.innerHTML +=
        `<tr>
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-2 hidden-xs"><img src=${order.img_url} alt="${order.productName}" class="img-responsive" style="width: 6rem;">
                    </div>
                    <div class="col-sm-10 ps-5">
                        <h4 class="nomargin">${order.productName}</h4>
                        <p>${order.description}</p>
                        </p>
                    </div>
                </div>
            </td>
            
            <td data-th="Price">R${order.amount.toFixed(2)}</td>
            <td data-th="Quantity">
                <input type="number" class="form-control text-center" value="1" quantinty >
            </td>
            <td data-th="Subtotal" class="text-center" subtotal >R${order.amount.toFixed(2)}</td>
            <td class="actions" data-th="">
                <button class="btn btn-info btn-sm"><i class="fa fa-refresh" id="${order.id}" reset-quantity ></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash-o" id="${order.id}" remove></i></button>
            </td>
        </tr>
        `;
        document.querySelector('[grandTotal]').innerHTML = `<strong>Total $ ${grandTotal()}</strong>`
        document.querySelectorAll("[quantinty]").forEach((input,index) => {
            input.addEventListener("change", () => {
                document.querySelectorAll("[subtotal]").forEach((output, pos) => {
                    if (pos == index) {
                        
                        output.textContent =  `R${((amounts[index]) * (+input.value)).toFixed(2)}`;
                    }
                });

            document.querySelector('[grandTotal]').innerHTML = `<strong>Total $ ${grandTotal()}</strong>`

            })
        })

})

function grandTotal() {
    let list = []
    document.querySelectorAll("[subtotal]").forEach((item) => {list.push(item.textContent.slice(1,));})
    
    return list.reduce((a,b) => (+a) + (+b))
    
}

document.querySelectorAll("[remove]").forEach(
    (item) => {
        console.log("here");
        item.addEventListener("click", (e) => {
            let id = e.target.id
            let cart = JSON.parse(localStorage.getItem("cart"))
            cart = cart.filter(item => item.id!= id)
            localStorage.setItem("cart", JSON.stringify(cart))
            location.reload()
        })
    }
)

document.querySelectorAll("[reset-quantity]").forEach(
    (item) => {
        item.addEventListener("click", (e) => {
            let id = e.id
            let cart = JSON.parse(localStorage.getItem("cart"))
            cart.forEach(item => {
                if (item.id == id) {
                    item.quantity = 1
                }
            })
            localStorage.setItem("cart", JSON.stringify(cart))
            location.reload()
        })}
)


