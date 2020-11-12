import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { Home as HomeIcon } from "@material-ui/icons";
import React from "react";
import { withRouter } from "react-router-dom";
import PeopleIcon from "@material-ui/icons/People";

const SideBar = ({ opened, toggleDrawer, history }) => {
  return (
    <Drawer anchor="left" open={opened} onClose={toggleDrawer}>
      <List>
        <ListItem>
          <Box>
            <Typography variant="h4">Jingrwai</Typography>
          </Box>
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemIcon
            button
            onClick={() => {
              toggleDrawer();
              history.push("/home");
            }}
          >
            <HomeIcon />
            <Typography> Home</Typography>
          </ListItemIcon>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon
            button
            onClick={() => {
              history.push("/users/list");
            }}
          >
            <PeopleIcon />
            <Typography> Users List</Typography>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export const SideBarWithRouter = withRouter(SideBar);
