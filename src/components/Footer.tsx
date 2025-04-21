'use client'

// import { ArrowUp } from "lucide-react";

const Footer = () => {
  // const scrollToTop = () => {
  //   console.log("scrolling...")
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  const scrollToTop = () => {
    console.log("scrolling...");
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };


  return (
    <footer className="bg-charcoal text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_70%)]"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Brand */}
          <div className="md:order-1 order-2">
            <a
              href="#"
              className="text-xl font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              <img
                src="/trisil-white.png"
                alt="logo"
                className="w-32 h-8 mb-8"
              />
            </a>
            <p className="text-white/60 mt-2 text-sm">
              שירות מקצועי לתיקון תריסים והחלפת מנועים
            </p>
          </div>

          {/* Scroll to Top Button */}
          <div className="md:order-2 order-1">
            {/* <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button> */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Test Scroll
            </button>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} כל הזכויות שמורות ל TrisIL</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 justify-center">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  תנאי שימוש
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  מדיניות פרטיות
                </a>
              </li>
              <li>
                {/* <a href="#" className="hover:text-white transition-colors">
                  מפת האתר
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
