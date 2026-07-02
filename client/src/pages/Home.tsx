/**
 * MacroMeals — Home Page
 * Design: "Beast Mode Diner" — Neo-brutalist streetwear meets precision nutrition
 * Colors: Black #0A0A0A | Yellow #FFD600 | White #FFFFFF
 * Fonts: Barlow Condensed (display) | DM Sans (body) | DM Mono (data)
 */

import { useEffect, useRef, useState } from "react";
import {
  ChefHat,
  BarChart3,
  Truck,
  Settings2,
  CheckCircle2,
  Star,
  Instagram,
  Mail,
  Phone,
  ChevronDown,
  Zap,
  Shield,
  Award,
  Users,
  ArrowRight,
  Leaf,
  FlameKindling,
  Target,
} from "lucide-react";

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".animate-fade-up");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#why", label: "Why Us" },
    { href: "#menu", label: "Menu" },
    { href: "#how", label: "How It Works" },
    { href: "#plans", label: "Plans" },
    { href: "#testimonials", label: "Reviews" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 flex items-center justify-center bg-[#FFD600] rounded-sm">
            <img
              src="/manus-storage/logo_icon_16a44a5c.png"
              alt="MacroMeals"
              className="w-7 h-7 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML =
                  '<span class="font-display text-[#0A0A0A] text-xl leading-none">M</span>';
              }}
            />
          </div>
          <span
            className="font-display text-white text-2xl tracking-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: "uppercase" }}
          >
            Macro<span className="text-[#FFD600]">Meals</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#FFD600] transition-colors duration-200 text-sm font-medium tracking-wide relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD600] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#plans" className="btn-primary text-sm px-5 py-2.5">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/10 px-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-white/80 hover:text-[#FFD600] font-medium border-b border-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#plans" className="btn-primary w-full mt-4 text-center block">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero_meal_prep_4101cf48.jpg"
          alt="MacroMeals hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Decorative yellow accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFD600] z-10" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="section-label mb-6 animate-fade-up visible">
            Precision Fuel. Delivered Weekly.
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-6 animate-fade-up visible"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(4rem, 10vw, 8rem)",
              lineHeight: 0.9,
              textTransform: "uppercase",
              transitionDelay: "60ms",
            }}
          >
            Stop Guessing.
            <br />
            <span className="text-[#FFD600]">Start Fuelling.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-white/75 text-lg md:text-xl max-w-xl mb-10 leading-relaxed animate-fade-up visible"
            style={{ transitionDelay: "120ms" }}
          >
            Chef-prepared, macro-tracked meals delivered every Sunday. Built for
            gym-goers who train hard, track every gram, and refuse to eat trash.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mb-10 animate-fade-up visible"
            style={{ transitionDelay: "180ms" }}
          >
            {[
              { value: "42g+", label: "Avg Protein/Meal" },
              { value: "500+", label: "Active Members" },
              { value: "100%", label: "No Preservatives" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-[#FFD600]"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs font-medium tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up visible"
            style={{ transitionDelay: "240ms" }}
          >
            <a href="#plans" className="btn-primary text-base px-8 py-4 flex items-center gap-2">
              Lock In Your Meals <ArrowRight size={18} />
            </a>
            <a href="#menu" className="btn-outline text-base px-8 py-4">
              See This Week's Menu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}

// ─── Section 2: Why MacroMeals ────────────────────────────────────────────────
function WhySection() {
  const differentiators = [
    {
      icon: ChefHat,
      title: "Chef-Prepared",
      desc: "Every meal is crafted by professional chefs with sports nutrition training — not a factory line. Real cooking, real flavour.",
      stat: "Pro Kitchen",
    },
    {
      icon: BarChart3,
      title: "Macro-Tracked",
      desc: "Every gram of protein, carb, and fat is calculated and labelled. No guesswork. No spreadsheets. Just eat and train.",
      stat: "±5g Accuracy",
    },
    {
      icon: Truck,
      title: "Delivered Fresh",
      desc: "Not frozen. Not reheated. Meals are prepared within 24 hours of delivery and arrive chilled — never compromised.",
      stat: "24hr Fresh",
    },
    {
      icon: Settings2,
      title: "Goal-Customisable",
      desc: "Bulking, cutting, or maintaining — choose your phase and we'll calibrate your meals accordingly. Your goal drives the macros.",
      stat: "3 Goal Modes",
    },
  ];

  return (
    <section id="why" className="bg-[#0F0F0F] py-24 relative">
      {/* Top yellow accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/30 to-transparent" />

      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-up">
          <div className="section-label mb-5">Why MacroMeals</div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Built Different.
            <br />
            <span className="text-[#FFD600]">Trained Harder.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className="animate-fade-up group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="bg-[#141414] border border-white/8 p-8 h-full relative overflow-hidden transition-all duration-200 hover:border-[#FFD600]/30 hover:bg-[#161616]">
                {/* Yellow corner accent */}
                <div className="absolute top-0 left-0 w-8 h-1 bg-[#FFD600]" />

                {/* Icon */}
                <div className="w-12 h-12 bg-[#FFD600]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFD600]/20 transition-colors">
                  <item.icon size={22} className="text-[#FFD600]" />
                </div>

                {/* Stat badge */}
                <div
                  className="text-[#FFD600] mb-3"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.stat}
                </div>

                <h3
                  className="text-white text-2xl mb-3"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Menu Highlights ───────────────────────────────────────────────
function MenuSection() {
  const meals = [
    {
      name: "Teriyaki Power Salmon",
      goal: "Bulk",
      cal: 620,
      protein: 48,
      carbs: 62,
      fat: 14,
      img: "/manus-storage/meal_1_teriyaki_salmon_fd5ec95a.jpg",
      tag: "High Protein",
    },
    {
      name: "Bulgogi Beef Bowl",
      goal: "Maintain",
      cal: 580,
      protein: 42,
      carbs: 55,
      fat: 16,
      img: "/manus-storage/meal_2_beef_bowl_ea08513e.jpg",
      tag: "Crowd Fav",
    },
    {
      name: "Grilled Chicken Penne",
      goal: "Cut",
      cal: 490,
      protein: 45,
      carbs: 42,
      fat: 10,
      img: "/manus-storage/meal_3_chicken_pasta_6f719f83.jpg",
      tag: "Low Fat",
    },
    {
      name: "Turkey Quinoa Power Bowl",
      goal: "Bulk",
      cal: 660,
      protein: 50,
      carbs: 68,
      fat: 15,
      img: "/manus-storage/meal_4_turkey_wrap_57ddf181.jpg",
      tag: "Best Seller",
    },
    {
      name: "Mediterranean Tuna Bowl",
      goal: "Cut",
      cal: 440,
      protein: 44,
      carbs: 38,
      fat: 11,
      img: "/manus-storage/meal_5_tuna_rice_816195f7.jpg",
      tag: "Lean Cut",
    },
    {
      name: "Egg White & Avocado Plate",
      goal: "Maintain",
      cal: 410,
      protein: 36,
      carbs: 30,
      fat: 14,
      img: "/manus-storage/meal_6_egg_white_65146c21.jpg",
      tag: "Clean Fuel",
    },
  ];

  const goalColors: Record<string, string> = {
    Bulk: "bg-[#FFD600]/15 text-[#FFD600] border-[#FFD600]/30",
    Cut: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    Maintain: "bg-green-500/15 text-green-400 border-green-500/30",
  };

  return (
    <section id="menu" className="bg-[#0A0A0A] py-24">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-up">
          <div>
            <div className="section-label mb-5">This Week's Menu</div>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                textTransform: "uppercase",
                lineHeight: 0.95,
              }}
            >
              Meals That Hit
              <br />
              <span className="text-[#FFD600]">Every Macro.</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Menu rotates weekly. All meals are prepared fresh and delivered every Sunday morning.
          </p>
        </div>

        {/* Meal Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((meal, i) => (
            <div
              key={meal.name}
              className="card-meal animate-fade-up"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={meal.img}
                  alt={meal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[#0A0A0A] text-xs font-bold px-2.5 py-1 bg-[#FFD600]"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                  >
                    {meal.tag}
                  </span>
                </div>

                {/* Goal badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 border rounded-full ${goalColors[meal.goal]}`}
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em" }}
                  >
                    {meal.goal}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-white text-xl mb-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  {meal.name}
                </h3>

                {/* Calorie count */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span
                    className="text-[#FFD600]"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", lineHeight: 1 }}
                  >
                    {meal.cal}
                  </span>
                  <span className="text-white/40 text-xs tracking-widest uppercase font-mono">kcal</span>
                </div>

                {/* Macro badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="macro-badge macro-badge-protein">
                    <span className="opacity-60">P</span> {meal.protein}g
                  </span>
                  <span className="macro-badge macro-badge-carbs">
                    <span className="opacity-60">C</span> {meal.carbs}g
                  </span>
                  <span className="macro-badge macro-badge-fat">
                    <span className="opacity-60">F</span> {meal.fat}g
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-white/40 text-sm mb-4">Menu changes weekly. 20+ meals available each cycle.</p>
          <a href="#plans" className="btn-primary inline-flex items-center gap-2">
            Choose Your Plan <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: How It Works ──────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      icon: Target,
      title: "Choose Your Goal",
      desc: "Tell us if you're bulking, cutting, or maintaining. We calibrate your meal macros to match your phase.",
    },
    {
      num: "02",
      icon: ChefHat,
      title: "Select Your Meals",
      desc: "Browse this week's rotating menu and pick your meals. Mix and match across goals if you need variety.",
    },
    {
      num: "03",
      icon: Truck,
      title: "Delivered Every Sunday",
      desc: "Your meals arrive chilled, labelled, and ready to eat. Just heat, eat, and get back to training.",
    },
  ];

  return (
    <section id="how" className="bg-[#FFD600] py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div
            className="text-[#0A0A0A]/50 text-xs tracking-widest uppercase mb-4 flex items-center justify-center gap-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="w-8 h-px bg-[#0A0A0A]/30" />
            The Process
            <span className="w-8 h-px bg-[#0A0A0A]/30" />
          </div>
          <h2
            className="text-[#0A0A0A]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Three Steps to
            <br />
            Eating Like a Pro.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-[#0A0A0A]/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="animate-fade-up relative z-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="bg-[#0A0A0A] p-8 h-full relative group hover:bg-[#141414] transition-colors duration-200">
                {/* Step number */}
                <div
                  className="text-[#FFD600]/20 absolute top-4 right-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "5rem",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#FFD600] flex items-center justify-center mb-6">
                  <step.icon size={22} className="text-[#0A0A0A]" />
                </div>

                <h3
                  className="text-white text-2xl mb-4"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  {step.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Subscription Plans ───────────────────────────────────────────
function PlansSection() {
  const plans = [
    {
      name: "Starter",
      meals: 5,
      price: 480,
      perMeal: 96,
      desc: "Perfect for trying MacroMeals or supplementing your current diet.",
      features: ["5 meals per week", "Goal-based macros", "Weekly menu rotation", "Sunday delivery", "Nutrition labels"],
      highlight: false,
    },
    {
      name: "Performance",
      meals: 10,
      price: 880,
      perMeal: 88,
      desc: "The most popular plan. Cover your weekday lunches and dinners.",
      features: ["10 meals per week", "Goal-based macros", "Weekly menu rotation", "Sunday delivery", "Nutrition labels", "Priority selection", "Free insulated bag"],
      highlight: true,
    },
    {
      name: "Elite",
      meals: 14,
      price: 1180,
      perMeal: 84,
      desc: "Full-week coverage for serious athletes who leave nothing to chance.",
      features: ["14 meals per week", "Goal-based macros", "Weekly menu rotation", "Sunday delivery", "Nutrition labels", "Priority selection", "Free insulated bag", "Dedicated nutrition coach"],
      highlight: false,
    },
  ];

  return (
    <section id="plans" className="bg-[#0A0A0A] py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD600]/20 to-transparent" />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="section-label justify-center mb-5">Subscription Plans</div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Fuel Your Week.
            <br />
            <span className="text-[#FFD600]">Own Your Macros.</span>
          </h2>
          <p className="text-white/50 mt-4 text-sm">Cancel or pause anytime. No lock-in contracts.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`animate-fade-up relative flex flex-col ${plan.highlight ? "md:-mt-4 md:mb-4" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.highlight && (
                <div
                  className="bg-[#FFD600] text-[#0A0A0A] text-center py-2 text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  ⚡ Best Value
                </div>
              )}

              <div
                className={`flex flex-col flex-1 p-8 border transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#141414] border-[#FFD600]/50 hover:border-[#FFD600]"
                    : "bg-[#111111] border-white/8 hover:border-white/20"
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3
                    className={`text-2xl mb-1 ${plan.highlight ? "text-[#FFD600]" : "text-white"}`}
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      textTransform: "uppercase",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-white/40 text-sm">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-white/40 text-sm">HKD</span>
                    <span
                      className={`${plan.highlight ? "text-[#FFD600]" : "text-white"}`}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 900,
                        fontSize: "3.5rem",
                        lineHeight: 1,
                      }}
                    >
                      ${plan.price}
                    </span>
                    <span className="text-white/40 text-sm">/week</span>
                  </div>
                  <div
                    className="text-white/40 text-xs mt-1"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    HKD ${plan.perMeal}/meal · {plan.meals} meals
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2
                        size={14}
                        className={plan.highlight ? "text-[#FFD600] shrink-0" : "text-white/30 shrink-0"}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`text-center py-3.5 font-bold text-sm tracking-widest uppercase transition-all duration-160 ${
                    plan.highlight
                      ? "btn-primary"
                      : "btn-outline"
                  }`}
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
                >
                  {plan.highlight ? "Start Now" : "Choose Plan"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Nutrition Philosophy ─────────────────────────────────────────
function NutritionSection() {
  const pillars = [
    { icon: Leaf, label: "Locally Sourced", desc: "We partner with Hong Kong and regional farms to source seasonal produce." },
    { icon: FlameKindling, label: "Zero Preservatives", desc: "No additives, no artificial flavours. Just real food, prepared fresh." },
    { icon: Shield, label: "Allergen Transparent", desc: "Every meal is clearly labelled with all 14 major allergens." },
    { icon: Award, label: "Chef-Certified", desc: "All recipes are developed by certified chefs with sports nutrition credentials." },
  ];

  return (
    <section id="nutrition" className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/nutrition_bg_10213b4b.jpg"
          alt="Fresh ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/88" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div className="animate-fade-up">
            <div className="section-label mb-5">Our Philosophy</div>
            <h2
              className="text-white mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                textTransform: "uppercase",
                lineHeight: 0.95,
              }}
            >
              Real Food.
              <br />
              <span className="text-[#FFD600]">Real Results.</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-6">
              We believe performance nutrition starts with ingredient integrity. Every meal at MacroMeals is built
              from whole, minimally processed foods — no shortcuts, no fillers, no compromise.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Where possible, we source produce locally from Hong Kong and the Greater Bay Area, reducing food
              miles and supporting regional farmers. Our kitchen operates under strict food safety protocols,
              and every batch is tested before it reaches your door.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFD600] flex items-center justify-center">
                <Leaf size={20} className="text-[#0A0A0A]" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Ingredient Transparency</div>
                <div className="text-white/40 text-xs">Full ingredient list on every meal label</div>
              </div>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                className="bg-white/5 border border-white/10 p-6 animate-fade-up hover:border-[#FFD600]/30 transition-colors duration-200"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 bg-[#FFD600]/10 flex items-center justify-center mb-4">
                  <pillar.icon size={18} className="text-[#FFD600]" />
                </div>
                <h4
                  className="text-white text-lg mb-2"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  {pillar.label}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Testimonials ──────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marcus Leung",
      role: "Competitive Powerlifter · 3x HK Regional Champion",
      quote:
        "I've tried every meal prep service in Hong Kong. MacroMeals is the only one that actually understands what a lifter needs. The protein numbers are real, the food tastes like a restaurant, and my prep has never been cleaner.",
      rating: 5,
      weeks: "12 weeks",
      goal: "Bulk",
      avatar: "ML",
    },
    {
      name: "Sarah Chen",
      role: "CrossFit Athlete · CF Open Top 10% Asia",
      quote:
        "Switching to MacroMeals was the best decision I made for my training. I went from spending 4 hours on Sunday meal prepping to spending zero. My energy levels are more consistent and I'm hitting PRs I've been chasing for months.",
      rating: 5,
      weeks: "8 weeks",
      goal: "Maintain",
      avatar: "SC",
    },
    {
      name: "Jason Park",
      role: "Personal Trainer · NSCA-CSCS Certified",
      quote:
        "I recommend MacroMeals to every client who struggles with nutrition consistency. The macro accuracy is impressive — I've spot-checked several meals and they're within 5% of the stated values. That's better than most tracking apps.",
      rating: 5,
      weeks: "6 weeks",
      goal: "Cut",
      avatar: "JP",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#0F0F0F] py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="section-label justify-center mb-5">Results Speak</div>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              textTransform: "uppercase",
              lineHeight: 0.95,
            }}
          >
            Trusted by Athletes
            <br />
            <span className="text-[#FFD600]">Who Don't Settle.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#141414] border border-white/8 p-8 flex flex-col animate-fade-up hover:border-[#FFD600]/20 transition-all duration-200"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#FFD600] fill-[#FFD600]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6 italic">
                "{t.quote}"
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-white/8 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#FFD600] flex items-center justify-center shrink-0">
                  <span
                    className="text-[#0A0A0A] text-xs font-bold"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {t.avatar}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs truncate">{t.role}</div>
                </div>
                <div className="text-right shrink-0">
                  <div
                    className="text-[#FFD600] text-xs"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {t.weeks}
                  </div>
                  <div className="text-white/30 text-xs">{t.goal} phase</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Trust Signals ─────────────────────────────────────────────────
function TrustSection() {
  const badges = [
    { icon: Shield, label: "HKFDA Compliant", sub: "Food safety certified" },
    { icon: Award, label: "Chef Certified", sub: "Sports nutrition trained" },
    { icon: Leaf, label: "No Preservatives", sub: "100% natural ingredients" },
    { icon: Users, label: "500+ Members", sub: "Active weekly subscribers" },
    { icon: Zap, label: "24hr Fresh", sub: "Prepared day before delivery" },
    { icon: CheckCircle2, label: "Allergen Labelled", sub: "All 14 major allergens" },
  ];

  const mediaLogos = [
    "HK Fitness Magazine",
    "South China Morning Post",
    "Tatler Asia",
    "Men's Health HK",
  ];

  return (
    <section id="trust" className="bg-[#0A0A0A] py-20 border-t border-white/8">
      <div className="container">
        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center p-5 bg-[#111111] border border-white/6 animate-fade-up hover:border-[#FFD600]/20 transition-colors duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 bg-[#FFD600]/10 flex items-center justify-center mb-3">
                <badge.icon size={18} className="text-[#FFD600]" />
              </div>
              <div className="text-white text-xs font-semibold mb-1">{badge.label}</div>
              <div className="text-white/35 text-xs">{badge.sub}</div>
            </div>
          ))}
        </div>

        {/* As seen in */}
        <div className="text-center animate-fade-up">
          <div
            className="text-white/25 text-xs tracking-widest uppercase mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            As Featured In
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {mediaLogos.map((logo) => (
              <div
                key={logo}
                className="text-white/20 hover:text-white/40 transition-colors duration-200"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 mt-16 animate-fade-up">
          {[
            { value: "500+", label: "Weekly Subscribers" },
            { value: "98%", label: "On-Time Delivery Rate" },
            { value: "4.9★", label: "Average Rating" },
            { value: "20+", label: "Meals Per Menu Cycle" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#0A0A0A] p-8 text-center">
              <div
                className="text-[#FFD600] mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-xs tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: CTA Section ───────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="cta" className="bg-[#FFD600] py-24 relative overflow-hidden">
      {/* Background diagonal pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      {/* Large background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0A0A0A]/8 select-none pointer-events-none"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(12rem, 25vw, 22rem)",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        EAT
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div
            className="text-[#0A0A0A]/50 text-xs tracking-widest uppercase mb-6 flex items-center gap-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span className="w-8 h-px bg-[#0A0A0A]/40" />
            Ready to Start
          </div>

          <h2
            className="text-[#0A0A0A] mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              textTransform: "uppercase",
              lineHeight: 0.9,
            }}
          >
            Your Macros.
            <br />
            Your Meals.
            <br />
            Your Week.
          </h2>

          <p className="text-[#0A0A0A]/65 text-lg mb-10 max-w-md leading-relaxed">
            Join 500+ athletes who've stopped guessing and started fuelling with precision. First delivery this Sunday.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#plans"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-[#FFD600] px-8 py-4 font-bold text-lg uppercase tracking-wide hover:bg-[#1a1a1a] transition-all duration-160 hover:shadow-2xl active:scale-97"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Lock In Your Meals <ArrowRight size={18} />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-transparent text-[#0A0A0A] border-2 border-[#0A0A0A] px-8 py-4 font-bold text-lg uppercase tracking-wide hover:bg-[#0A0A0A] hover:text-[#FFD600] transition-all duration-160"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Browse Menu
            </a>
          </div>

          <p className="text-[#0A0A0A]/40 text-xs mt-6 tracking-wide">
            No contracts. Cancel or pause anytime. Orders close Thursday midnight.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10: Footer ───────────────────────────────────────────────────────
function Footer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "When is the delivery cutoff?",
      a: "Orders must be placed by Thursday at midnight for Sunday delivery. Late orders are rolled to the following week.",
    },
    {
      q: "What areas do you deliver to?",
      a: "We currently deliver to all areas on Hong Kong Island, Kowloon, and the New Territories. Lantau Island deliveries are available for Elite plan subscribers.",
    },
    {
      q: "Can I pause or cancel my subscription?",
      a: "Yes. You can pause or cancel your subscription at any time via your account dashboard. Changes take effect from the following week.",
    },
    {
      q: "How long do the meals last?",
      a: "Meals are prepared fresh and will keep for 4–5 days refrigerated. We do not recommend freezing as it affects texture and nutritional integrity.",
    },
  ];

  return (
    <footer id="footer" className="bg-[#080808] pt-20 pb-8 border-t border-white/8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[#FFD600] flex items-center justify-center">
                <span
                  className="text-[#0A0A0A] font-black text-lg leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  M
                </span>
              </div>
              <span
                className="text-white text-xl"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, textTransform: "uppercase" }}
              >
                Macro<span className="text-[#FFD600]">Meals</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Precision fuel for athletes who refuse to compromise. Chef-prepared, macro-tracked, delivered weekly.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/8 flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A0A0A] text-white/60 transition-all duration-160"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@macromeals.hk"
                className="w-9 h-9 bg-white/8 flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A0A0A] text-white/60 transition-all duration-160"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+85212345678"
                className="w-9 h-9 bg-white/8 flex items-center justify-center hover:bg-[#FFD600] hover:text-[#0A0A0A] text-white/60 transition-all duration-160"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#why", label: "Why MacroMeals" },
                { href: "#menu", label: "This Week's Menu" },
                { href: "#how", label: "How It Works" },
                { href: "#plans", label: "Subscription Plans" },
                { href: "#nutrition", label: "Nutrition Philosophy" },
                { href: "#testimonials", label: "Athlete Reviews" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#FFD600] text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Info */}
          <div>
            <h4
              className="text-white text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Info
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#", label: "Allergen Information" },
                { href: "#", label: "Nutritional Methodology" },
                { href: "#", label: "Delivery Policy" },
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms & Conditions" },
                { href: "#", label: "Refund Policy" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-[#FFD600] text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4
              className="text-white text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Delivery FAQ
            </h4>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/8 pb-3">
                  <button
                    className="flex items-center justify-between w-full text-left gap-2"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-white/60 text-xs leading-snug hover:text-white/80 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={12}
                      className={`text-[#FFD600] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-white/35 text-xs leading-relaxed mt-2">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 MacroMeals HK Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFD600] rounded-full animate-pulse" />
            <span className="text-white/25 text-xs">
              Accepting orders · Next delivery: Sunday
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <HeroSection />
      <WhySection />
      <MenuSection />
      <HowItWorksSection />
      <PlansSection />
      <NutritionSection />
      <TestimonialsSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
