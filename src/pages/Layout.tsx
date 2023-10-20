import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const Layout = () => (
  <>
    <NavBar
      onSearch={function (searchText: string): void {
        throw new Error("Function not implemented.");
      }}
    />
    <Box padding={5}>
      <Outlet />
    </Box>
  </>
);

export default Layout;
