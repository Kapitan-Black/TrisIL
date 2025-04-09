'use client'

import {
  RotateCcw,
  Wrench,
  Clock,
  ShieldCheck,
  Lightbulb,
  Settings,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const ServiceSection = () => {
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

  const services = [
    {
      title: "תיקון תריסים",
      description:
        "תיקון מקצועי של כל סוגי תריסי האלומיניום החשמליים, כולל החלפת חלקים ושדרוג מערכות קיימות.",
      icon: <Wrench className="w-8 h-8" />,
      delay: "animation-delay-100",
    },
    {
      title: "החלפת מנועים",
      description:
        "החלפה והתקנה של מנועים חדשים לתריסי אלומיניום חשמליים, תוך שימוש במוצרים איכותיים בלבד.",
      icon: <RotateCcw className="w-8 h-8" />,
      delay: "animation-delay-200",
    },
    {
      title: "הפיכת תריס ידני לחשמלי",
      description:
        "שדרוג תריסי גלילה ידניים למערכת חשמלית מתקדמת.",
      icon: <Settings className="w-8 h-8" />,
      delay: "animation-delay-600",
    },
    {
      title: "שירות מהיר",
      description: "מענה מהיר לפניות, הגעה בזמן שנקבע והתקנה מהירה ומקצועית.",
      icon: <Clock className="w-8 h-8" />,
      delay: "animation-delay-300",
    },
    {
      title: "אחריות מלאה",
      description: "אחריות מלאה על כל העבודות וחלקי החילוף, לשקט נפשי מוחלט.",
      icon: <ShieldCheck className="w-8 h-8" />,
      delay: "animation-delay-400",
    },
    {
      title: "ייעוץ מקצועי",
      description:
        "ייעוץ והכוונה לבחירת הפתרון המתאים ביותר לצרכים הספציפיים שלך.",
      icon: <Lightbulb className="w-8 h-8" />,
      delay: "animation-delay-500",
    },

    // {
    //   title: "תחזוקה שוטפת",
    //   description: "שירותי תחזוקה שוטפת לשמירה על תפקוד מיטבי של התריסים לאורך זמן.",
    //   icon: <Settings className="w-8 h-8" />,
    //   delay: "animation-delay-600"
    // }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-white md:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      {/* <div className="absolute -top-[10%] -right-[5%] w-64 h-64 bg-skyblue/30 rounded-full blur-3xl opacity-50"></div> */}
      <div className="absolute bottom-[20%] -left-[5%] w-72 h-72 bg-oceanblue/20 rounded-full blur-3xl opacity-40"></div>

      <div className="section-container">
        <div className="section-title">
          <span className={cn("opacity-0", isVisible && "animate-fade-in")}>
            השירותים שלנו
          </span>
          <h2
            className={cn(
              "opacity-0",
              isVisible && "animate-fade-in animation-delay-100"
            )}
          >
            פתרונות מקצועיים לתריסי אלומיניום
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "bg-white border border-skyblue/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 opacity-0",
                isVisible && "animate-fade-in",
                service.delay
              )}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-skyblue mb-5 text-oceanblue-dark">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-oceanblue-dark mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
