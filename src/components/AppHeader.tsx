import NavItem from "./NavItem";

function AppHeader(): JSX.Element {
  return (
    <header>
      <h2>twitter</h2>
      <nav>
        <NavItem label={"updates"} divider={"|"} />
        <NavItem label={"archive"} divider={"|"} />
        <NavItem label={"preferences"} divider={"|"} />
        <NavItem label={"help"} divider={"|"} />
        <NavItem label={"sign-out"} divider={" "} />
      </nav>
    </header>
  );
}

export default AppHeader;
