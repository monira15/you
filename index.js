

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
  // Function to create and display the drawing button

 
   
};
function createDrawingButton() {
  // Create a button element
  const drawingButton = document.createElement('button');
  drawingButton.innerHTML=`
 <img  class="w-[200px] mx-auto" src="./Icon.png" >
 <p class="text-5xl ">Oops!! Sorry, There is no content here</p>
  `; 
  // Append the button to the drawing container
  const drawingContainer = document.getElementById('drawingContainer');
  drawingContainer.appendChild(drawingButton);
}



// Call the createDrawingButton function to create the button
createDrawingButton();



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
       <div class="card lg:w-[320px] h-[350px]  bg-base-100  rounded-none">
       <figure><img class="lg:-pb-24 md:w-[300px] w-[470px] lg:h-[200px] " src=${news.thumbnail} /></figure>
       <div class="card-body">
       <div class="flex justify-start lg:-ml-6  items-center gap-4 ">
            <img class="w-12 h-12 rounded-full" src=${news.authors[0].profile_picture} />
            <h3>${news.title}</h3>
          
          </div>
     <div class="ml-8 flex gap-2 items-center">
     <h3>${news.authors[0].profile_name}</h3>
     <p>${news.authors[0].verified ? '<span class="badge-icon bg-red-500 rounded-xl"><img class="w-[20px]" src="./budge-icon2.png" alt=""></span>' : ''}</p>


   
     </div>
     <h3 class="ml-8" >${news.others.views} veiws</h3>
       </div>
     </div>
       `;
       cardcontainer.appendChild(div1);
     })
    
    
    }




handleCatagory();

handlelodeyoutube(1000)

