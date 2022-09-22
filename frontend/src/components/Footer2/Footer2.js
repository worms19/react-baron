/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from "../MaterialUi/footerStyle.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";

const useStyles = makeStyles(styles);

export default function Footer2(props) {

  const classes = useStyles();
  const { whiteFont, noBack } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
    [classes.noBack]: noBack,
    [classes.back]: !noBack
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const contClasses = classNames({
    [classes.container]: true,
    [classes.noBack2]: noBack
  });
  return (
    <footer className={footerClasses}>
      <div className={contClasses}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a className="fb-ic" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/baroncrane/">
                <FontAwesomeIcon icon={faFacebookF} size={'2x'} color={"white"}/>
              </a>
            </ListItem>
            <ListItem className={`${classes.inlineBlock} ${classes.margin15}`}>
              <a className="ins-ic" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/baron.crane/">
                <FontAwesomeIcon icon={faInstagram} size={'2x'} color={"white"}/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className="you-ic" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/baroncrane">
                <FontAwesomeIcon icon={faYoutube} size={'2x'} color={"white"}/>
              </a>
            </ListItem>
          </List>
        </div>
        {
          props.isOn &&
        <div className={`white ${classes.right}`}>
          &copy; {1900 + new Date().getYear()} Copyright&nbsp;
          <a href="https:/github.com/worms19"> Worms19</a>
        </div>
        }
      </div>
    </footer>
  );
}

Footer2.propTypes = {
  whiteFont: PropTypes.bool,
  isOn: PropTypes.bool
};
