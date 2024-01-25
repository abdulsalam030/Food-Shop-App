
export default function MenuItems() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg hover:bg-white hover:shadow-2xl
    hover:shadow-black/25 transition-all">
        <div className="text-center">
        <img src="/Amala-removebg-preview.png" className="max-h-auto max-h-24 block mx-auto" alt="Food"/>
        </div>
    <h4 className="font-semibold text-xl my-3">Black Amala</h4>
    <p className="text-gray-500 text-sm">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    </p>
    <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to Cart $12
    </button>
    </div>
  )
}
