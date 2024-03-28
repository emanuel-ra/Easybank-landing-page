import { useStore } from "@nanostores/react";
import { isOpen } from "@/store/mobileNavStore";
interface Props {
  data: string[];
}
function MobileNav(props: Props) {
  const $isOpen = useStore(isOpen);
  const { data } = props;

  return (
    <div
      className={`absolute w-full 
    ${$isOpen ? "flex" : "hidden"}
     justify-center 
    lg:hidden`}
    >
      <ul className="w-full shadow-lg flex flex-col justify-center items-center gap-y-4 p-3">
        {data.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
