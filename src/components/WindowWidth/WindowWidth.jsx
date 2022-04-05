import { useEffect, useState } from "react";

const WindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  return <div>Window width is: {windowWidth}px</div>;
};

export default WindowWidth;
