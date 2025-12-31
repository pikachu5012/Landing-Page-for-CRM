'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "features", label: "Features", href: "#features" },
  { id: "howItWorks", label: "How it works", href: "#howItWorks" },
  { id: "pricing", label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      },
        {
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="sticky top-5 z-50 bg-navBackground backdrop-blur-md text-white p-4 rounded-full mx-[10rem] px-[3.75rem] py-1">
      <div className="container mx-auto flex justify-between items-center py-[16px]">
        <a href="#home" className="text-xl font-bold">
          <img
            src="/logo.svg"
            alt="CRM Logo"
            className="h-8 inline-block mr-2"
          />
        </a>
        <ul className="flex space-x-[51px] cursor-pointer text-2xl font-semibold">
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={activeSection === id ? "text-secondary underline font-bold" : "text-primary"}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-primary text-background px-[24px] py-[10px] rounded-full text-[24px]">
          login
        </button>
      </div>
    </nav>
  );
}
