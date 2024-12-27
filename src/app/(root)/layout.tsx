type LayoutProps = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
