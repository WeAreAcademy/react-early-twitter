interface NavItemProps {
  label: string;
  divider: string;
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <>
      <a href="#">{props.label}</a>
      <span> | </span>
    </>
  );
}

export default NavItem;
