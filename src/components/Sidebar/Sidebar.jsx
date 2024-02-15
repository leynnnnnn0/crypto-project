import "./Sidebar.css";
import { Link } from "react-router-dom";
import { sidebarData, settingsData } from "../../Data/sidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Encrypto</h1>
        <hr />
      </div>
      <div className="options">
        {sidebarData.map((item) => {
          return (
            <Link to={item.to} key={item.name}>
              <span className="sidebar-icon">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="settings">
        {settingsData.map((item) => {
          return (
            <Link to={item.to} key={item.name}>
              <span className="sidebar-icon">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
