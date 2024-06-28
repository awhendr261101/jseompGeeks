// getting the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 

let products = JSON.parse(
    localStorage.getItem("jewelery")
)

products.forEach(element => {
    document.querySelector('[table]').innerHTML += `
        <tr>
            <td colspan="3"> <img src=${element.img_url} alt="${element.productName}" loading="lazy" style="width: 6rem;"> </td>
            <td colspan="3">${element.productName}</td>
            <td>${element.catergory}</td>
            <td>${element.description}</td>
            <td>R${element.amount}</td>
            <td><button type="button" class="btn btn-success mb-3" style="width: 5rem;" edit id="${element.id}"><i class="fa fa-angle-left"></i> Edit</button> <br> 
            <button style="width: 5rem;" type="button" class="btn btn-danger" id="${element.id}" deleteProduct><i class="fa fa-angle-left"></i> Delete</button>  
            </td>
        </tr>
    `   
});


// add model functionality

let dialog = document.querySelector("dialog");
let showButton = document.querySelector("dialog + button");
let closeButton = document.querySelector("dialog button");
let closeButton2 = document.querySelector(".autofocus")

// "Show the dialog" button opens the dialog modally

let clicked = 0
document.querySelectorAll("[edit]").forEach( button => {
    button.addEventListener("click", () => {
        document.querySelector("[submit-edit]").id = button.id
        document.querySelector("[editModal]").showModal()
    });
})

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  document.querySelector("[editModal]").close();
});

document.querySelector("[addNewProduct]").addEventListener("click", () => {
    document.querySelector("[addModal]").showModal()
})

closeButton2.addEventListener("click", () => {
    console.log("clicked");
    document.querySelector("[addModal]").close();
  });

document.querySelectorAll("[deleteProduct]").forEach(value => {
    value.addEventListener("click", () => {
        products = products.filter(item => item.id!= value.id)
        localStorage.setItem("jewelery", JSON.stringify(products))
        location.reload()
    })
})
class Product{
    constructor(productName, amount ,description){
        this.productName = productName;
        this.description = description;
        this.amount = amount;
    }

    getProduct(){ 
        return `${this.productName} ${this.amount} ${ this.description}`;  
    }

}

class ADDProduct {
    constructor(id,productName, amount, description, catergory, img_url){
        this.productName = productName;
        this.amount = amount;
        this.description = description;
        this.catergory = catergory;
        this.img_url = img_url;
        this.id = id;
    }
}

document.querySelector("[submit-edit]").addEventListener("click", () => {
    let productName = document.querySelector("[productName]").value;
    let amount = document.querySelector("[amount]").value;
    let description = document.querySelector("[description]").value;

    products.forEach(product => {
        if (product.id == document.querySelector("[submit-edit]").id) {
            if(productName != ""){
                product.productName = productName;
            } 
            if(amount!= ""){
                product.amount = amount;
            }
            if(description!= ""){
                product.description = description;
            }

            localStorage.setItem("jewelery", JSON.stringify(products))
            location.reload()
            dialog.close();
            
        }
    })
    
});

document.querySelector("[submit-addProduct]").addEventListener("click", () => {
    let productName = document.querySelector("[addProductName]").value;
    let amount = document.querySelector("[addAmount]").value;
    let description = document.querySelector("[addDescription]").value;
    let catergory = document.querySelector("[addCatergory]").value;
    let img_url = document.querySelector("[addImgurl]").value;
    let listIDs = []
    products.forEach( (product) => {
        listIDs.push(product.id)
    })

    let id = Math.max(...listIDs) + 1

    let newProduct = new ADDProduct(id,productName, amount, description, catergory, img_url)
    products.push(newProduct)
    localStorage.setItem("jewelery", JSON.stringify(products))
    location.reload()
    dialog.close();
})




