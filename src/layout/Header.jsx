import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Headers() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  sx={{background: '#DA1A33'}}>
        <Toolbar variant="dense">
          <Typography variant="h7" color="inherit" component="div">
            Movies
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
