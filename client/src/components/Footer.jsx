import { Link } from "react-router-dom";
import logo from "../img/logo.png";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#8f0f1f] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="relative z-10 max-w-[1250px] mx-auto px-6 sm:px-8 lg:px-10 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.25fr_1fr] gap-8 lg:gap-0">

          {/* ================= COLLEGE INFO ================= */}
          <div className="lg:pr-8">

            <div className="flex items-start gap-3">

              {/* Logo */}
              <div className="shrink-0">
                <img
                  src={logo}
                  alt="Nawab Siraj Ud Daulah Government College"
                  className="w-[65px] h-[65px] object-contain"
                />
              </div>

              {/* College name */}
              <div>
                <h3 className="text-[15px] sm:text-base font-semibold leading-tight">
                  Nawab Siraj Ud Daulah
                  <br />
                  Government College, Natore
                </h3>

                <p className="text-[11px] leading-relaxed text-white/75 mt-2 max-w-[250px]">
                  A prestigious institution with a glorious past
                  <br />
                  and a promising future.
                </p>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-5">

              {/* Facebook */}
              <a
                href="/"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#d7a943] flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M14 8h3V5h-3c-2.8 0-5 2.2-5 5v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-1.1.9-2 2-2z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="/"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#d7a943] flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.5v-7l6 3.5-6 3.5z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="/"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#d7a943] flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-current"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="/"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#d7a943] flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current"
                >
                  <path d="M6.5 8.5H3V21h3.5V8.5zM4.75 3A2.1 2.1 0 1 0 4.75 7.2 2.1 2.1 0 0 0 4.75 3zM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.7H9V21h3.5v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21H21v-7.2z" />
                </svg>
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:border-l lg:border-white/15 lg:px-7">

            <h4 className="text-[#e9bd5a] font-semibold text-sm mb-4">
              Quick Links
            </h4>

            <div className="grid grid-cols-2 gap-x-8">

              <div className="space-y-2">
                <Link
                  to="/"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Home</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/about"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>About</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/event"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Event</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/register"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Registration</span>
                  <span className="text-white/30">›</span>
                </Link>
              </div>

              <div className="space-y-2">
                <Link
                  to="/schedule"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Schedule</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/gallery"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Gallery</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Contact</span>
                  <span className="text-white/30">›</span>
                </Link>

                <Link
                  to="/privacy"
                  className="flex items-center justify-between text-xs text-white/85 hover:text-[#e9bd5a] transition"
                >
                  <span>Privacy Policy</span>
                  <span className="text-white/30">›</span>
                </Link>
              </div>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:border-l lg:border-white/15 lg:px-7">

            <h4 className="text-[#e9bd5a] font-semibold text-sm mb-4">
              Contact Us
            </h4>

            <div className="space-y-3">

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-white text-[#8f0f1f]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 fill-current"
                  >
                    <path d="M6.6 2.5 9 2l2 5-2.1 1.7a15.7 15.7 0 0 0 6.4 6.4L17 13l5 2 .5 2.4a3 3 0 0 1-3 3.6C10.4 21 3 13.6 3 4.5a3 3 0 0 1 3.6-2z" />
                  </svg>
                </div>

                <span className="text-xs text-white/85">
                  +880 1711-233346
                </span>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-white text-[#8f0f1f]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 fill-none stroke-current"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </div>

                <span className="text-xs text-white/85">
                  info@nsdcenatore.edu.bd
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 flex items-center justify-center text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-none stroke-current"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <span className="text-xs leading-relaxed text-white/85">
                  Nawab Siraj Ud Daulah Government College
                  <br />
                  Natore Sadar, Natore-6400, Bangladesh
                </span>
              </div>

            </div>
          </div>

          {/* ================= EMERGENCY ================= */}
          <div className="lg:border-l lg:border-white/15 lg:pl-7">

            <h4 className="text-[#e9bd5a] font-semibold text-sm mb-4">
              Emergency Contact
            </h4>

            <div className="flex items-start gap-3">

              <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-none stroke-white"
                  strokeWidth="2.5"
                >
                  <path d="M6.6 2.5 9 2l2 5-2.1 1.7a15.7 15.7 0 0 0 6.4 6.4L17 13l5 2 .5 2.4a3 3 0 0 1-3 3.6C10.4 21 3 13.6 3 4.5a3 3 0 0 1 3.6-2z" />
                </svg>
              </div>

              <div>
                <p className="text-xs text-white/90 font-medium">
                  +880 1711-233346
                </p>

                <p className="text-[11px] text-white/65 mt-1">
                  (For Urgent Support Only)
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/15 mt-6 pt-3 text-center">

          <p className="text-[11px] sm:text-xs text-white/80 m-0">
            © 2026 Nawab Siraj Ud Daulah Government College, Natore.
            All Rights Reserved.
          </p>

        </div>

      </div>

      {/* ================= BUILDING WATERMARK ================= */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-[0.14] hidden md:block">
        <svg
          width="300"
          height="125"
          viewBox="0 0 300 125"
          fill="none"
        >
          <path
            d="M5 120V72L25 62V42H45V62L65 72V120"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M65 120V50L90 38L115 50V120"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M115 120V30L150 12L185 30V120"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M185 120V50L210 38L235 50V120"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M235 120V70L260 58L285 70V120"
            stroke="white"
            strokeWidth="2"
          />

          {/* columns */}
          <path
            d="M15 120V75M30 120V68M45 120V75"
            stroke="white"
            strokeWidth="1.5"
          />

          <path
            d="M75 120V55M90 120V48M105 120V55"
            stroke="white"
            strokeWidth="1.5"
          />

          <path
            d="M125 120V35M140 120V25M155 120V20M170 120V35"
            stroke="white"
            strokeWidth="1.5"
          />

          <path
            d="M195 120V55M210 120V48M225 120V55"
            stroke="white"
            strokeWidth="1.5"
          />

          <path
            d="M245 120V75M260 120V68M275 120V75"
            stroke="white"
            strokeWidth="1.5"
          />

          {/* ground */}
          <path
            d="M0 120H300"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* ================= BOTTOM GREEN ACCENT ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-[#075b35]" />

    </footer>
  );
}