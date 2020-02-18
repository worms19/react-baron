import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "../MaterialUi/Header.js";
import Button from "../MaterialUi/Button.js";
import styles from "../MaterialUi/navbarsStyle.js";
import {Link, NavLink} from "react-router-dom";
import './Header2.css'
import AuthContext from "../../context/auth-context";

const useStyles = makeStyles(styles);

export default function SectionNavbars2() {
    const [mobileOpen2, setMobileOpen2] = React.useState(false);
    const handleDrawerToggle2 = () => {
        setMobileOpen2(!mobileOpen2);
    };
    const classes = useStyles();
  return (
      <div className={classes.section}>
        <div id="navbar" className={classes.navbar}>
          <div
              className={classes.navigation}
          >
            <Header
                brand=""
                color="transparent"
                prout={mobileOpen2}
                rightLinks={
                    <AuthContext.Consumer>
                        { (context) => (
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                          color="transparent"
                          className={
                            classes.navLink + " " + classes.socialIconsButton
                          }
                      >
                          <NavLink onClick={handleDrawerToggle2} to="/eventpage">Events</NavLink>
                      </Button>
                    </ListItem>
                      <ListItem className={classes.listItem}>
                      <Button
                          color="transparent"
                          className={
                            classes.navLink + " " + classes.socialIconsButton
                          }
                      >
                              <NavLink onClick={handleDrawerToggle2} to="/contactPage">Bookings</NavLink>
                      </Button>
                    </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }

                          >
                              <NavLink onClick={handleDrawerToggle2} to="/youtubePage">Youtube</NavLink>

                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }
                              onClick={context.logout}
                          >
                              Logout


                          </Button>
                      </ListItem>

                  </List>
                        )}
                    </AuthContext.Consumer>
                }
            />
          </div>
        </div>
      </div>
  );
}
