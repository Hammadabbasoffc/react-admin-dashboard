import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../compoenets/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import userImage from "../assets/images/userImage.jpg";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../compoenets/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../compoenets/DashboardTable";

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
            <BarChart data_1={[200,444,343,556,778,455,990]}
            data_2={[300,144,433,655,237,755,190]}
            title_1="Revnue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53, 162, 235, 0.8)"
            />
          </div>
          <div className="dashboar-categories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((item) => (
                <CategoryItem
                key={item.heading}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value * 4}, ${item.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chat">
            <h2>Gender Ratio</h2>
            <DoughnutChart labels={["Female", "Male"]} 
            data={[12, 19]}
            backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
            cutout={90}
            />
            <p><BiMaleFemale/></p>
          </div>
          <DashboardTable data={data.transaction} />
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
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      ></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
