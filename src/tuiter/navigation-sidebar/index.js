import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationSidebar.css";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];

  return (
    <div className="list-group navigation-sidebar">
      {links.map((link) => (
        <Link
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}
          key={link}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavigationSidebar;
