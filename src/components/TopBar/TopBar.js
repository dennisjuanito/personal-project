import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import PostModal from "./Modal/PostModal";

class TopBar extends React.Component {
  state = {
    somethingThatMakeOpen: null
  };

  handleMenu = event => {
    this.setState({ somethingThatMakeOpen: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ somethingThatMakeOpen: null });
  };

  render() {
    const { somethingThatMakeOpen } = this.state;
    const open = Boolean(somethingThatMakeOpen);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            {
              <div>

                <PostModal />
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={somethingThatMakeOpen}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default TopBar;
