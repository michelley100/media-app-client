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
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const SideBar = ({ opened, toggleDrawer, history }) => {
  return (
    <Drawer anchor="left" open={opened} onClose={toggleDrawer}>
      <List>
        <ListItem>
          <Box
            button
            onClick={() => {
              toggleDrawer();
              history.push("/home");
            }}
          >
            <Button>
              <Typography
                variant="h4"
                button
                key="text"
                onClick={() => {
                  history.push("/home");
                }}
              >
                Jingrwai
              </Typography>
            </Button>
          </Box>
        </ListItem>

        <Divider />
        <ListItem button key="text">
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

        <ListItem button key="text">
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
        <ListItem button key="text">
          <ListItemIcon
            button
            onClick={() => {
              history.push("/song/add");
            }}
          >
            <PlaylistAddIcon />
            <Typography>Add Songs</Typography>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export const SideBarWithRouter = withRouter(SideBar);
