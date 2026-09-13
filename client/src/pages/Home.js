import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import headerImg from "../img/header.png";
import Footer from "../components/Footer";
import aboutImg from "../img/about.png";

const journey = [
  "Welcome", "Introduction", "Registration", "Payment", "Confirmation",
  "Event Schedule", "Cultural Program", "Guest Information", "Venue Details",
  "Program Activities", "Prize & Recognition", "Photo Session", "Dinner",
  "Closing Ceremony", "Thank You",
];

const schedule = [
  ["10:00 AM", "Registration & Welcome"],
  ["11:00 AM", "Opening Ceremony"],
  ["11:30 AM", "Alumni Introduction"],
  ["12:30 PM", "Memories & Discussion"],
  ["1:30 PM", "Lunch"],
  ["3:00 PM", "Cultural Program"],
  ["4:30 PM", "Prize & Recognition"],
  ["5:30 PM", "Group Photography"],
  ["7:00 PM", "Dinner"],
  ["8:30 PM", "Closing Ceremony"],
];

const highlights = [
  { num: "01", title: "Registration", desc: "Register yourself for the reunion." },
  { num: "02", title: "Event Schedule", desc: "Explore the complete event schedule." },
  { num: "03", title: "Cultural Program", desc: "Enjoy cultural programs & memorable moments." },
  { num: "04", title: "Dinner & Reunion", desc: "Dinner together & strengthen bonds." },
];

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#050b07] text-white min-h-[480px] md:min-h-[500px]">

        {/* ================= IMAGE ================= */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[57%]">
          <img
            src={headerImg}
            alt="Nawab Siraj-Ud-Daulah Government College"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ================= BLACK LEFT PANEL ================= */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[43%] bg-[#020806]">
        </div>

        {/* ================= CONTENT ================= */}
        <div className="relative z-10 min-h-[480px] md:min-h-[500px] flex items-center">

          <div className="w-full md:w-[43%] px-6 sm:px-10 md:px-12 lg:px-16 py-16 md:py-20">

            {/* Small heading */}
            <p className="text-xl sm:text-2xl font-medium text-white/95 mb-1">
              Reunion of
            </p>

            {/* Main heading */}
            <h1 className="text-[52px] sm:text-[64px] md:text-[62px] lg:text-[68px] leading-[0.95] font-bold text-[#f5bd55] mb-5 whitespace-nowrap">
              Batch 2002
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 max-w-[440px] mb-7">
              Celebrating memories, friendship
              <br className="hidden sm:block" />
              &amp; a journey of excellence
            </p>

            {/* ================= EVENT INFO ================= */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 mb-7 text-sm">

              {/* Date */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#f5bd55] mt-0.5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <strong className="text-[#f5bd55] text-[11px] uppercase tracking-wider mb-1">
                    Date
                  </strong>

                  <span className="text-white/90 whitespace-nowrap">
                    15 November 2025
                  </span>

                  <span className="text-white/70 text-xs">
                    Saturday
                  </span>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#f5bd55] mt-0.5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <strong className="text-[#f5bd55] text-[11px] uppercase tracking-wider mb-1">
                    Venue
                  </strong>

                  <span className="text-white/90">
                    College Campus
                  </span>

                  <span className="text-white/70 text-xs">
                    Natore
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-2.5">
                <div className="text-[#f5bd55] mt-0.5">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div className="flex flex-col">
                  <strong className="text-[#f5bd55] text-[11px] uppercase tracking-wider mb-1">
                    Time
                  </strong>

                  <span className="text-white/90">
                    10:00 AM
                  </span>

                  <span className="text-white/70 text-xs">
                    Onwards
                  </span>
                </div>
              </div>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex gap-3 flex-wrap">

              <Link to={user ? "/register" : "/signup"}>
                <button
                  type="button"
                  className="group flex items-center gap-3 bg-[#a91527] border border-[#dcae42] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#8d1020] transition-all duration-200 shadow-lg"
                >
                  Register Now

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </Link>

              <a href="#schedule">
                <button
                  type="button"
                  className="group flex items-center gap-3 bg-transparent border border-[#dcae42] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-200"
                >
                  View Event Details

                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </a>

            </div>
          </div>
        </div>

        {/* ================= BOTTOM DECORATIVE WAVES ================= */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">

          {/* Gold wave */}
          <svg
            className="absolute bottom-0 w-full h-[75px] md:h-[90px]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,65 C260,125 510,115 760,100 C1030,84 1210,60 1440,0 L1440,120 L0,120 Z"
              fill="#e6ae3e"
            />
          </svg>

          {/* Maroon wave */}
          <svg
            className="absolute bottom-0 w-full h-[58px] md:h-[70px]"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,82 C270,135 530,125 790,108 C1050,91 1230,67 1440,10 L1440,120 L0,120 Z"
              fill="#9e1024"
            />
          </svg>

          {/* Green wave */}
          <svg
            className="relative w-full h-[38px] md:h-[48px]"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C270,105 500,98 760,83 C1040,67 1230,48 1440,0 L1440,100 L0,100 Z"
              fill="#075b35"
            />
          </svg>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#faf8f2] py-16 md:py-20"
      >
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8">

          {/* ================= SECTION HEADER ================= */}
          <div className="text-center max-w-[720px] mx-auto mb-12">

            <span className="inline-block text-[#9e1024] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              About Our Institution
            </span>

            <h2 className="text-[#7f0d1b] text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight mb-4">
              A Legacy of Education,
              <span className="text-[#c99632]"> Excellence & Heritage</span>
            </h2>

            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-12 bg-[#c99632]" />
              <span className="w-2 h-2 rotate-45 bg-[#c99632]" />
              <span className="h-[1px] w-12 bg-[#c99632]" />
            </div>

          </div>


          {/* ================= MAIN ABOUT ================= */}
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">

            {/* ================= IMAGE ================= */}
            <div className="relative">

              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-[#c99632] rounded-xl" />

              <div className="relative z-10 overflow-hidden rounded-xl bg-[#e8dfc8] shadow-xl">
                <img
                  src={aboutImg}
                  alt="Nawab Siraj Ud Daulah Government College, Natore"
                  className="w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover"
                />

                {/* Image bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-6 pt-20">
                  <p className="text-[#f2c45e] text-sm font-semibold tracking-wide">
                    Nawab Siraj Ud Daulah Government College
                  </p>
                  <p className="text-white/85 text-xs mt-1">
                    Natore, Bangladesh
                  </p>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute z-20 -bottom-6 -right-3 sm:right-5 bg-[#9e1024] text-white rounded-lg px-5 py-4 shadow-lg border-2 border-[#e0b34b]">
                <div className="text-[#f4c55d] text-2xl font-bold leading-none">
                  1956
                </div>
                <div className="text-[10px] uppercase tracking-wider mt-1">
                  Established
                </div>
              </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div>

              <span className="text-[#c99632] text-sm font-bold">
                OUR STORY
              </span>

              <h3 className="text-[#7f0d1b] text-2xl sm:text-3xl font-bold mt-2 mb-5">
                A Historic Seat of Higher Education in Natore
              </h3>

              <p className="text-gray-700 leading-[1.8] text-sm sm:text-base mb-5">
                In the historic town of Natore, the journey of higher education
                began with the establishment of <strong>Natore College</strong> in
                1956. According to historical records, the institution officially
                began its journey on <strong>1 July 1956</strong>. In 1959, it was
                renamed <strong>Nawab Siraj-Ud-Daulah College</strong>, carrying
                forward the rich historical legacy of Natore.
              </p>

              <p className="text-gray-700 leading-[1.8] text-sm sm:text-base mb-6">
                The college was nationalized on <strong>1 March 1980</strong>.
                Since then, it has continued its mission of spreading the light
                of knowledge and education, becoming an important institution in
                the academic and cultural life of the region.
              </p>


              {/* ================= HIGHLIGHTS ================= */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7">

                <div className="bg-white border border-[#e5d9bd] rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#9e1024] text-xl font-bold">
                    1956
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">
                    Founded
                  </div>
                </div>

                <div className="bg-white border border-[#e5d9bd] rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#9e1024] text-xl font-bold">
                    1959
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">
                    Renamed
                  </div>
                </div>

                <div className="bg-white border border-[#e5d9bd] rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#9e1024] text-xl font-bold">
                    1980
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">
                    Nationalized
                  </div>
                </div>

                <div className="bg-white border border-[#e5d9bd] rounded-lg p-4 text-center shadow-sm">
                  <div className="text-[#9e1024] text-xl font-bold">
                    34+
                  </div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-wide mt-1">
                    Bighas Campus
                  </div>
                </div>

              </div>


              {/* ================= LOCATION ================= */}
              <div className="flex items-start gap-3 bg-[#f1ead9] border-l-4 border-[#c99632] rounded-r-lg p-4">

                <div className="text-[#9e1024] mt-0.5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <h4 className="text-[#7f0d1b] text-sm font-bold mb-1">
                    Located in the Heart of Natore
                  </h4>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    The college is situated in the Boro Gachha area, near the
                    heart of Natore city, along the Rajshahi–Natore highway and
                    close to Natore Railway Station.
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= HERITAGE SECTION ================= */}
          <div className="mt-16 grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">

            {/* History */}
            <div className="bg-[#7f0d1b] rounded-xl p-7 sm:p-9 text-white relative overflow-hidden">

              {/* Decorative circle */}
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full border border-white/10" />
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full border border-white/10" />

              <span className="relative text-[#f1c45d] text-xs font-bold uppercase tracking-[0.2em]">
                A Glimpse Into The Past
              </span>

              <h3 className="relative text-2xl sm:text-3xl font-bold mt-2 mb-5">
                The Heritage of Natore
              </h3>

              <p className="relative text-white/80 text-sm leading-[1.8] mb-4">
                Natore has a remarkable history dating back to the Mughal period.
                In 1706, the foundation of the Natore estate was laid when
                Ramjiban received royal recognition and the title of Raja Bahadur
                from Emperor Alamgir.
              </p>

              <p className="relative text-white/80 text-sm leading-[1.8] mb-4">
                Over time, the Natore estate expanded from Rajshahi to Maldah,
                making Natore an important political and administrative centre.
                The town later became the headquarters of Rajshahi district and
                remained an important centre of administration until 1825.
              </p>

              <p className="relative text-white/80 text-sm leading-[1.8]">
                After a long historical journey, Natore regained its status as a
                district in <strong className="text-[#f1c45d]">1984</strong>.
                The heritage of this historic city continues to inspire the
                educational mission of the college.
              </p>

            </div>


            {/* Campus Information */}
            <div className="bg-white border border-[#e4d9c2] rounded-xl p-7 sm:p-9 shadow-sm">

              <span className="text-[#c99632] text-xs font-bold uppercase tracking-[0.2em]">
                Our Campus
              </span>

              <h3 className="text-[#7f0d1b] text-2xl font-bold mt-2 mb-5">
                A Green & Historic Campus
              </h3>

              <p className="text-gray-600 text-sm leading-[1.8] mb-5">
                The main campus covers approximately
                <strong className="text-[#7f0d1b]"> 34 bighas </strong>
                of land in the Boro Gachha area. The campus is surrounded by
                greenery and is divided into two parts by the historic Narod
                River.
              </p>

              <p className="text-gray-600 text-sm leading-[1.8] mb-6">
                The college's main building follows the distinctive English
                <strong className="text-[#7f0d1b]"> “E” type </strong>
                architectural design. In addition, the institution has two
                other aesthetically designed academic buildings.
              </p>

              {/* Campus facts */}
              <div className="space-y-3">

                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">
                    Main Campus
                  </span>
                  <strong className="text-[#7f0d1b] text-sm">
                    34+ Bighas
                  </strong>
                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-gray-500 text-sm">
                    Additional Land
                  </span>
                  <strong className="text-[#7f0d1b] text-sm">
                    78 Bighas
                  </strong>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    Main Building
                  </span>
                  <strong className="text-[#7f0d1b] text-sm">
                    “E” Type
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* ================= TIMELINE ================= */}
          <div className="mt-16">

            <div className="text-center mb-9">

              <span className="text-[#c99632] text-xs font-bold uppercase tracking-[0.2em]">
                Our Journey
              </span>

              <h3 className="text-[#7f0d1b] text-2xl sm:text-3xl font-bold mt-2">
                Milestones Through The Years
              </h3>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* 1956 */}
              <div className="relative bg-white border border-[#e5d9bd] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">

                <div className="mx-auto w-12 h-12 rounded-full bg-[#9e1024] text-[#f4c55d] flex items-center justify-center font-bold text-sm border-4 border-[#f1dfad]">
                  01
                </div>

                <h4 className="text-[#9e1024] text-2xl font-bold mt-4">
                  1956
                </h4>

                <p className="text-gray-600 text-sm mt-2">
                  Natore College was established on
                  <strong> 1 July 1956</strong>, marking the beginning of a
                  new era of higher education in Natore.
                </p>

              </div>


              {/* 1959 */}
              <div className="relative bg-white border border-[#e5d9bd] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">

                <div className="mx-auto w-12 h-12 rounded-full bg-[#9e1024] text-[#f4c55d] flex items-center justify-center font-bold text-sm border-4 border-[#f1dfad]">
                  02
                </div>

                <h4 className="text-[#9e1024] text-2xl font-bold mt-4">
                  1959
                </h4>

                <p className="text-gray-600 text-sm mt-2">
                  The institution was renamed
                  <strong> Nawab Siraj-Ud-Daulah College</strong>,
                  honouring the historic heritage of Bengal.
                </p>

              </div>


              {/* 1980 */}
              <div className="relative bg-white border border-[#e5d9bd] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">

                <div className="mx-auto w-12 h-12 rounded-full bg-[#9e1024] text-[#f4c55d] flex items-center justify-center font-bold text-sm border-4 border-[#f1dfad]">
                  03
                </div>

                <h4 className="text-[#9e1024] text-2xl font-bold mt-4">
                  1980
                </h4>

                <p className="text-gray-600 text-sm mt-2">
                  On <strong>1 March 1980</strong>, the college was
                  nationalized and continued its journey as a government
                  institution.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM DECORATION ================= */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#075b35]" />

      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-[1100px] mx-auto px-5 py-10">
        <h2 className="text-center text-maroon text-2xl mb-2">Reunion of Batch 2002</h2>
        <p className="text-center text-gray-500 mb-8">
          Reconnecting old friends, celebrating unforgettable memories.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div key={h.num} className="bg-white border border-gray-200 rounded-lg p-5 text-center">
              <span className="inline-block text-maroon font-bold text-xl mb-2">{h.num}</span>
              <h3 className="text-base mb-1.5">{h.title}</h3>
              <p className="text-sm text-gray-500 m-0">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT JOURNEY - genuine sequence, numbering is appropriate */}
      <section className="bg-[#fbf6ea] py-10">
        <div className="max-w-[1100px] mx-auto px-5">
          <h2 className="text-center text-maroon text-2xl mb-6">Our Event Journey</h2>
          <div className="flex overflow-x-auto gap-7 pt-2 pb-4 px-1">
            {journey.map((step, i) => (
              <div key={step} className="flex flex-col items-center min-w-[76px] text-center text-xs text-gray-600">
                <div className="w-10 h-10 rounded-full border-2 border-gold text-maroon flex items-center justify-center font-bold text-xs mb-1.5 bg-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE + REGISTER CTA */}
      <section className="max-w-[1100px] mx-auto px-5 py-10 grid md:grid-cols-2 gap-6" id="schedule">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="text-maroon text-2xl mb-3">Event Schedule</h2>
          <ul className="list-none p-0 m-0">
            {schedule.map(([time, item]) => (
              <li key={item} className="flex gap-3.5 py-2 border-b border-gray-100 text-sm">
                <span className="text-maroon font-semibold min-w-[72px]">{time}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#fff8ef] border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="text-maroon text-2xl mb-3">Register for the Reunion</h2>
          <p>Participant Fee: 500 BDT</p>
          <p>Guest Fee: 400 BDT</p>
          <p className="font-bold text-maroon text-lg">Total: 900 BDT</p>
          <Link to={user ? "/register" : "/signup"}>
            <button className="w-full bg-maroon text-white font-semibold text-sm py-2.5 rounded-md hover:bg-maroon-dark mt-2">
              {user ? "Continue Registration" : "Sign Up to Register"}
            </button>
          </Link>
          {!user && (
            <p className="text-center text-sm mt-3">
              Already a member?{" "}
              <Link to="/login" className="text-maroon font-semibold">Log in</Link>
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}