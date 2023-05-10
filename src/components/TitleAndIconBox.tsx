
import { IconType } from "react-icons";
import "./TitleAndIconBox.css"

type BoxProps = {
    title: string;
    icon: IconType;
  };
  
  const TitleAndIconBox: React.FC<BoxProps> = ({ title, icon: Icon }) => {
    return (
      <div className="box">
          <h2>{title}</h2>
          <Icon size={24} />
      </div>
    );
  };
  
  export default TitleAndIconBox;