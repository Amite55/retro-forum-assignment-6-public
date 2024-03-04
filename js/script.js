
const cardShowTitleViewr = document.getElementById('card-titile-viewr');
const loadData = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await response.json();
    // api card section
    const cardContainer = document.getElementById('card-container');
    data.posts.forEach(element => {

      // active true or false
      let veriFieldBadge = '';
      if(element.isActive === true){
        veriFieldBadge = `<div class="w-3 h-3 bg-green-700 rounded-full"> </div>`;
      }
      else{
        veriFieldBadge = `<div class="w-3 h-3 bg-red-700 rounded-full"> </div>`;
      }

        const div = document.createElement('div');
       div.innerHTML=`<div class="flex gap-7 my-7 bg-slate-700 py-5 px-3 rounded-lg drop-shadow-md">
       <div class="indicator">
       ${veriFieldBadge}
         <img class="w-10 h-10 rounded-full border" src="${element.image}" alt="">
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

           <button id="btn-click" class="btn bum-bum"><img src="images/bbtn.png" alt=""></button>
         </div>

       </div>
     </div>`;
     cardContainer.appendChild(div)
    });

    // button click 
    const btnClick =document.getElementsByClassName('bum-bum');
    
    let count = 0;
    for(const btn of btnClick){
        btn.addEventListener('click', function(event){
            count++;
            const countNum = document.getElementById('count-num');
            countNum.innerText= count;
           
            // counter and viewer counter
            const titleName = event.target.parentNode.parentNode.parentNode.childNodes[3].innerText;

          
            const countView = event.target.parentNode.parentNode.parentNode.childNodes[7].childNodes[1].childNodes[3].outerText;



            const createDiv = document.createElement('div');

           createDiv.innerHTML=`<div class="flex gap-2 bg-zinc-700 py-7 rounded-lg px-3 my-5">
            <p id="title-Card">${titleName}</p>
            <p id="view-counter" class ="text-center"><i class="fa-regular fa-eye"></i> <span>${countView}</span></p>
          </div>`;
          cardShowTitleViewr.appendChild(createDiv)

        })
    }

}

// search data section
const searchBtn = () =>{
    const searchField = document.getElementById('search-field');
    const seachText = searchField.value;
    console.log(seachText)
}


const postData = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const allData = await res.json();
    const letsData = document.getElementById('all-data');
    allData.forEach(data => {
        const divu = document.createElement('div');




        // divu.classList=`grid sm:grid-cols-1 lg:grid-cols-3`;



        divu.innerHTML=`<div class="card bg-base-100 shadow-xl h-[480px] border border-sky-500">
        <figure class="px-10 pt-10">
          <img src="${data.cover_image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <div class="">
            <i class="fa-regular fa-calendar-days"></i>
            <p>${data?.author?.posted_date || 'No Date'}</p>
          </div>
          <h2 class="card-title">${data.title}</h2>
          <p>${data.description}</p>
          <div class="flex gap-5">
            <img class="w-10 rounded-full" src="${data.profile_image}" alt="">
            <div>
              <h4 class="text-xl font-bold">${data.author.name}</h4>
              <p>${data.author?.designation || 'No Info'}</p>
            </div>
          </div>
        </div>
      </div>`;
      letsData.appendChild(divu)

    })
}






loadData();

postData();