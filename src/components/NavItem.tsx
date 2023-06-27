interface NavItemProps {
  label: string;
}

function NavItem({ label }: NavItemProps): JSX.Element {
  return (
    <>
      {"~"}
      <a href="#">{label.toUpperCase()}</a>
      <span>{" -> "}</span>
    </>
  );
}

export default NavItem;
