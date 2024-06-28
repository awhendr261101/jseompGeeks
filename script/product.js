// create products on the local storage

let wrapper = document.querySelector("[recentProducts]")

let products = JSON.parse(localStorage.getItem("jewelery")) ? JSON.parse (localStorage.getItem("jewelery") ) 
: localStorage.setItem("jewelery", 
    JSON.stringify(
        [{
          id: 1,
          productName: "Dragon Ballz",
          catergory: "Action",
          description: "Meet a naive young monkey-tailed boy named Goku",
          amount: 199.50,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/dragonBall.jpg"
        },
        {
          id: 2,
          productName: "Black Clover",
          catergory: "Action",
          description: "Young Asta was born with no magic ability in a world where magic is everything",
          amount: 149.99,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/black_clover.jpg"
        },
        {
          id: 3,
          productName: "Astro Baby",
          catergory: "Action",
          description: "The town North Hill has been quarantined to prevent the spread of the Couper disease",
          amount: 120.50,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/astro_baby.jpg"
        },
        {
          id: 4,
          productName: "Jujutsu Kaisen",
          catergory: "Action",
          description: "Yuji Itadori, despite his insane athleticism would rather just hang out with the Occult Club",
          amount: 199.50,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/Jjk.jpg"
        },
        {
          id: 5,
          productName: "Sakamoto Days",
          catergory: "Comedy",
          description: "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen",
          amount: 120.50,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/SAKAMOTO DAYS.jpg"
        }, 
        {
          id: 6,
          productName: "blue box",
          catergory: "Comedy",
          description: "Sterlin Silver Heart Beat Earing, color silver",
          amount: 149.99,
          img_url: "https://awhendr261101.github.io/allImages/images/jseomp/blue_box.jpg"
        }, 
          {
            id: 7,
            productName: "Beat Motion",
            catergory: "Romance",
            description: "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen",
            amount: 149.99,
            img_url: "https://awhendr261101.github.io/allImages/images/jseomp/Beat_Motion.jpg"
          }, 
          {
            id: 8,
            productName: "Aliens Area",
            catergory: "Comedy",
            description: "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen",
            amount: 149.99,
            img_url: "https://awhendr261101.github.io/allImages/images/jseomp/aliens_area.jpg"
          }, 
          {
            id: 9,
            productName: "Blooming Love",
            catergory: "Romance",
            description: "Taro Sakamoto was the ultimate assassin, feared by villains and admired by hitmen",
            amount: 149.99,
            img_url: "https://awhendr261101.github.io/allImages/images/jseomp/Blooming_Love.jpg"
          }])
)

// getting the current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear() 

// function recentProducts() {

//     try{
//         let latestProducts = products.reverse().slice(0,3) 
//         latestProducts.forEach(product => {
//             wrapper.innerHTML += `
//             <div class="card" style="width:18rem;">
//               <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading= "lazy">
//               <div class="card-body">
//                 <h5 class="card-title">${product.productName}</h5>
//                 <p class="card-text">${product.description}</p>
//               </div>
//             </div>
//             `
//         })
//     } catch (e){
//       wrapper.textContent = "Please contact our administrator" 
      
//       setTimeout(() => {
//         location.reload()
//       },
//         2000
//       )
//     }
    
// }

setTimeout(() =>{
  wrapper.innerHTML = ""
  try{
      let latestProducts = products.reverse().slice(0,3) 
      latestProducts.forEach(product => {
          wrapper.innerHTML += `
          <div class="card" style="width:18rem;">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading= "lazy">
            <div class="card-body">
              <h5 class="card-title">${product.productName}</h5>
              <p class="card-text">${product.description}</p>
            </div>
          </div>
          `
      })
  } catch (e){
    wrapper.textContent = "Please contact our administrator" 
    
    setTimeout(() => {
      location.reload()
    },
      2000
    )
  }
  
}, 2000) 



