import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../compoenets/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/images/userImage.jpg";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImage} alt="User" />
        </div>
        <section className="widgetcontainer">
          <WidgetItem
            percent={23}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgb(255 195 0)"
          />
          <WidgetItem
            percent={30}
            value={23000}
            amount={true}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revneue & Transaction</h2>
          </div>
          <div className="dashboar-categories">
            <h2>Inventory</h2>
            <div>
              <CategoryItem heading="Laptops" value={70} color="hsl(169, 100%,50%)" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> + {percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
      }}
    >
      <span style={{ color: `${color}` }}>{percent}%</span>
    </div>
  </article>
);

interface CategoryItemsProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemsProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}%`
      }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
