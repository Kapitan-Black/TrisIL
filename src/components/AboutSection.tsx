'use client'

import { useRef, useEffect, useState } from "react";
import { CheckCircle, Users, Clock, Award, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const advantages = [
    { text: "צוות מקצועי ומנוסה", icon: <Users size={18} /> },
    { text: "חומרים באיכות גבוהה", icon: <Award size={18} /> },
    { text: "שירות זמין ומהיר", icon: <Clock size={18} /> },
    { text: "אחריות מלאה", icon: <CheckCircle size={18} /> },
    { text: "מחירים הוגנים", icon: <ThumbsUp size={18} /> },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="md:py-24 bg-gradient-to-b from-white to-skyblue/10 relative overflow-hidden"
    >
      {/* Background Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-skyblue/5 to-transparent"></div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          {/* Image/Illustration Column */}
          <div
            className={cn(
              "relative h-[350px] md:h-[500px] opacity-0",
              isVisible && "animate-fade-in-left"
            )}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-sm border border-aluminum/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-charcoal/20 text-6xl font-light text-center">
                  <img src="/2.png" alt="" className="" />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            {/* <div className="absolute -top-5 -right-5 w-24 h-24 bg-aluminum/30 rounded-full blur-xl"></div> */}
            {/* <div className="absolute -bottom-7 -left-7 w-32 h-32 bg-skyblue/40 rounded-full blur-xl"></div> */}
          </div>

          {/* Text Content Column */}
          <div className="text-right">
            <div
              className={cn(
                "opacity-0",
                isVisible && "animate-fade-in-right animation-delay-100"
              )}
            >
              <span className="inline-block bg-skyblue px-3 py-1 rounded-full text-sm font-medium text-charcoal/80 mb-4">
                אודותינו
              </span>
            </div>

            <h2
              className={cn(
                "text-3xl md:text-4xl font-medium text-charcoal mb-6 opacity-0",
                isVisible && "animate-fade-in-right animation-delay-200"
              )}
            >
              המומחים לתריסי אלומיניום חשמליים
            </h2>

            <div
              className={cn(
                "space-y-4 mb-8 opacity-0",
                isVisible && "animate-fade-in-right animation-delay-300"
              )}
            >
              <p className="text-charcoal/70">
                עם ניסיון של שנים בתחום תריסי האלומיניום החשמליים, אנו מספקים
                שירות מקצועי, אמין ומהיר ללקוחות פרטיים ועסקיים.
              </p>
              <p className="text-charcoal/70">
                הצוות המקצועי שלנו עובר הכשרות והשתלמויות באופן קבוע כדי להישאר
                מעודכן בטכנולוגיות ובפתרונות החדשניים ביותר בתחום.
              </p>
            </div>

            <div
              className={cn(
                "space-y-3 opacity-0",
                isVisible && "animate-fade-in-right animation-delay-400"
              )}
            >
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start gap-2"
                >
                  <div className="text-skyblue-dark">{advantage.icon}</div>
                  <span className="text-charcoal/80">{advantage.text}</span>
                </div>
              ))}
            </div>

            <div
              className={cn(
                "mt-8 opacity-0",
                isVisible && "animate-fade-in-right animation-delay-500"
              )}
            >
              <a
                href="#contact"
                className="inline-block bg-charcoal hover:bg-charcoal/90 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                דברו איתנו עכשיו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
