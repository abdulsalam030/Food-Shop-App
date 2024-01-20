import Image from "next/image"
import Right from "../icons/Right"
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
        <div className="py-8">
            <h3 className="text-4xl font-semibold">Food is Life</h3>
            <p className="my-4 text-gray-500">Food loses about 30% of its flavour when tasted in the sky.</p>
            <div className="flex gap-4 text-sm">
                <button className="bg-primary uppercase text-white px-4 py-2 rounded-full flex items-center gap-2">
                    Order Now
                    <Right/>
                </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                    Learn More
                    <Right/>
                </button>
            </div>
        </div>


        <div className="relative">
            <Image src={'/Amala-removebg-preview.png'} layout={'fill'} objectFit={'contain'} alt={'amala'}/>
        </div>
    </section>
  )
}
