import React from "react";
import { NavLink } from "react-router-dom";
import "./Header2.css";

import AuthContext from "../../context/auth-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { to: "/eventpage", label: "Events" },
  { to: "/contactPage", label: "Bookings" },
  { to: "/youtubePage", label: "Youtube" },
];

export default function SectionNavbars2() {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <NavLink
              to="/eventpage"
              className="text-sm font-semibold tracking-wide"
            >
              Admin
            </NavLink>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((item) => (
                <Button key={item.to} asChild variant="ghost" size="sm">
                  <NavLink to={item.to}>{item.label}</NavLink>
                </Button>
              ))}
              <Button variant="ghost" size="sm" onClick={context.logout}>
                Logout
              </Button>
            </nav>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-4">
                  <div className="flex flex-col gap-2 pt-8">
                    {links.map((item) => (
                      <Button
                        key={item.to}
                        asChild
                        variant="ghost"
                        className="justify-start"
                      >
                        <NavLink to={item.to}>{item.label}</NavLink>
                      </Button>
                    ))}
                    <Button
                      variant="ghost"
                      className="justify-start"
                      onClick={context.logout}
                    >
                      Logout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      )}
    </AuthContext.Consumer>
  );
}
