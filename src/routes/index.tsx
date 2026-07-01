import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Shield,
  Zap,
  Lock,
  Wallet,
  ArrowRight,
  Coins,
  FileCheck,
  CheckCircle2,
  Send,
  ShieldCheck,
  Mail,
  MessageCircle,
  Twitter,
  Github,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-guardian.jpg";

const WHATSAPP_URL = "https://wa.me/17868848862?text=Hi%20VaultBridgeFi%2C%20I%27d%20like%20to%20apply%20for%20an%20XRP-backed%20loan.";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* -------------------------------- Primitives ------------------------------ */

function GradientButton({
  children,
  variant = "primary",
  href = "#",
  target,
  rel,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 ${className}`}
        style={{
          background: "var(--gradient-primary)",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        <span
          className="absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-100"
          style={{ background: "var(--gradient-primary)" }}
        />
      </a>
    );
  }
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-white/10 ${className}`}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest text-primary uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
      {children}
    </div>
  );
}

/* ---------------------------------- Nav ----------------------------------- */

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            VaultBridge<span className="text-primary">Fi</span>
          </span>
        </a>
      </div>
    </header>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16">
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* Scanning line */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 h-px opacity-60"
        style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.25 305 / 0.8), transparent)" }}
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-accent/30 blur-[120px]" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Don't Sell Your XRP — Use It</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Unlock <span className="text-gradient">Liquidity</span> Using Crypto (XRP) for 1.8% yearly. Interest
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            don’t sell the dip, take a crypto backed loan and enjoy the freedom of cryptocurrency
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GradientButton href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Apply for a Loan</GradientButton>
            <GradientButton href="#how" variant="ghost">Learn how it works</GradientButton>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
          >
            {[
              { label: "Approvals", value: "< 1h", icon: Zap },
              { label: "Blockchain-secured", value: "100%", icon: ShieldCheck },
              { label: "Same-day funding", value: "24/7", icon: Coins },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <s.icon className="mb-2 h-4 w-4 text-primary" />
                <div className="font-display text-2xl font-bold md:text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative aspect-square w-full max-w-lg">
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ background: "var(--gradient-primary)", opacity: 0.4 }}
            />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl glow-ring"
            >
              <img
                src={heroImg}
                alt="Armored guardian holding an XRP vault shield"
                width={1536}
                height={1536}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card absolute -left-4 top-1/4 rounded-2xl p-3 shadow-xl md:-left-8"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20">
                  <Wallet className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Loan approved</div>
                  <div className="text-sm font-semibold">$42,500 USDC</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass-card absolute -right-2 bottom-8 rounded-2xl p-3 shadow-xl md:-right-6"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Collateral secured</div>
                  <div className="font-mono text-sm font-semibold">120,000 XRP</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <a href="#about" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}

/* --------------------------------- About ---------------------------------- */

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>About VaultBridgeFi</SectionLabel>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Built for XRP holders who <span className="text-gradient">refuse to sell</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              VaultBridgeFi enables XRP holders to unlock liquidity without selling their digital assets. Our blockchain-powered lending platform delivers secure collateral-backed loans, fast approvals, and a seamless borrowing experience.
            </p>
          </div>
          <div className="glass-card relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
            <Sparkles className="h-8 w-8 text-primary" />
            <h3 className="mt-4 font-display text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground italic">
              "To provide secure, transparent, and accessible XRP-backed lending solutions that empower investors to access capital while maintaining exposure to their crypto assets."
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {[
                { k: "$2B+", v: "Volume processed" },
                { k: "50k+", v: "Loans issued" },
                { k: "99.9%", v: "Uptime" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ------------------------------- How It Works ----------------------------- */

const steps = [
  { icon: Wallet, title: "Deposit XRP", desc: "Lock your XRP securely as collateral inside our audited vault contract." },
  { icon: FileCheck, title: "Apply for a Loan", desc: "Choose your loan amount, currency, and term. Submit in under two minutes." },
  { icon: CheckCircle2, title: "Get Approved", desc: "Our engine reviews your request and confirms terms — typically within the hour." },
  { icon: Send, title: "Receive Funds", desc: "Funds are dispatched directly to your wallet or bank the same day." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Four steps to <span className="text-gradient">unlock capital</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary via-primary/50 to-transparent lg:left-1/2 lg:top-0 lg:h-px lg:w-[calc(100%-4rem)] lg:-translate-x-1/2 lg:bg-gradient-to-r" />

          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card relative rounded-2xl p-6"
              >
                <div className="absolute -top-4 left-6 font-mono text-xs tracking-widest text-primary">
                  STEP 0{i + 1}
                </div>
                <div
                  className="mb-4 grid h-14 w-14 place-items-center rounded-2xl animate-pulse-glow"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





/* --------------------------------- Contact -------------------------------- */

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.005c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411zm-8.475 18.293c-1.826 0-3.612-.489-5.171-1.413l-.371-.22-3.844 1.002 1.028-3.734-.242-.386a9.86 9.86 0 01-1.523-5.29c.001-5.45 4.457-9.885 9.929-9.885 2.65 0 5.14 1.031 7.011 2.897 1.87 1.867 2.902 4.352 2.9 6.994-.002 5.451-4.458 9.887-9.917 9.887z"/>
    </svg>
  );
}

function Contact() {
  const channels = [
    {
      id: "whatsapp",
      name: "WhatsApp",
      handle: "+1 (786) 884-8862",
      blurb: "Fastest response — average under 5 minutes.",
      href: WHATSAPP_URL,
      Icon: WhatsAppIcon,
      accent: "linear-gradient(135deg, #25D366, #128C7E)",
    },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-12" style={{ boxShadow: "var(--shadow-elevated)" }}>
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Apply now</SectionLabel>
              <h2 className="font-display text-4xl font-bold md:text-5xl">
                Apply on <span className="text-gradient">WhatsApp</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                All loan applications are handled personally by our specialists through secure, encrypted messaging. We'll walk you through collateral, terms, and same-day funding.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "No forms — just a private chat with a real specialist",
                  "End-to-end encrypted conversation",
                  "Approval and terms confirmed in under an hour",
                  "Funds released same business day",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-xs text-muted-foreground">
                Support hours: 24/7 · Typical first reply within 5 minutes
              </div>
            </div>

            <div className="grid gap-4">
              {channels.map((c) => (
                <motion.a
                  key={c.id}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background/40 p-6 backdrop-blur-md transition-colors hover:border-primary/40"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                    style={{ background: c.accent }}
                  />
                  <div className="relative flex items-start gap-5">
                    <div
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white"
                      style={{ background: c.accent, boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
                    >
                      <c.Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl font-semibold">Apply via {c.name}</h3>
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-primary">
                          Live
                        </span>
                      </div>
                      <div className="mt-1 font-mono text-sm text-muted-foreground">{c.handle}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Open {c.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}

              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/5">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">General inquiries only</div>
                    <div className="truncate text-sm font-medium">hello@vaultbridge.fi</div>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Email is not used for loan applications — please use WhatsApp above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* --------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">
                VaultBridge<span className="text-primary">Fi</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Blockchain-powered XRP collateral-backed lending. Don't sell your XRP — use it.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Github, MessageCircle].map((I, idx) => (
                <a key={idx} href="#" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors hover:border-primary/50 hover:text-primary">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#how" className="text-muted-foreground hover:text-foreground">How it works</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Apply</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">Legal</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Risk Disclosure</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} VaultBridgeFi. All rights reserved.</div>
          <div className="max-w-xl text-center md:text-right">
            Crypto-collateralized lending involves risk. Digital assets are volatile — please review our risk disclosure before borrowing.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- Page ---------------------------------- */

function Landing() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
