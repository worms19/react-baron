import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { type: "internal", to: "/", label: "HOME" },
  { type: "internal", to: "/Mp3", label: "VIDEOS" },
  { type: "internal", to: "/GalleryPhoto", label: "PHOTOS" },
  { type: "internal", to: "/Events", label: "TOUR" },
  { type: "internal", to: "/Contact", label: "CONTACT" },
  {
    type: "external",
    href: "https://baroncrane.bigcartel.com/",
    label: "SHOP",
  },
  {
    type: "external",
    href: "https://baroncrane.bandcamp.com/",
    label: "MUSIC",
  },
];

export default function SectionNavbars() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-sm font-semibold tracking-wide">
          Baron Crane
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((item) => {
            if (item.type === "external") {
              return (
                <Button key={item.href} asChild variant="ghost" size="sm">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </Button>
              );
            }
            return (
              <Button key={item.to} asChild variant="ghost" size="sm">
                <Link to={item.to}>{item.label}</Link>
              </Button>
            );
          })}
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
                {links.map((item) => {
                  if (item.type === "external") {
                    return (
                      <Button
                        key={item.href}
                        asChild
                        variant="ghost"
                        className="justify-start"
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </Button>
                    );
                  }
                  return (
                    <Button
                      key={item.to}
                      asChild
                      variant="ghost"
                      className="justify-start"
                    >
                      <Link to={item.to}>{item.label}</Link>
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
