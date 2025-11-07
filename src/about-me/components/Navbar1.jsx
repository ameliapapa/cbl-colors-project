import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import cblLogo from "../../assets/cbl-logo.png";

export const Navbar1 = (props) => {
  const { navLinks } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] flex h-[72px] w-full items-center bg-cbl-light px-page">
      <div className="mx-auto flex w-full max-w-[1440px] h-full items-center justify-between">
        {/* Logo */}
        <a href="#" className="block h-[73px] w-[145px]">
          <img src={cblLogo} alt="CBL Colours Logo" className="w-full h-full object-cover object-center" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((navLink, index) => (
            <a
              key={index}
              href={navLink.url}
              className="font-helvetica text-body-light text-cbl-dark hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {navLink.title}
            </a>
          ))}

          {/* Contact Button */}
          <button className="bg-gradient-cbl rounded-full-btn px-6 py-3 font-helvetica text-body-light text-cbl-light hover:opacity-90 transition-opacity ml-4">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-6 h-6"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-full h-0.5 bg-cbl-dark"
            animate={isMobileMenuOpen ? { translateY: 8, rotate: 45 } : { translateY: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-full h-0.5 bg-cbl-dark"
            animate={isMobileMenuOpen ? { width: 0 } : { width: "100%" }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-full h-0.5 bg-cbl-dark"
            animate={isMobileMenuOpen ? { translateY: -8, rotate: -45 } : { translateY: 0, rotate: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[72px] left-0 right-0 bg-cbl-light border-t border-cbl-dark/10 lg:hidden"
          >
            <div className="flex flex-col px-page py-4">
              {navLinks.map((navLink, index) => (
                <a
                  key={index}
                  href={navLink.url}
                  className="font-helvetica text-body-light text-cbl-dark hover:opacity-70 transition-opacity py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navLink.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Navbar1Defaults = {
  navLinks: [
    { title: "Home", url: "/" },
    { title: "Works", url: "/works" },
    { title: "About", url: "/about-me" },
    { title: "Blog", url: "/blog" },
  ],
};
