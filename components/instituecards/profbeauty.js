import React from "react";

export default function ProffBeauty() {
  return (
    <div>
      <div class="container px-6 py-10 mx-auto md:py-16">
        <div class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
          <div class="flex items-center justify-center w-full md:w-1/2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/django-adons.appspot.com/o/Beautifyporler%2FTop%20service%2FIMG-20210530-WA0003.jpg?alt=media&token=57f33a67-17a9-4093-8e46-00de69c71278"
              alt="car photo"
              class="w-full h-1/2 max-w-2xl rounded"
            />
          </div>
          <div class="w-full md:w-1/2">
            <div class="max-w-md mx-auto">
              <h1 class="text-2xl font-medium tracking-wide text-red-500 md:text-4xl">
                Verified Beauty Professionals
              </h1>
              <p class="mt-5 leading-7 text-gray-600">
                Being Beautiful Services brings beauty parlour home services
                like threading, facials, waxing, manicure pedicure, makeup,
                haircut, hairdo, hair spa, body spa and much more now at your
                doorstep. <br />
                Our vision statement is providing a world-class beauty therapy
                experience accessible to everyone and our mission is want to
                make your beauty therapy experience as healthier, unique and
                memorable as you are. Book your appointment from our Android
                Application and get all beauty services by beauty professionals
                at your home without any extra charges only at Being Beautiful.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <p class="mt-5 leading-7 text-gray-600">
            Don't Hesitate, Feel Free to Check Frequently Asked Questions For
            Being Beautiful Salon At Home Service In Patna.
          </p>
          <a
          href="/faq"
           class="mt-4 flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-red-600 rounded-full hover:bg-red-500 focus:outline-none focus:bg-red-500">
            Read More {'>>'} FAQ's
          </a>
        </div>
      </div>
    </div>
  );
}
