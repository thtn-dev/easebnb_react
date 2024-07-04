import { Box } from "@mui/material";
import { ReactNode } from "react";

function Content({children}: {children: ReactNode}) {
  return ( <Box component={"main"}>
    {children}
  </Box> );
}

export default Content;