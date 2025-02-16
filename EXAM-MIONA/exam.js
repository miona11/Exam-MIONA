 

let arr = [
  {
    name:"Jeans",
    img:"https://cdn.pixabay.com/photo/2011/06/12/04/58/nanjing-7866_640.jpg",
    text:"We have a large assortment of jeans, various sizes and models.",
    likes: 0,
  },
  {
    name:"T-Shirts",
    img:"https://cdn.pixabay.com/photo/2023/05/23/08/49/fashion-8012239_640.jpg",
    text:"We have a large assortment of t-shirts, various sizes and models.",
    likes: 0,
  },
  {
    name:"Shoes",
    img:"https://cdn.pixabay.com/photo/2017/07/02/21/34/sport-shoe-2465915_640.jpg",
    text:"We have a large assortment of shoes, various sizes and models.",
    likes: 0,
  },
  {
    name:"Suits for Him",
    img:"https://cdn.pixabay.com/photo/2017/08/28/02/59/suit-2688317_640.jpg",
    text:"We have a large assortment of suits for him, various sizes and models.",
    likes: 0,
  },
  {
    name:"Wedding Dresses",
    img:"https://cdn.pixabay.com/photo/2016/11/10/06/15/wedding-dresses-1813568_640.jpg",
    text:"We have a large assortment of wedding dresses for your special date, with various sizes and models.",
    likes: 0,
  },
  
{
  name:"Elegant Shoes",
  img:"https://cdn.pixabay.com/photo/2017/11/11/18/45/fashion-2939996_640.jpg",
  text:"We have a large assortment of elegant shoes, various sizes and models.",
  likes: 0,
},
{
  name:"Baby clothes",
  img:"https://cdn.pixabay.com/photo/2020/05/25/22/33/mockup-5220695_640.jpg",
  text:"We have a large assortment of baby clothes for our new small customers, various sizes and models.",
  likes: 0,
},
{ name:"Children Clothes",
  img:"https://cdn.pixabay.com/photo/2015/06/10/13/23/clothesline-804812_1280.jpg",
  text:"We have a large assortment of children clothes, various sizes and models.",
  likes: 0,
  
},

  { name:"Children shoes",
    img:"https://cdn.pixabay.com/photo/2014/10/27/19/18/baby-shoes-505471_640.jpg",
    text:"We have a large assortment of children shows, various sizes and models.",
    likes: 0,},

     
];


 function displayItems() { 
  let container = document.getElementById("result"); container.innerHTML = ""; 

  for (const val of arr) {
  container.innerHTML += `
  <div class="mt-4">
  <div class="card" style="width: 18rem;">
  <img src="${val.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">${val.text}</p>
    <div class="d-flex justify-content-between">
      <button class="btn like-btn">
      <i class="icon fa-solid fa-triangle-exclamation" style="color:rgba(12, 13, 13, 0.6);"></i>Priority level:</button>
   <p class= "like-value ">${val.likes}</p>
    </div>
    </div>
  </div>
</div>
</div>`;
}
addEventListener();
 }


 function addEventListener(){
  let btns = document.querySelectorAll(".like-btn");
  
  btns.forEach((element, i) => {
    element.addEventListener("click", ()=>{
  if (arr[i].likes < 5) {
  
    arr[i].likes++;
  document.querySelectorAll(".like-value")[i].innerHTML = arr[i].likes;
  
  
  if(arr[i].likes < 2){
    document.querySelectorAll(".like-value")[i].style.background = "green";
  }else if (arr[i].likes <4){
    document.querySelectorAll(".like-value")[i].style.background = "yellow";
  }else{
    document.querySelectorAll(".like-value")[i].style.background = "red";
  }
  }
    });
  });
  } 


function sortbyLikes(){ 
  arr.sort((a, b) => b.likes - a.likes); 
  displayItems();
  addEventListener();
 } 

 document.getElementById("sort").addEventListener("click",sortbyLikes);

 displayItems();

         