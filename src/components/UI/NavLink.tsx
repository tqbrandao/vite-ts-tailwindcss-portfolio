interface NavLinkProps {
  text: string;
}

const NavLink = ({ text }: NavLinkProps) => {
  return (
    <li>
      <a className="inline-block text-xl font-semibold no-underline uppercase transition-all duration-300 cursor-pointer text-blue-950 hover:text-blue-700 active:text-blue-700 ">
        {text}
      </a>
    </li>
  );
};

export default NavLink;
