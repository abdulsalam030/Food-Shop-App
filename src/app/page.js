import Link from "next/link";

export default function Home() {
  return (
  <>
  <header className="flex items-center justify-between">
    <Link className="text-primary text-2xl font-semibold" href={""}>Food Heaven</Link>
    <nav className="flex items-center gap-4 text-gray-400 font-semibold">
      <Link href={""}>Home</Link>
      <Link href={""}>Menu</Link>
      <Link href={""}>About</Link>
      <Link href={""}>Contact</Link>
      <Link href={""} className="bg-primary text-white px-8 py-2 rounded-full">Login</Link>
    </nav>
  </header>
  
  </>
  )
}
