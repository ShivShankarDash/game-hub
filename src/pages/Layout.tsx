import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar
        onSearch={function (searchText: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Outlet />
    </>
  );
};

export default Layout;
