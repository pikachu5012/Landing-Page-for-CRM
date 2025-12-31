"use client"

import type React from "react"

import { useState } from "react"
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    setEmail("")
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F6FAFD] border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <img
            src="/logo.svg"
            alt="CRM Logo"
            className="h-8 inline-block mx-2 mb-2"
            />
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              A powerful project management system built for teams that want clarity, accountability, and faster
              execution — without the clutter.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="GitHub">
                <FaDiscord className="w-8 h-8 p-1 rounded-full bg-black text-white hover:text-black hover:bg-white" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaFacebook className="w-8 h-8 p-1 rounded-full bg-black text-white hover:text-black hover:bg-white" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaLinkedin className="w-8 h-8 p-1 rounded-full bg-black text-white hover:text-black hover:bg-white" />
              </a>
              <a href="#" aria-label="GitHub">
                <FaGithub className="w-8 h-8 p-1 rounded-full bg-black text-white hover:text-black hover:bg-white" />
              </a>
              
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Features", "How It Works", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Help</h4>
            <ul className="space-y-3">
              {["Support Center", "Documentation", "Terms & Conditions", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col justify-between">
            <h4 className="font-semibold text-foreground">Subscribe to newsletter</h4>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-input py-2 px-1"
              />
              <button type="submit" className="w-full py-2 px-1 bg-[#01579B] rounded-md text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Project Management System — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
