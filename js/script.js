const loadData = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();

    const cardContainer = document.getElementById('card-container');
    data.posts.forEach(element => {
        const div = document.createElement('div');
       div.innerHTML=`<div class="flex gap-7 my-7 bg-slate-700 py-5 px-3 rounded-lg drop-shadow-md">
       <div>
         <img src="${element.image}" alt="">
       </div>
       <div class="space-y-5">
         <div class="flex gap-4">
           <p># ${element.category}</p>
           <p>Author : ${element.author.name}</p>
         </div>
         <h4 class="font-bold text-2xl">${element.title}</h4>
         <p>${element.description}</p>

         <div class="flex justify-between">
           <div class="flex gap-4">
             <p><i class="fa-regular fa-message"></i> <span>${element.comment_count}</span></p>
             <p><i class="fa-solid fa-eye"></i> <span>${element.view_count}</span></p>
             <p><i class="fa-regular fa-clock"></i> <span>${element.posted_time}</span> min</p>
           </div>

           <button class="btn"><img src="images/bbtn.png" alt=""></button>
         </div>

       </div>
     </div>`;
     cardContainer.appendChild(div)
    });
}



loadData()