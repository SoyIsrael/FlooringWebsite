import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="lg:hidden px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Menu Button */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="p-0 max-w-none w-screen h-screen flex flex-col items-center gap-8 pt-20"
          >
            {/* Close Button */}
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <DialogDescription className="sr-only">
              Mobile navigation menu
            </DialogDescription>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="h-10 w-10 text-black" />
            </button>

            {/* Navigation Items */}
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
}
