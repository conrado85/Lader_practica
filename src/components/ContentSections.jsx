import pageHtml from "../page.html?raw";

const pageDocument = new DOMParser().parseFromString(pageHtml, "text/html");
pageDocument.querySelectorAll("script").forEach((script) => script.remove());
pageDocument.querySelector("#contactForm")?.removeAttribute("onsubmit");

const sections = Object.fromEntries(
  [
    "inicio",
    "servicios",
    "desarrollo-web",
    "alcance",
    "portfolio",
    "marcas",
    "opiniones",
    "contactanos",
  ].map((id) => [id, pageDocument.getElementById(id)?.outerHTML ?? ""]),
);
const footer = pageDocument.querySelector("footer")?.outerHTML ?? "";

function HtmlFragment({ markup }) {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}

export function HeroSection() {
  return <HtmlFragment markup={sections.inicio} />;
}

export function ServicesSection() {
  return <HtmlFragment markup={sections.servicios} />;
}

export function DevelopmentSection() {
  return <HtmlFragment markup={sections["desarrollo-web"]} />;
}

export function ReachSection() {
  return <HtmlFragment markup={sections.alcance} />;
}

export function PortfolioSection() {
  return <HtmlFragment markup={sections.portfolio} />;
}

export function BrandsSection() {
  return <HtmlFragment markup={sections.marcas} />;
}

export function TestimonialsSection() {
  return <HtmlFragment markup={sections.opiniones} />;
}

export function ContactSection() {
  return <HtmlFragment markup={sections.contactanos} />;
}

export function SiteFooter() {
  return <HtmlFragment markup={footer} />;
}
