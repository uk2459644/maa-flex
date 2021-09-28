import React from "react";

export default function HeroComponent(){

    return (
        
<div className="relative  h-screen w-full flex items-center justify-start text-left bg-cover bg-center" 
style={{
    backgroundImage:`url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)`
   
}}>
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

  <main className="px-10 lg:px-24 z-10">
    <div className="text-left">
      <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
        Enter Your
        <span className="text-indigo-600 animate-pulse">Headline</span>
      </h2>
      <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
        Anim aute id magna aliqua ad ad non deserunt sunt.
         Qui irure qui lorem cupidatat commodo.</p>
      <div className="mt-5 sm:mt-8 sm:flex justify-start">
        <div className="rounded-md shadow">
          <a href="#" className="w-full animate-bounce flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"> Get started </a>
        </div>
       
      </div>
    </div>
  </main>
</div>

    )
}