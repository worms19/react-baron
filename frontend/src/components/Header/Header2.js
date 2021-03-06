import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "../MaterialUi/Header.js";
import Button from "../MaterialUi/Button.js";
import styles from "../MaterialUi/navbarsStyle.js";
import {Link} from "react-router-dom";
import './Header2.css'

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
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
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                          color="transparent"
                          className={
                            classes.navLink + " " + classes.socialIconsButton 
                          }
                      >
                            <Link onClick={handleDrawerToggle2} to="/react-baron"><span className="p">HOME</span></Link>
                      </Button>

                    </ListItem>
                      <ListItem className={classes.listItem}>
                      <Button
                          color="transparent"
                          className={
                            classes.navLink + " " + classes.socialIconsButton
                          }
                      >
                          <div className="prout">
                            <Link onClick={handleDrawerToggle2}
                                  to="/Mp3">VIDEOS</Link>
                          </div>
                      </Button>
                    </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }

                          >
                              <Link
                                  onClick={handleDrawerToggle2}
                                  className={classes.socialIconsButton}
                                  to="/GalleryPhoto"
                              >
                                  PHOTOS
                              </Link>
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }

                          >
                              <Link
                                  onClick={handleDrawerToggle2}
                                  to="/Events">TOUR</Link>
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }

                          >
                              <Link
                                  onClick={handleDrawerToggle2}
                                  to="/Contact">CONTACT</Link>
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }

                          >
                              <a onClick={handleDrawerToggle2} target="_blank" rel="noopener noreferrer" href="https://baroncrane.bigcartel.com/" >SHOP</a>                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }
                          >
                              <a onClick={handleDrawerToggle2} target="_blank" rel="noopener noreferrer" href="https://baroncrane.bandcamp.com/" >MUSIC</a>
                          </Button>
                      </ListItem>
                  </List>
                }
            />
          </div>
        </div>
      </div>
  );
}
