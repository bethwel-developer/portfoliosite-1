import React from 'react';
import {FaFacebook,FaTwitterSquare,FaLinkedin} from "react-icons/fa"
import {AiFillGithub,AiFillInstagram} from "react-icons/ai"




const Contact = () => {
  return (
    <div class="flex justify-center mt-32">
      <div>
<h1 class="mb-2 text-center font-extrabold">CONTACTS:</h1>
<h1 class="mb-2 text-center font-extrabold">Email:  bethwelnjenga83@gmail.com</h1>
<h1 class="mb-10 text-center font-extrabold">contact:  0740233305 / 0748749361</h1>

     <div class ="flex mb-[1rem] gap-10 text-[1.5rem]">
     <a  class="hover:text-[red]  mr-10" href="https://github.com/bethwel-developer" ><AiFillGithub/></a> 
     <a class="hover:text-[red] mr-10" href='/home'><FaFacebook/></a> 
          <a class="hover:text-[red]  mr-10" href='/home'><AiFillInstagram/></a>
          <a class="hover:text-[red]  mr-10" href='/home'><FaTwitterSquare/></a>
          <a class="hover:text-[red]  mr-10" href='/home'><FaLinkedin/></a>
     </div>
  </div>
  </div>
  );
}

export default Contact;
