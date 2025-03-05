"use client";
import Link from "next/link";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home, User, HelpCircle, List, CheckCircle } from "lucide-react";

const Sidebar = () => {
  const [isVisible, setVisible] = useState(false);

  const items = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Profile", path: "/profile", icon: <User size={20} /> },
    {
      name: "HelpSupport",
      path: "/help-support",
      icon: <HelpCircle size={20} />,
    },
    {
      name: "AppliedJobList",
      path: "/applied-jobs",
      icon: <List size={20} />,
    },
    {
      name: "ApplyForJob",
      path: "/apply-for-jobs",
      icon: <CheckCircle size={20} />,
    },
  ];
  return (
    <div>
      <nav
        className={`d-flex flex-column bg-dark text-white vh-100 p-1 mb-3 ${
          isVisible ? "w-300" : "w-60"
        }`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="d-flex flex-row m-2">
          <div className="p-2">
            <img src="/image.jpeg" height="50px" width="50px" />
          </div>
          <div className="p-2">
            {isVisible && (
              <span>
                <h6>Hello</h6>
                <h4>Anna</h4>
              </span>
            )}
          </div>
        </div>

        {items.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="d-flex align-items-center text-white text-decoration-none py-2 px-3 rounded"
          >
            {item.icon}
            {isVisible && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Sidebar;
