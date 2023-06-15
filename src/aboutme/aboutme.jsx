import React from 'react';
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa"


const Aboutme = () => {
  return (
    
    <div class ="flex justify-center gap-[4rem] p-[10rem] font-sans">
      <div  class="w-[45%] ">        
        <img class="rounded-lg" src="https://rare-gallery.com/thumbs/5365780-work-computer-phone-code-book-plan-keys-table-lens-topdown-pen-paper-desk-office-floor-developer-dev-len-laptop-wood-creative-commons-images.jpg" alt="" srcset="" />
</div>
      <div class="flex-1 pr-[3rem] bg-[#F9F5F6] pl-[25px] pt-2 pb-4 rounded-lg" >
        <p><FaQuoteLeft/> <span className="text-[red] text-[2rem]">Hi am Bethwel,</span><br/> a passionate FULL stack developer with a strong foundation in JavaScript and experience in building web applications. I specialize in creating responsive and interactive user interfaces using React.js and integrating them with backend APIs built with Node.js and Express.js.


With a keen eye for detail and a commitment to writing clean, maintainable code, I strive to create high-quality software that not only meets the client's requirements but also adheres to industry best practices. I am constantly seeking opportunities to learn and grow, as I believe that continuous improvement is key to staying ahead in the fast-paced world of web development.

I am a firm believer in the importance of teamwork and effective communication. I enjoy collaborating with cross-functional teams, including designers, product managers, and fellow developers, to bring ideas to life and deliver successful projects.<FaQuoteRight/></p>
      </div>
    </div>
  );
}

export default Aboutme;
