import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


const CardDemo = () => {
  return (
    <div className='w-screen h-screen flex justify-center  items-center '>
        <Card className='border-rounded bg-black text-white hover:bg-emerald-900 hover:shadow-lg'>
  <CardHeader>
    <CardTitle>14th-Gen Processors</CardTitle>
    <CardDescription>By Intel</CardDescription>
  </CardHeader>
  <CardContent>
    <p>The latest Intel Core i7 CPU, featuring up to 12 cores and 5.0 GHz boost speeds, offers top-tier performance for gaming, content creation, and AI tasks. With support for PCIe 5.0, DDR5 memory, and advanced multi-threading, it's a powerhouse for demanding workloads.</p>
  </CardContent>
  <CardFooter >
    <Link href="https://www.intel.com/content/www/us/en/products/docs/processors/core/core-14th-gen-desktop-brief.html"  className='text-violet-700 hover:text-blue-700'>learn More</Link>
  </CardFooter>
</Card>


    </div>
  )
}

export default CardDemo
