import PropTypes from "prop-types";
import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RegularButton = React.forwardRef((props, ref) => {
  const {
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const variant = link ? "link" : simple ? "ghost" : "default";
  const mappedSize = justIcon
    ? "icon"
    : size === "lg"
      ? "lg"
      : size === "sm"
        ? "sm"
        : "default";

  return (
    <Button
      {...rest}
      ref={ref}
      disabled={disabled}
      variant={variant}
      size={mappedSize}
      className={cn(block ? "w-full" : null, className)}
    >
      {children}
    </Button>
  );
});

RegularButton.displayName = "RegularButton";

RegularButton.propTypes = {
  color: PropTypes.any,
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;
