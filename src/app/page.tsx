import Image from "next/image";
import CardDemo from "./card";

export default function Home() {
  return (
   <div>
    <h1 className="text-center text-3xl pt-6">Shadcn UI Card Component</h1>
    <div className="w-screen h-screen flex justify-center items-center">
    <CardDemo />
    </div>
   </div>
  );
}