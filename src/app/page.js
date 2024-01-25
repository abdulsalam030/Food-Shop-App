import Hero from "@/components/layout/Hero";
import Menu from "@/components/layout/Menu";
import Navbar from "@/components/layout/Navbar";
import SectionHeaders from "@/components/layout/SectionHeaders";
export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="max-w-md mx-auto mt-4 text-gray-500 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders subHeader={"Feel Free"} mainHeader={"To Contact Us"} />
        <div className="mt-8">
          <a className="text-4xl underline text-gray" href="tel:080333999333">
            09034507211
          </a>
        </div>
      </section>
    </>
  );
}
