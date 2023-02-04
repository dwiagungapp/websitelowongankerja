import React from "react";
import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <>
        <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
      <span className="block text-black">
      Terdapat 1000++ Lowongan pekerjaan yang tersedia
      </span>
      <span className="block text-gray-200">
      Ayo bergabung dan buat CV-mu sekarang.
      </span>
    </h2>
    <div className="lg:mt-0 lg:flex-shrink-0">
      <div className="mt-12 inline-flex rounded-md shadow">
        <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        <Link to="/lowongan">Mulai Sekarang</Link>
        </button>
      </div>
    </div>
  </div>
</div>

       {/* <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/people")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Terdapat 1000++ Lowongan pekerjaan yang tersedia</h1>
      <p className="mb-5">Ayo bergabung dan buat CV-mu sekarang.</p>
      <button className="btn btn-primary"><Link to="/login">Mulai Sekarang</Link></button>
    </div>
  </div>
</div> */}
        </>
    )
}

export default Hero