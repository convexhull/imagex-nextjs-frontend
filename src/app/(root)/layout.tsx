// Components
import MainNavbar from "@/components/Navbar/MainNavbar/MainNavbar";

type LayoutProps = {
  children: Readonly<React.ReactNode>;
  viewModal: Readonly<React.ReactNode>;
};

const Layout = ({ children, viewModal }: LayoutProps) => {
  return (
    <>
      <MainNavbar />
      {children}
      {viewModal}
    </>
  );
};

export default Layout;
