import React from 'react';
import {BsGithub} from "react-icons/bs"
import {IoLogoLinkedin,IoLogoCss3} from "react-icons/io"
import {FaReact,FaNodeJs,FaPython} from "react-icons/fa"
import {SiTailwindcss,SiJavascript,SiDjango} from "react-icons/si"
import{AiFillHtml5} from "react-icons/ai"

const Hero = () => {

  
  return (
    <div class="mt-[140px] flex  justify-center ">
      <div class="">
        <h1 class="font-black text-[30px] ">Full-stack <br/>MERN developer. 👋</h1>
        <h1 class="mt-6">Hi, I'm Bethwel, Apassionate Full-stack web <br/> Developer based in Kenya.📍</h1>

        <div class=" flex text-[1.8rem] mt-5 gap-3 ">

    <a class="cursor-pointer hover:text-red-600" href="https://github.com/bethwel-developer" ><BsGithub/></a> 
    <span class="cursor-pointer hover:text-red-600"><IoLogoLinkedin/>
</span> 
        </div>

        <div class="flex mt-[15rem] divide-x-4 divide-[red]">
          
        <span class="mr-[20px] font-extrabold">tech stack</span>
        <span class="flex gap-[1.5rem] text-[1.8rem]">
        <span class=" ml-[2rem]"><BsGithub/></span> 
        <span class=" text-blue-600"><FaReact/></span> 
        <span class=" text-blue-600"> <SiTailwindcss/></span> 
        <span class=" text-green-600"><FaNodeJs/></span> 
        <span class=" text-[yellow]"><SiJavascript/></span> 
        <span class=" text-[red]"><AiFillHtml5/></span> 
        <span class=" text-[blue]"><IoLogoCss3/></span> 
        <span class=" text-black-600"> <SiDjango/></span> 
        <span class=" text-green-600"><FaPython/></span> 
        </span>


        </div>
      </div>
      
      <div class="">
       <img class="overflow-hidden w-[80%] 
       bg-[url('./pp1.jpeg')]  
    bg-no-repeat bg-cover bg-center rounded-full" 
       src="https://i.pinimg.com/originals/2a/64/3f/2a643f4297a564369facc3fa70efff2f.gif" alt="" srcset="" />
      </div>
   </div>
  )}



export default Hero;
