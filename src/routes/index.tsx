import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Shield,
  Zap,
  Lock,
  Users,
  Wallet,
  ArrowRight,
  Coins,
  FileCheck,
  CheckCircle2,
  Send,
  ShieldCheck,
  KeyRound,
  Fingerprint,
  Radar,
  Copy,
  TrendingUp,
  Mail,
  MessageCircle,
  Twitter,
  Github,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-guardian.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Landing,
});

/* -------------------------------- Primitives ------------------------------ */

function GradientButton({
  children,
  variant = "primary",
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <a
        href={href}
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
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#security" className="hover:text-foreground transition-colors">Security</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <GradientButton href="#contact" className="hidden md:inline-flex">Apply now</GradientButton>
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
            Unlock <span className="text-gradient">Liquidity</span> Without Selling Your XRP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            Access fast, secure collateral-backed loans while keeping full ownership of your XRP assets. Blockchain-powered, transparent, and built for serious holders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GradientButton href="#contact">Apply for a Loan</GradientButton>
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

/* -------------------------------- Services -------------------------------- */

const services = [
  { icon: Coins, title: "XRP Collateral Loans", desc: "Borrow against your XRP without triggering taxable events." },
  { icon: Zap, title: "Fast Loan Approvals", desc: "AI-assisted underwriting reviews and approves in under an hour." },
  { icon: ShieldCheck, title: "Secure Blockchain Infrastructure", desc: "Multi-sig custody with on-chain proof of reserves." },
  { icon: Users, title: "Referral Rewards Program", desc: "Earn recurring rewards for every borrower you refer." },
  { icon: Wallet, title: "Same-Day Funding", desc: "Funds arrive in your wallet the same business day, guaranteed." },
  { icon: Lock, title: "Asset Protection & Security", desc: "Institutional cold storage with 24/7 monitoring." },
];

function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>What we offer</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            A full stack of <span className="text-gradient">crypto-native lending</span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass-card relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div
                className="mb-5 grid h-12 w-12 place-items-center rounded-xl transition-transform group-hover:scale-110"
                style={{ background: "var(--gradient-primary)", boxShadow: "0 8px 30px -8px oklch(0.58 0.28 295 / 0.7)" }}
              >
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
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

/* ------------------------------ Why Choose Us ----------------------------- */

const whys = [
  { icon: Lock, title: "Keep Your XRP Ownership", desc: "Your XRP stays yours — no forced sales, no missed upside." },
  { icon: Zap, title: "Fast Funding", desc: "Same-day disbursement to wallet or bank." },
  { icon: FileCheck, title: "Transparent Terms", desc: "Clear rates, no hidden fees, on-chain auditability." },
  { icon: ShieldCheck, title: "Advanced Security", desc: "Bank-grade encryption and multi-sig custody." },
  { icon: Radar, title: "Blockchain Verification", desc: "Proof of reserves published on-chain, 24/7." },
  { icon: Users, title: "Reliable Support", desc: "Human specialists available around the clock." },
];

function Why() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <SectionLabel>Why Choose VaultBridgeFi</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            The <span className="text-gradient">standard</span> for XRP lending
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whys.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card group rounded-2xl p-6 transition-all hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Security -------------------------------- */

const securityPillars = [
  { icon: KeyRound, title: "End-to-end encryption", desc: "TLS 1.3 in transit, AES-256 at rest." },
  { icon: ShieldCheck, title: "Multi-layer security", desc: "Defense in depth across app, network, and infra." },
  { icon: Radar, title: "Blockchain verification", desc: "On-chain proof of reserves updated every block." },
  { icon: Lock, title: "Secure asset custody", desc: "Institutional cold storage with insured wallets." },
  { icon: Fingerprint, title: "Fraud prevention", desc: "ML-based anomaly detection and device fingerprinting." },
];

function Security() {
  return (
    <section id="security" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Security first</SectionLabel>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Guarded by <span className="text-gradient">code, cryptography, and humans</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every VaultBridgeFi loan is protected by a layered defense system audited by leading blockchain security firms.
            </p>
            <div className="mt-8 space-y-3">
              {securityPillars.map((p) => (
                <div key={p.title} className="glass rounded-xl p-4 transition-colors hover:border-primary/40">
                  <div className="flex items-start gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                      <p.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-sm text-muted-foreground">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: layered rings */}
          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-primary/30"
                style={{ inset: `${i * 12}%` }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary animate-pulse-glow" />
              </motion.div>
            ))}
            <div
              className="glass-card grid h-40 w-40 place-items-center rounded-full"
              style={{ boxShadow: "var(--shadow-glow-lg)" }}
            >
              <ShieldCheck className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Referral -------------------------------- */

function Referral() {
  const [copied, setCopied] = useState(false);
  const link = "vaultbridge.fi/r/YOUR-CODE";
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Referral program</SectionLabel>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Earn <span className="text-gradient">rewards</span> by referring others
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Invite friends and earn recurring rewards whenever they successfully secure a loan through VaultBridgeFi.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "1.5%", v: "of loan value" },
                { k: "Lifetime", v: "recurring payouts" },
                { k: "Instant", v: "credit on-chain" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl p-4">
                  <div className="font-display text-xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-6" style={{ boxShadow: "var(--shadow-elevated)" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Rewards balance</div>
                <div className="mt-1 font-display text-3xl font-bold text-gradient">$12,480.55</div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                <TrendingUp className="h-3 w-3" /> +18.2%
              </div>
            </div>

            <div className="mt-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Your referral link</div>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-background/60 p-2">
                <code className="flex-1 truncate px-2 font-mono text-sm">{link}</code>
                <button
                  onClick={() => { navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
                  className="flex shrink-0 items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Copy className="h-3 w-3" /> {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Recent referrals</div>
              <div className="space-y-2">
                {[
                  { n: "0x8f...a20e", a: "+ $420.00", s: "Funded" },
                  { n: "0x24...b7c1", a: "+ $1,208.55", s: "Funded" },
                  { n: "0xe1...9d44", a: "Pending", s: "Review" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <div className="flex items-center gap-3">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-primary/20 font-mono text-xs text-primary">
                        {r.n.slice(2, 4).toUpperCase()}
                      </div>
                      <div className="font-mono text-xs">{r.n}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold">{r.a}</div>
                      <div className="text-xs text-muted-foreground">{r.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  { q: "How do XRP collateral loans work?", a: "You deposit XRP into VaultBridgeFi's audited vault as collateral. Based on the current value of your XRP and your chosen loan-to-value ratio, we issue a loan in USD, USDC, or stablecoin of your choice. Repay the loan to reclaim your full XRP position." },
  { q: "Do I keep ownership of my XRP?", a: "Yes. Your XRP is held in secure multi-sig custody and remains yours throughout the loan. You never sell, so you retain all upside and avoid taxable events in many jurisdictions." },
  { q: "How long does approval take?", a: "Most approvals complete in under one hour. Funds are typically disbursed the same business day once approved." },
  { q: "What happens when I repay the loan?", a: "On repayment of principal plus interest, your XRP collateral is released back to your wallet immediately." },
  { q: "Is my XRP secure?", a: "Absolutely. We use institutional-grade cold storage, multi-sig wallets, on-chain proof of reserves, and are audited by leading blockchain security firms." },
  { q: "What are the loan requirements?", a: "You'll need a compatible XRP wallet, a minimum collateral deposit (varies by loan size), and completion of our standard KYC process." },
];

function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <SectionLabel>Frequently asked</SectionLabel>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Everything you need to <span className="text-gradient">know</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-card rounded-2xl border-0 px-6"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* --------------------------------- Contact -------------------------------- */

const WHATSAPP_URL = "https://wa.me/10000000000?text=Hi%20VaultBridgeFi%2C%20I%27d%20like%20to%20apply%20for%20an%20XRP-backed%20loan.";
const TELEGRAM_URL = "https://t.me/VaultBridgeFi";

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
      handle: "+1 (000) 000-0000",
      blurb: "Fastest response — average under 5 minutes.",
      href: WHATSAPP_URL,
      Icon: WhatsAppIcon,
      accent: "linear-gradient(135deg, #25D366, #128C7E)",
    },
    {
      id: "telegram",
      name: "Telegram",
      handle: "@VaultBridgeFi",
      blurb: "Prefer Telegram? Message our loan desk any time.",
      href: TELEGRAM_URL,
      Icon: Send,
      accent: "linear-gradient(135deg, #2AABEE, #229ED9)",
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
                Apply on <span className="text-gradient">WhatsApp or Telegram</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                All loan applications are handled personally by our specialists through encrypted messaging. Pick your channel — we'll walk you through collateral, terms, and same-day funding.
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
                  Email is not used for loan applications — please use WhatsApp or Telegram above.
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
              <li><a href="#services" className="text-muted-foreground hover:text-foreground">Services</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-foreground">Security</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></li>
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
        <Services />
        <HowItWorks />
        <Why />
        <Security />
        <Referral />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
