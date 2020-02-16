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
                rightLinks={
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                      <Button
                          color="transparent"
                          className={
                            classes.navLink + " " + classes.socialIconsButton
                          }
                      >
                          <Link to="/react-baron">HOME</Link>
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
                            <Link to="/Mp3">VIDEOS</Link>
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
                              <Link to="/Events">TOUR</Link>
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }
                          >
                              <Link to="/Contact">CONTACT</Link>
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }
                          >
                              <a target="_blank" rel="noopener noreferrer" href="https://baroncrane.bigcartel.com/" >SHOP</a>                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              color="transparent"
                              className={
                                  classes.navLink + " " + classes.socialIconsButton
                              }
                          >
                              <a target="_blank" rel="noopener noreferrer" href="https://baroncrane.bandcamp.com/" >MUSIC</a>
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
