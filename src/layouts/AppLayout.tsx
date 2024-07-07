interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  return <main>{children}</main>;
}

function Header({ children }: AppLayoutProps) {
  return <header>{children}</header>;
}

function Footer({ children }: AppLayoutProps) {
  return <footer>{children}</footer>;
}

AppLayout.Header = Header;
AppLayout.Footer = Footer;

export default AppLayout;
