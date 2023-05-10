import { Button } from "@mui/material";
import TitleAndIconBox from "../../components/TitleAndIconBox";
import { BOX_DATA } from "../../development/testdata";
import { FaBeer } from "react-icons/fa";

const Herosection = () => {
  return (
    <div className="hero__wrapper">
      {BOX_DATA.map((item) => (
        <TitleAndIconBox title={item.title} icon={FaBeer} />
      ))}
    </div>
  );
};

export default Herosection;
