import React from "react";
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="h-screen bg-black text-white text-center flex flex-col items-center justify-center space-y-5 border-b border-white">
      <p className="text-9xl md:text-9xl font-bold">500</p>
      <p className="text-3xl md:text-6xl font-bold">Something went wrong</p>
      <p className="text-lg text-gray-400">Please try again</p>
      <Link href="/"><button className="bg-black border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:bg-white hover:border">Go Back</button></Link>
    </div>
  );
}
