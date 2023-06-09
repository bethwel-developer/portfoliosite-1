import React from 'react';
import {BsGithub} from "react-icons/bs"
import {MdOutlinePreview} from "react-icons/md"



const Portfolio = () => {
  return (
    <>
    <div class="ml-[140px] mr-[140px] ">
    <h1 class=" text-[green] text-[1.5rem] font-extrabold" >Portfolio</h1>
    <h1 class="font-bold">Each project is a unique piece of development ⚡. </h1>

    <div class="flex justify-center mt-9 ">
      <div class="w-[40%] border-2 p-1 shadow-2xl  rounded-lg">
        <img class="mb-2" src=".\realestate3.png" alt="" srcset="" />
        <img src=".\realestate2.png" alt="" srcset="" />

      </div>

        <div class="text-center border-2 mr-5 p-5 w-[50%] shadow-2xl rounded-lg">
          <h1 class="mt-3 mb-3 font-bold">PROJECT:REAL ESTATE WEBSITE</h1>
          <p>
          Using the power of React, i have created this highly responsive and interactive front-end real estate website platform, that allows users to effortlessly browse through a vast selection of real estate listings. </p>

          <div class="flex justify-center mt-7 cursor-pointer font-bold">
         
          <a class="mr-0 hover:text-[red]" href="https://guestyrealestates.netlify.app/">Live Preview</a>
          <span class="mr-5 text-[1.7rem] "><MdOutlinePreview/></span>
              <a class="mr-2 hover:text-[red]" href="https://github.com/bethwel-developer/realestate-react-website">code</a> 
              <span class="text-[1.4rem]"> <BsGithub/></span>


             
    
          </div> 

          
      </div>
      <div class="w-[40%] border-2 p-5 shadow-2xl  rounded-lg">
      <img class="mt-[1rem]" src=".\scn1.png" alt="" srcset="" />
      <img class="mt-[1px]" src=".\scn2.png" alt="" srcset="" />

      </div>

        <div class="text-center border-2 mr-5 p-5 w-[50%] shadow-2xl rounded-lg">
          <h1 class="mt-3 mb-3 font-bold">project name: REGISTER AND LOGIN FUNCTIONALITY</h1>
         <p>Login and register functionality with error handling and password encryption.Able to login already registered users and register new users and store user details in mongodb database.</p>

          <div class="flex justify-center mt-2 cursor-pointer">
              <a class="mr-2  hover:text-[red] font-bold" href="https://github.com/bethwel-developer/REGISTER-AND-LOGIN-FUNCTIONALITY-MERN-">code</a> 
              <span class="text-[1.4rem] "> <BsGithub/></span>
    
          </div> 

   </div>
   </div>

</div>
    
<div class="ml-[140px] mr-[140px] ">
    

    <div class="flex justify-center mt-9 ">
      <div class="w-[40%] border-2 p-5 shadow-2xl  rounded-lg">
      <img class="mt-[1rem]" src=".\api1.png" alt="" srcset="" />
      <img class="mt-[1rem]" src=".\api2.png" alt="" srcset="" />

      </div>

        <div class="text-center border-2 mr-5 p-5 w-[50%] shadow-2xl rounded-lg">
          <h1 class="mt-3 mb-3 font-bold">project name:BLOGPOST BACKEND API</h1>
          <p>backend api for a blogpost with user authentication encrypted with bcrypt, post editing and uploading functionality, user settings(update details section) and post category queries.</p>

          <div class="flex justify-center mt-1 cursor-pointer">

          <a class="mr-2 hover:text-[red] font-bold" href="https://github.com/bethwel-developer/Mongo-Express-Nodejs-Blogpost-backend-Api/tree/master">code</a> 
              <span class="text-[1.4rem]"> <BsGithub/></span> 
    
          </div> 

          
      </div>
      <div class="w-[40%] border-2 p-5 shadow-2xl  rounded-lg">
      <img class="mt-[1px]" src=".\drums1.png" alt="" srcset="" />
      <img class="mt-[1px]" src=".\drums2.png" alt="" srcset="" />

      </div>

        <div class="text-center border-2 mr-5 p-5 w-[50%] shadow-2xl rounded-lg">
          <h1 class="mt-3 mb-3 font-bold ">project name:SIMPLE DRUMSKIT JS SITE</h1>
          <p>Simple vanilla javascript drumskit site fully functional with sounds.</p>

          <div class="flex justify-center mt-[2rem] cursor-pointer">

          <a class="mr-0 hover:text-[red] font-bold" href="https://jsdrumskitsite.netlify.app/">Live Preview</a>
          <span class="mr-5 text-[1.7rem] "><MdOutlinePreview/></span>
              <a class="mr-2 hover:text-[red] font-bold" href="https://github.com/bethwel-developer/drumskit-site">code</a> 
              <span class="text-[1.4rem]"> <BsGithub/></span>
    
          </div> 

   </div>
   </div>

</div>
</>
  );
}

export default Portfolio;
