import "./header.css";
import HeaderIcon from "../headerIcon/headerIcon";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="app-title" onClick={() => navigate("/")}>
        中山研カレンダー
      </div>
      <div className="page-title">{title}</div>
      <HeaderIcon />
    </div>
  );
};

export default Header;
