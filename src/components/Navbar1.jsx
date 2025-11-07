import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import cblLogo from "../assets/cbl-logo.png";

export const Navbar1 = (props) => {
  const { navLinks } = {
    ...Navbar1Defaults,
    ...props,
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      // Show navbar when mouse is near the top (within 100px)
      if (e.clientY < 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      className="fixed top-0 z-[999] flex h-[72px] w-full items-center bg-cbl-light px-page"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -72 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] h-full items-center justify-between">
        {/* Logo */}
        <Link to="/" className="block h-[73px] w-[145px]">
          <img src={cblLogo} alt="CBL Colours Logo" className="w-full h-full object-cover object-center" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((navLink, index) => (
            <Link
              key={index}
              to={navLink.url}
              className="font-neue-display text-body-light text-cbl-dark hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {navLink.title}
            </Link>
          ))}

          {/* Contact Button */}
          <button className="bg-gradient-cbl rounded-full-btn px-6 py-3 font-neue-display text-body-light text-cbl-light hover:opacity-90 transition-opacity ml-4">
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
                <Link
                  key={index}
                  to={navLink.url}
                  className="font-neue-display text-body-light text-cbl-dark hover:opacity-70 transition-opacity py-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {navLink.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
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
