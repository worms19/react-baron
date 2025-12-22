/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer2(props) {
  const { noBack } = props;

  return (
    <footer className={noBack ? "relative z-10" : "relative z-10 bg-black"}>
      <div
        className={
          noBack
            ? "mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
            : "mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
        }
      >
        <div className="flex items-center gap-4">
          <a
            className="fb-ic"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/baroncrane/"
          >
            <FontAwesomeIcon icon={faFacebookF} size={"2x"} color={"white"} />
          </a>
          <a
            className="ins-ic"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/baron.crane/"
          >
            <FontAwesomeIcon icon={faInstagram} size={"2x"} color={"white"} />
          </a>
          <a
            className="you-ic"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/baroncrane"
          >
            <FontAwesomeIcon icon={faYoutube} size={"2x"} color={"white"} />
          </a>
        </div>

        {props.isOn && (
          <div className="text-xs text-white">
            &copy; {new Date().getFullYear()} Copyright{" "}
            <a className="underline" href="https:/github.com/worms19">
              Worms19
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

Footer2.propTypes = {
  whiteFont: PropTypes.bool,
  isOn: PropTypes.bool,
};
