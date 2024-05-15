import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const dashboardTags = [
    {
      link: "/admin/dashboard",
      icon: <RiDashboardFill />,
      text: "Dashboard",
    },
    {
      link: "/admin/product",
      icon: <RiShoppingBag3Fill />,
      text: "Products",
    },
    {
      link: "/admin/customer",
      icon: <IoIosPeople />,
      text: "Customer",
    },
    {
      link: "/admin/transaction",
      icon: <AiFillFileText />,
      text: "Transaction",
    },
  ];

  const chartTags = [
    {
      link: "/admin/chart/bar",
      icon: <FaChartBar />,
      text: "Bar",
    },
    {
      link: "/admin/chart/pie",
      icon: <FaChartPie />,
      text: "Pie",
    },
    {
      link: "/admin/chart/line",
      icon: <FaChartLine />,
      text: "Line",
    },
  ];

  const appTags = [
    {
      link: "/admin/app/stopwatch",
      icon: <FaStopwatch />,
      text: "Stopwatch",
    },
    {
      link: "/admin/app/coupon",
      icon: <RiCoupon3Fill />,
      text: "Coupon",
    },
    {
      link: "/admin/app/toss",
      icon: <FaGamepad />,
      text: "Toss",
    },
  ];

  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>admindashboard</h5>
        <ul>
          {dashboardTags.map((item) => (
            <li
              key={item.link}
              style={{
                backgroundColor: location.pathname.includes(item.link)
                  ? "rgba(0, 115, 255, 0.1)"
                  : "white",
              }}
            >
              <Link
                to={item.link}
                style={{
                  color: location.pathname.includes(item.link)
                    ? "rgba(0, 115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5>Charts</h5>
        <ul>
          {chartTags.map((item) => (
            <li
            key={item.link}
              style={{
                backgroundColor: location.pathname.includes(item.link)
                  ? "rgba(0, 115, 255, 0.1)"
                  : "white",
              }}
            >
              <Link
                to={item.link}
                style={{
                  color: location.pathname.includes(item.link)
                    ? "rgba(0, 115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5>Apps</h5>
        <ul>
          {appTags.map((item) => (
            <li
            key={item.link}
              style={{
                backgroundColor: location.pathname.includes(item.link)
                  ? "rgba(0, 115, 255, 0.1)"
                  : "white",
              }}
            >
              <Link
                to={item.link}
                style={{
                  color: location.pathname.includes(item.link)
                    ? "rgba(0, 115, 255)"
                    : "black",
                }}
              >
                {item.icon}
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};


