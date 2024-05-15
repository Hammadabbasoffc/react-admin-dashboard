import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./compoenets/Loader";


const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customer = lazy(() => import("./pages/Customer"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProducts = lazy(() => import("./pages/management/NewProducts"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(()=>import("./pages/charts/BarCharts"))
const PieCharts = lazy(()=>import("./pages/charts/PieCharts"))
const LineChats = lazy(()=>import("./pages/charts/LineChats"))
const Stopwatch = lazy(()=>import("./pages/apps/Stopwatch"))
const Toss = lazy(()=>import("./pages/apps/Toss"))
const Coupon = lazy(()=>import("./pages/apps/Coupon"))



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transaction />} />


          <Route path="/admin/chart/bar" element={<BarCharts/>} />
          <Route path="/admin/chart/pie" element={<PieCharts/>} />
          <Route path="/admin/chart/line" element={<LineChats/>} />

          {/* Apps */}

          <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
          <Route path="/admin/app/toss" element={<Toss/>}/> 
          <Route path="/admin/app/coupon" element={<Coupon/>}/> 

          {/* Management */}
          <Route path="/admin/product/new" element={<NewProducts/>} />
          <Route path="/admin/product/:id" element={<ProductManagement/>} />
          <Route path="/admin/transaction/:id" element={<TransactionManagement/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
