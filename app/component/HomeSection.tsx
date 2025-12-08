// components/HomeSection.tsx
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto bg-[#f0f8ff] h-[700px] border-b flex flex-col md:flex-row items-center px-6 md:px-12 pt-10"
    >
      {/* Left side - Text */}
      <div className="md:w-1/2 flex flex-col justify-center space-y-6">
        <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          অ্যাপোলো <br />
          স্পেশালাইজড <br />
          হাসপাতাল মৌলভীবাজার
        </h1>
        <p className="text-lg md:text-2xl text-gray-800">
          আপনার সুস্থতা, আমাদের অঙ্গীকার! অ্যাপোলো হাসপাতাল – মৌলভীবাজারের
          বিশ্বস্ত স্বাস্থ্যসেবা। দক্ষ চিকিৎসক এবং যত্নশীল সেবা, সবসময় আপনার
          সুস্থতা ও সুস্বাস্থ্যের জন্য নিবেদিত।
        </p>
        <div className="flex justify-start space-x-4 mt-4 items-end">
          <a
            href="#services"
            className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-xs shadow-lg transition hover:bg-blue-700"
          >
            আমাদের সেবা সমূহ →
          </a>
        </div>
      </div>

      {/* Right side - Image with NICU overlay */}
      <div className="md:w-1/2 w-full mt-8 md:mt-0 relative h-64 md:h-80 rounded-xl flex justify-center items-center">
        <Image
          src="/nicu.webp"
          alt="অ্যাপোলো স্পেশালাইজড হাসপাতাল"
          fill
          className="rounded-xs object-cover md:object-contain"
        />

        {/* NICU text box */}
        <div className="absolute bottom-[-18] md:bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-blue-900 font-bold px-4 py-2 rounded shadow-lg text-xl md:text-2xl">
          NICU
        </div>
      </div>
    </section>
  );
}
