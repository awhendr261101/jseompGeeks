function program() {
  document.querySelector('[spin]').innerHTML = ''
  let container = document.querySelector('[ourStore]')
let sortingByAmount = document.querySelector("[sorting]")
let jewelery = document.querySelector("[products]")


let products = JSON.parse(
    localStorage.getItem("jewelery")
)


function display(){
    try{ 
        products.forEach(product => {
          jewelery.innerHTML += `
            <div class="card" style="width:18rem;">
              <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
              <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
                <h6>R${product.amount}</h6>
                <div class="buttons">
                  <input class="btn btn-primary" type="button" value="Add To Cart" id=${product.id} button>
                </div>
              </div>
            </div>
            `
        })  
    } catch (e){
      jewelery.textContent = "Please contact our administrator" 
      
      setTimeout(() => {
        location.reload()
      },
        2000
      )
    }
}

function displayGen(args){
  try{ 
      args.forEach(product => {
        jewelery.innerHTML += `
          <div class="card" style="width:18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
            <div class="card-body">
              <h5 class="card-title">${product.productName}</h5>
              <p class="card-text">${product.description}</p>
              <h6>R${product.amount}</h6>
              <div class="buttons">
                <input class="btn btn-primary" type="button" value="Add To Cart" id=${product.id} button>
              </div>
            </div>
          </div>
          `
      })  
  } catch (e){
    jewelery.textContent = "Please contact our administrator" 
    
    setTimeout(() => {
      location.reload()
    },
      2000
    )
  }
}


display()


let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse (localStorage.getItem("cart") ) 
: localStorage.setItem("cart", 
    JSON.stringify(
      []))

// This is where we push wich ever product that has been added to the cart to the local storage 
document.querySelectorAll("[button]").forEach(element => {
  element.addEventListener("click", (e) => {
    let id = e.target.id
    let product = products.find(product => product.id == id)

    let cart = JSON.parse(
        localStorage.getItem("cart")
    )
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
  })
});

// search button
let searchProducts = document.querySelector(".form-control")
document.querySelector(".form-control").addEventListener("keyup", () => {
  let noob = []
  jewelery.innerHTML =''
  products.forEach((product) => {
    if (product.productName.toLowerCase().includes(searchProducts.value.toLowerCase()) && searchProducts.value !='') {
        noob.push(product)
        displayGen(noob)

    } else if (searchProducts.value ==''){
      jewelery.innerHTML = ''
      display()
    }
  })
})

// filter by catergory
document.querySelector("[select]").addEventListener("change",  ()=>{
  document.querySelector("[select]").value.toLowerCase()

  let stem = []
  products.forEach((product) => {
    if (product.catergory.toLowerCase() == document.querySelector("[select]").value) {
        stem.push(product);
    } else if (document.querySelector("[select]").value == 'empty'){
        stem = products
    }
  })
  
  jewelery.innerHTML= ''
  displayGen(stem)

});

// getting the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 
try {
    
    let products = JSON.parse(
        localStorage.getItem("products")
    )

} catch(error){
    
    console.log(error);
}
} 


setTimeout(() => {
  document.querySelector('[spin]').innerHTML = ''
  let container = document.querySelector('[ourStore]')
let sortingByAmount = document.querySelector("[sorting]")
let jewelery = document.querySelector("[products]")


let products = JSON.parse(
    localStorage.getItem("jewelery")
)


function display(){
    try{ 
        products.forEach(product => {
          jewelery.innerHTML += `
            <div class="card" style="width:18rem;">
              <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
              <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
                <h6>R${product.amount}</h6>
                <div class="buttons">
                  <input class="btn btn-primary" type="button" value="Add To Cart" id=${product.id} button>
                </div>
              </div>
            </div>
            `
        })  
    } catch (e){
      jewelery.textContent = "Please contact our administrator" 
      
      setTimeout(() => {
        location.reload()
      },
        2000
      )
    }
}

function displayGen(args){
  try{ 
      args.forEach(product => {
        jewelery.innerHTML += `
          <div class="card" style="width:18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
            <div class="card-body">
              <h5 class="card-title">${product.productName}</h5>
              <p class="card-text">${product.description}</p>
              <h6>R${product.amount}</h6>
              <div class="buttons">
                <input class="btn btn-primary" type="button" value="Add To Cart" id=${product.id} button>
              </div>
            </div>
          </div>
          `
      })  
  } catch (e){
    jewelery.textContent = "Please contact our administrator" 
    
    setTimeout(() => {
      location.reload()
    },
      2000
    )
  }
}


display()


let cart = JSON.parse(localStorage.getItem("cart")) ? JSON.parse (localStorage.getItem("cart") ) 
: localStorage.setItem("cart", 
    JSON.stringify(
      []))

// This is where we push wich ever product that has been added to the cart to the local storage 
document.querySelectorAll("[button]").forEach(element => {
  element.addEventListener("click", (e) => {
    let id = e.target.id
    let product = products.find(product => product.id == id)

    let cart = JSON.parse(
        localStorage.getItem("cart")
    )
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))
  })
});

// search button
let searchProducts = document.querySelector(".form-control")
document.querySelector(".form-control").addEventListener("keyup", () => {
  let noob = []
  jewelery.innerHTML =''
  products.forEach((product) => {
    if (product.productName.toLowerCase().includes(searchProducts.value.toLowerCase()) && searchProducts.value !='') {
        noob.push(product)
        displayGen(noob)

    } else if (searchProducts.value ==''){
      jewelery.innerHTML = ''
      display()
    }
  })
})

// filter by catergory
document.querySelector("[select]").addEventListener("change",  ()=>{
  document.querySelector("[select]").value.toLowerCase()

  let stem = []
  products.forEach((product) => {
    if (product.catergory.toLowerCase() == document.querySelector("[select]").value) {
        stem.push(product);
    } else if (document.querySelector("[select]").value == 'empty'){
        stem = products
    }
  })
  
  jewelery.innerHTML= ''
  displayGen(stem)

});

// getting the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 
try {
    
    let products = JSON.parse(
        localStorage.getItem("products")
    )

} catch(error){
    
    console.log(error);
}
}, 2000 )
  