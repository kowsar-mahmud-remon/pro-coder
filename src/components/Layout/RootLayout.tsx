import { Toaster } from "react-hot-toast";
import Navbar from "../Navbar/Navbar";

const RootLayout = ({ children }: any) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Toaster />
    </>
  );
};
export default RootLayout;
