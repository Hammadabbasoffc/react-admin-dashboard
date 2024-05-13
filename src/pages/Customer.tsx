import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../compoenets/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../compoenets/TableHOC";
interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr:DataType[] =[];


const Customer = () => {

  const [data] = useState<DataType[]>(arr)

  const table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Customers", true),
    []
  );

  return (
    <div className="adminContainer">
    <AdminSidebar/>
      
      <main>{table}</main>
      </div>
  )
}

export default Customer