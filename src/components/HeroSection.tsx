'use client'

import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const offsetPosition = servicesSection.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-skyblue-dark to-white opacity-70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,174,219,0.05)_0%,rgba(30,174,219,0)_60%)]"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-right order-2 md:order-1">
            <div className="space-y-6">
              <div className="opacity-0 animate-fade-in">
                <span className="inline-block bg-skyblue px-3 py-1 rounded-full text-md font-medium text-charcoal/80 mb-4">
                  שירות מקצועי ואמין
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-skyblue leading-tight opacity-0 animate-fade-in animation-delay-100">
                תיקון והחלפת מנועים <br className="hidden md:block" />
                <span className="text-charcoal/80">
                  לתריסי אלומיניום חשמליים
                </span>
                <br className="hidden md:block" />
                <span className="text-charcoal/80">באיזור אשקלון והסביבה</span>
              </h1>

              <p className="text-lg text-charcoal/70 max-w-xl opacity-0 animate-fade-in animation-delay-200">
                שירות מקצועי ומהיר לתיקון תריסי אלומיניום חשמליים והחלפת מנועים,
                עם אחריות מלאה ומחירים הוגנים.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-in animation-delay-300">
                <button
                  onClick={scrollToServices}
                  className="bg-skyblue border border-skyblue-dark/20 hover:border-skyblue-dark/40 text-oceanblue-dark px-6 py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  לשירותים שלנו
                </button>
                <a
                  href="#contact"
                  className="bg-oceanblue hover:bg-oceanblue-dark text-white px-6 py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                >
                  צור קשר
                </a>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <div className="relative h-[300px] md:h-[500px] w-full opacity-0 animate-fade-in animation-delay-400">
              <div
                className={cn(
                  "absolute inset-0 rounded-xl overflow-hidden bg-white/50",
                  "shadow-[0_0_80px_rgba(14,165,233,0.1)]"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* <div className="text-skyblue-dark/20 text-6xl font-light"> */}
                  <img
                    src="/1.jpg"
                    alt=""
                    className="rounded-lg w-screen h-full"
                  />
                  {/* </div> */}
                </div>
              </div>

              {/* Decorative Elements */}
              {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-skyblue rounded-full opacity-20 animate-float"></div> */}
              {/* <div className="absolute top-10 -left-6 w-20 h-20 bg-oceanblue rounded-full opacity-20 animate-float animation-delay-500"></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 animate-fade-in animation-delay-700">
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center text-oceanblue-dark/70 hover:text-oceanblue-dark transition-colors"
        >
          <span className="text-sm mb-2">גלול למטה</span>
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
