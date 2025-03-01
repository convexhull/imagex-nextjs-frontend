// Components
import MainNavbar from "@/components/Navbar/MainNavbar/MainNavbar";

type LayoutProps = {
  children: Readonly<React.ReactNode>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MainNavbar />
      {children}
    </>
  );
};

export default Layout;
