import logoFooter from "../../assets/logo-footer.png";
import facebookIcon from "../../assets/facebook-icon-white.svg";
import instagramIcon from "../../assets/instagram-icon-white.svg";
import twitterIcon from "../../assets/twitter-icon-white.svg";
import linkedinIcon from "../../assets/linkedin-icon-white.svg";
import youtubeIcon from "../../assets/youtube-icon-white.svg";

export function Footer1() {
  return (
    <footer id="relume" className="bg-cbl-dark px-page py-section-md">
      <div className="container max-w-container mx-auto">
        <div className="flex flex-col gap-20">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
            {/* Logo section */}
            <div className="w-full lg:w-[500px]">
              <a href="#" className="inline-block">
                <img
                  src={logoFooter}
                  alt="CBL Colours Logo"
                  className="h-[87px] w-auto"
                />
              </a>
            </div>

            {/* Links section */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {/* Quick Links */}
              <div className="flex flex-col gap-4">
                <h3 className="font-neue-display text-body-semibold text-cbl-light">
                  Quick Links
                </h3>
                <ul className="flex flex-col">
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Works
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Project Two
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Project Three
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Project Four
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Project Five
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="flex flex-col gap-4">
                <h3 className="font-neue-display text-body-semibold text-cbl-light">
                  Resources
                </h3>
                <ul className="flex flex-col">
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Blog Posts
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      FAQs
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Contact Us
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      About Us
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Connect With Us */}
              <div className="flex flex-col gap-4">
                <h3 className="font-neue-display text-body-semibold text-cbl-light">
                  Connect With Us
                </h3>
                <ul className="flex flex-col">
                  <li className="py-2">
                    <a href="#" className="flex items-center gap-3 font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      <img src={facebookIcon} alt="" className="w-6 h-6" />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="flex items-center gap-3 font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      <img src={instagramIcon} alt="" className="w-6 h-6" />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="flex items-center gap-3 font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      <img src={twitterIcon} alt="" className="w-6 h-6" />
                      <span>X</span>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="flex items-center gap-3 font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      <img src={linkedinIcon} alt="" className="w-6 h-6" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#" className="flex items-center gap-3 font-neue-display text-small text-cbl-light hover:opacity-70 transition-opacity">
                      <img src={youtubeIcon} alt="" className="w-6 h-6" />
                      <span>YouTube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-cbl-light opacity-20" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <p className="font-neue-display text-small text-cbl-light">
                © 2025 CBL Colours. All rights reserved.
              </p>
              <ul className="flex flex-wrap gap-6 font-neue-display text-small text-cbl-light">
                <li>
                  <a href="#" className="underline hover:opacity-70 transition-opacity">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:opacity-70 transition-opacity">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:opacity-70 transition-opacity">
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
