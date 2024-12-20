import Navbar from "@/components/navbar";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";

const Layout = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const bodyFrame = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (bodyFrame.current.scrollTop > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.getElementById("layout-body").addEventListener("scroll", handleScroll);
    return () => {
      document.getElementById("layout-body").removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-dvh w-dvw overflow-auto font-roboto" ref={bodyFrame} id="layout-body">
        <Navbar scrolling={scrolling} />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
