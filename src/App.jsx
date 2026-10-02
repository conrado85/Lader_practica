import { useEffect, useRef } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import {
  BrandsSection,
  ContactSection,
  DevelopmentSection,
  HeroSection,
  PortfolioSection,
  ReachSection,
  ServicesSection,
  SiteFooter,
  TestimonialsSection,
} from "./components/ContentSections.jsx";
import "./index.css";

export default function App() {
  const pageRef = useRef(null);

  useEffect(() => {
    const form = pageRef.current?.querySelector("#contactForm");
    const successMessage = pageRef.current?.querySelector("#formSuccess");

    if (!(form instanceof HTMLFormElement)) return undefined;

    let timeoutId;
    const handleSubmit = (event) => {
      event.preventDefault();
      successMessage?.classList.remove("hidden");
      form.reset();
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        successMessage?.classList.add("hidden");
      }, 5000);
    };

    form.addEventListener("submit", handleSubmit);
    return () => {
      form.removeEventListener("submit", handleSubmit);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div ref={pageRef}>
      <SiteHeader />
      <main className="min-h-screen w-full bg-space-deep pt-20">
        <HeroSection />
        <ServicesSection />
        <DevelopmentSection />
        <ReachSection />
        <PortfolioSection />
        <BrandsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
