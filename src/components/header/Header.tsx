import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <Box className={styles.root} sx={{ flexGrow: 1 }}>
      <AppBar className={styles.app_bar} position="static">
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux Toolkit Todo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
