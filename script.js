let sidebar=document.querySelector(".sidebar");
let barIcon=document.querySelector(".bar");
let link=document.querySelector("a")
barIcon.addEventListener("click",()=>{
   sidebar.classList.toggle('active');  
 
})
link.addEventListener("click",()=>{
    sidebar.classList.remove('active')
  })





// patient Card display
let cardata=[
   {
      patientImage:'',
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
   {
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
   {
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
   {
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
   {
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
   {
      patientName:'Ali',
      email:"alikhan22@gmail.com",
      Contact:'03436523678',
      address:'charbagh'
   },
]
let DisplayCard=()=>{
   let newhtml='';
     cardata.forEach((data,i)=>{
      newhtml+=`<div class="box bg-gray-100   w-fit-content  h-60 flex  rounded-2xl  px-3 py-5 shadow-md hover:scale-[1.05] transition-all duration-500 shadow-black ">
               <div>
                   <div class=" profile  flex items-center flex-col gap-3 w-full">
                      <img src="Assets/pngwing.com (4).png" alt="" class="w-16 h-116">
                      <h3 class="text-sm font-semibold mx-auto">${data.patientName}</h3>
                     </div>
                   <div class="profile-content my-5  px-3">
                      <h2 class="font-[500]"><span class="font-normal text-[13px]">Email: ${data.email}</span></h2>
                      <h2 class="font-[500]"><span class="font-normal text-[13px]">Contact No:</span></h2>
                      <h2 class="font-[500]"> <span class="font-normal text-[13px]">Address:</span></h2>
                   </div>
               </div>
             </div>`;
     })
     document.querySelector('.card-container').innerHTML=newhtml;
}


DisplayCard();