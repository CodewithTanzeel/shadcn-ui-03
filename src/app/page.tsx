import Image from "next/image";
import CardDemo from "./card";

export default function Home() {
  return (
    <div className="m-0 p-0">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl p-5 hover:text-gray-800">
        Shadcn UI Card Component
      </h1>
      <div className="w-full h-screen flex justify-center items-center p-4">
        <CardDemo />
      </div>
    </div>
  );
}
