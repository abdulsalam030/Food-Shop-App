
export default function Menu() {
  return (
    <section>
    <div className="text-center mt-10">
        <h3 className="uppercase text-gray-500 font-semibold leading-4">
            Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Our menu</h2>
    </div>

    <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded-lg">
            <img src="/Amala-removebg-preview.png" alt="Food"/>
            <h4 className="font-semibold text-xl my-3">Black Amala</h4>
            <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-6 py-2">
                Add to Cart $12
            </button>
        </div>
        
    </div>
    </section>
  )
}
