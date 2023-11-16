import { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <Toaster />
    </>
  );
};
export default RootLayout;
