import MenuItems from "../menu/MenuItems";
import SectionHeaders from "./SectionHeaders";

export default function Menu() {
  return (
    <section>
      <div className="text-center mt-10">
        <SectionHeaders subHeader={"CheckOut"} mainHeader={"Menu"} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
}
