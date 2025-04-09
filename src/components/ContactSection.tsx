"use client";

import { useState, useRef, useEffect } from "react";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isBot, setIsBot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  console.log("======", formRef.current);

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


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBot) {
      alert("Spam detected! Form submission blocked.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        );
        console.log("SUCCESS!");
      }
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message, please try again later.");
    }

    // Simulate form submission
    setTimeout(() => {
      toast.success("הודעתך נשלחה בהצלחה!", {
        description: "ניצור איתך קשר בהקדם האפשרי.",
        position: "top-center",
      });

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      title: "טלפון",
      content: "050-1234567",
      href: "tel:0501234567",
    },
    {
      icon: <Mail size={20} />,
      title: "דוא״ל",
      content: "info@example.com",
      href: "mailto:info@example.com",
    },
    // {
    //   icon: <MapPin size={20} />,
    //   title: "כתובת",
    //   content: "רחוב הדוגמה 123, ישראל",
    //   href: "https://maps.google.com"
    // },
    {
      icon: <Clock size={20} />,
      title: "שעות פעילות",
      content: "א'-ה' 08:00-18:00",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-white md:py-24 relative"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-skyblue/10 to-transparent"></div>
      <div className="absolute -top-[5%] right-[10%] w-64 h-64 bg-aluminum/20 rounded-full blur-3xl opacity-30"></div>

      <div className="section-container">
        <div className="section-title">
          <span className={cn("opacity-0", isVisible && "animate-fade-in")}>
            צור קשר
          </span>
          <h2
            className={cn(
              "opacity-0",
              isVisible && "animate-fade-in tracking-normal animation-delay-100"
            )}
          >
            דברו איתנו
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Form */}
          <div
            className={cn(
              "lg:col-span-3 bg-white rounded-xl shadow-sm border border-aluminum/10 p-6 md:p-8 opacity-0",
              isVisible && "animate-fade-in animation-delay-200"
            )}
          >
            <h3 className="text-xl font-medium text-charcoal mb-6 text-right">
              השאירו פרטים ונחזור אליכם בהקדם
            </h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5 text-right"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-charcoal/80"
                  >
                    שם מלא
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-aluminum focus:border-skyblue-dark focus:outline-none focus:ring-1 focus:ring-skyblue-dark transition-colors"
                    placeholder="השם שלך"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-charcoal/80"
                  >
                    טלפון
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-aluminum focus:border-skyblue-dark focus:outline-none focus:ring-1 focus:ring-skyblue-dark transition-colors"
                    placeholder="הטלפון שלך"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-charcoal/80"
                >
                  דוא״ל
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-aluminum focus:border-skyblue-dark focus:outline-none focus:ring-1 focus:ring-skyblue-dark transition-colors"
                  placeholder="הדוא״ל שלך"
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-charcoal/80"
                >
                  הודעה
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-aluminum focus:border-skyblue-dark focus:outline-none focus:ring-1 focus:ring-skyblue-dark transition-colors resize-none"
                  placeholder="איך נוכל לעזור לך?"
                ></textarea>
              </div>
              <input
                // {...register("website")}
                id="honeyPot"
                type="text"
                name="website" // Honeypot field name
                onChange={(e) => setIsBot(e.target.value)}
                className="hidden"
                autoComplete="off"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-oceanblue/90 text-white py-3 rounded-lg transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2",
                  isSubmitting
                    ? "opacity-80 cursor-not-allowed"
                    : "hover:bg-oceanblue-dark active:scale-[0.99] cursor-pointer"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    <span>שולח...</span>
                  </>
                ) : (
                  <>
                    <span>שלח הודעה</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className={cn(
              "lg:col-span-2 opacity-0",
              isVisible && "animate-fade-in animation-delay-300"
            )}
          >
            <div className="bg-skyblue/30 rounded-xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-medium text-charcoal mb-8 text-right">
                פרטי התקשרות
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 justify-start text-right"
                  >
                    <div className="flex items-center justify-center bg-white w-10 h-10 rounded-lg text-charcoal/80">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-charcoal/70 hover:text-charcoal transition-colors"
                          target={item.title === "כתובת" ? "_blank" : undefined}
                          rel={
                            item.title === "כתובת"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {item.content}
                        </a>
                      ) : (
                        <span className="text-charcoal/70">{item.content}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-charcoal/70 mb-6">
                  צריכים עזרה דחופה? צרו קשר בטלפון
                </p>
                <a
                  href="tel:0501234567"
                  className="inline-block w-full bg-white text-charcoal border border-aluminum/20 py-3 px-6 rounded-lg shadow-sm transition-all hover:shadow-md transform hover:-translate-y-1 font-medium"
                >
                  חייגו עכשיו: 050-1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
