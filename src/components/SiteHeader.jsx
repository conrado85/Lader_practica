import { useState } from "react";

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Desarrollo Web", href: "#desarrollo-web", active: true },
  { label: "Sumate", href: "#contactanos" },
  { label: "Contacto", href: "#contactanos" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-[1240px] px-margin-mobile pt-space-sm lg:px-margin">
        <div className="flex h-20 w-full items-center justify-between rounded-full bg-space-surface/85 px-space-md shadow-[0_16px_40px_rgba(5,2,26,0.6)] backdrop-blur-xl lg:px-space-lg">
          <a
            className="flex items-center gap-space-sm transition-opacity hover:opacity-90"
            href="#inicio"
            onClick={() => setMenuOpen(false)}
          >
            <img
              alt="Logotipo de Lader"
              className="h-8 w-auto object-contain"
              src="/logo-lader.png"
            />
          </a>
          <button
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú principal" : "Abrir menú principal"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-space-container md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined text-[24px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
          <nav
            aria-label="Navegación principal"
            className={`${menuOpen ? "flex" : "hidden"} absolute left-margin-mobile right-margin-mobile top-24 z-50 flex-col gap-space-xs rounded-2xl bg-space-elevated/95 p-space-xs shadow-xl backdrop-blur-xl md:relative md:inset-auto md:z-auto md:flex md:flex-row md:items-center md:rounded-full md:bg-space-elevated/60 md:shadow-none md:backdrop-blur-none`}
            id="primary-navigation"
          >
            {navigation.map(({ label, href, active }) => (
              <a
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded-full bg-primary-container px-space-md py-space-xs font-label-md text-label-md font-semibold text-on-primary-container shadow-[0_0_16px_rgba(139,63,224,0.4)] transition-all duration-200"
                    : "rounded-full px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant transition-all duration-200 hover:bg-surface-container hover:text-on-surface"
                }
                href={href}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex items-center justify-center rounded-full bg-primary-container px-space-md py-space-xs font-label-lg text-label-lg text-on-primary-container shadow-[0_4px_20px_rgba(139,63,224,0.5)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(159,75,246,0.6)] sm:px-space-lg"
            href="#contactanos"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Reunión
          </a>
        </div>
      </div>
    </header>
  );
}
