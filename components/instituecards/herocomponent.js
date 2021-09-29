import React from "react";
// import ParticlesBg from "particles-bg";
import TypewriterComponent from "typewriter-effect";

export default function HeroComponent({item}){

    return (
        
<div className="relative animate-ping-slow  h-screen w-full flex items-center justify-start text-left bg-cover bg-center" 
style={{
    backgroundImage:`url(${item.image})`,
    backgroundSize:'contain',
    backgroundRepeat:'no-repeat',
   
}}>
     
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>
  <main className="px-10 lg:px-24 z-10">
    <div className="text-left">
    <div class=" -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
       <TypewriterComponent
       
        options={{
          strings: [`${item.title}`],
          autoStart: true,
          loop: true,
        }}
       />
       {/* <span className="text-indigo-600 ">Headline</span> */}
       
        {/* <ParticlesBg type="cobweb" bg={true}/> */}
      </h2>
      <p className=" mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
      {item.description}</p>
      <div className="mt-5 sm:mt-8 sm:flex justify-start">
        <div className="rounded-md shadow">
          <a href="#" className="w-full  flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"> Get started </a>
        </div>
       
      </div>
    </div>
  </main>
</div>

    )
}