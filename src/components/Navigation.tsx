import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/vision-mission", label: "Vision & Mission" },
    { path: "/contact", label: "Contact Us" },
    { path: "/albums", label: "Albums" },
    { path: "/admission", label: "Admission" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-32  flex items-center justify-center">
              <img src="/logo.png" alt="" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text text-transparent">
              euroWiskids
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${isActive(item.path)
                  ? "bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text "
                  : "text-foreground hover:bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text "
                  }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-bright to-pink-deep rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive(item.path)
                    ? "bg-secondary bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text "
                    : "text-foreground hover:bg-secondary hover:bg-gradient-to-r from-pink-bright to-pink-deep bg-clip-text "
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;