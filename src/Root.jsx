import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
const Root = () => {
  return (
    <main className="container mx-auto border-green-300 border-2 min-h-screen mb-4">
      <h2 className="bg-green-300 text-center text-2xl font-bold py-4 ">
        User Management System
      </h2>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
