import { Menu } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header(props) {
  const { rightLinks, leftLinks, brand, fixed, absolute, className } = props;

  return (
    <header
      className={cn(
        "z-40 w-full border-b bg-background/80 backdrop-blur",
        fixed ? "sticky top-0" : null,
        absolute ? "absolute left-0 top-0" : null,
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {brand ? (
            <Button variant="ghost" size="sm">
              {brand}
            </Button>
          ) : null}
          <div className="hidden md:block">{leftLinks}</div>
        </div>

        <div className="hidden md:block">{rightLinks}</div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <div className="flex flex-col gap-3 pt-8">
                {leftLinks}
                {rightLinks}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  color: PropTypes.any,
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.any,
  prout: PropTypes.any,
  className: PropTypes.string,
};
