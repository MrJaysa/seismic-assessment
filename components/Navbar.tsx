import Brand from "@/components/common/Brand";
import Button from "@/components/common/Button";
import { NavLinks } from "@/utils/iterables";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 sticky top-0 bg-background border-b border-b-white select-none z-50">
      <Brand type="top" />

      <div className="flex items-center">
        {NavLinks.map((nav) => (
          <a
            href={nav.link}
            key={nav.title}
            className="p-3  font-normal text-grey-950"
          >
            {nav.title}
          </a>
        ))}
      </div>

      <Button text="Get Started" />
    </nav>
  );
}
