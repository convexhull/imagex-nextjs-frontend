import CategoryNavbar from "@/components/Navbar/CategoryNavbar/CategoryNavbar";
import { Platform } from "@/lib/types";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CategoryNavbar platform={Platform.UNSPLASH} />
      {children}
    </>
  );
};

export default Layout;
