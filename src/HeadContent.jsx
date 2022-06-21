import title_image from "./Images/title_image.png";
import useGenerateRandomColor from "./useGenerateRandomColor";
import { useEffect } from "react";

const HeadContent = () => {
  const { color, generateColor } = useGenerateRandomColor();

  useEffect(generateColor, []);
  return (
    <div className="center">
      <img src={title_image} className="headerImage" alt="" />
      <h1 style={{ color: "#" + color }}>Der Koalabär</h1>
    </div>
  );
};

export default HeadContent;
