const handleCatagory =async()=>{
   
   const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
   const data =await response.json();
   const tabcontainer =document.getElementById('tab-container ');
   data.data.forEach((catagory)=>{
    const div =document.createElement('div');
    div.innerHTML=`
     <a onclick="handlelodeyoutube('${catagory.category_id}')"class="tab btn btn-error m-4 text-white ">${catagory.category}</a> `;
    tabcontainer.appendChild(div);
   });
  //  console.log(data.data);
 
   
};

 const handlelodeyoutube=async(catagoryId)=>{
  console.log(catagoryId);
     const response=await fetch(`  https:openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await response.json();
    //  console.log(data.data);
     
     const cardcontainer=document.getElementById('phone-card ');
     cardcontainer.innerHTML="";
     
     data.data?.forEach((news)=>{
      //  console.log(news);
       const div1 =document.createElement('div');
       div1.innerHTML =`
       <div class="card lg:w-[320px] lg:h-[350px]  bg-base-100 shadow-xl ">
       <figure><img class="pb-20 lg:w-[470px] lg:h-[320px]" src=${news.thumbnail} /></figure>
       <div class="card-body">
       <div class="flex space-between items-center gap-4 ">
            <img class="w-12 h-12 rounded-full" src=${news.authors[0].profile_picture} />
            <h3>${news.title}</h3>
          
          </div>
     <div>
     <h3>${news?.authors[1]?.profile_name}</h3>
     <h3>${news.others.views}</h3>
     </div>
          
       </div>
     </div>
       `;
       cardcontainer.appendChild(div1);
     })
    
    
    }
 
 


handleCatagory();
handlelodeyoutube(1000)