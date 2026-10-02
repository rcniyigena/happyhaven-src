import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Home, Clock, HeartHandshake, Mail, MapPin, Menu, Phone, PlayCircle, ShieldCheck, Users, X, Wrench, Briefcase, LogIn,
} from "lucide-react";
import { MaintenanceDialog } from "@/components/site/MaintenanceDialog";

const IMG = "https://happyhaven.info/wp-content/images";
const ORIGIN = "https://happyhaven.info";
const CAREERS = "https://recruitingbypaycor.com/career/CareerHome.action?clientId=8a7883c66cfa83b2016d1d3719b71f7c";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Haven — Supportive Homes in Auburn, Maine" },
      { name: "description", content: "Happy Haven builds supportive homes where adults with intellectual and developmental disabilities and autism are inspired to dream and encouraged to live those dreams." },
      { property: "og:title", content: "Happy Haven — Supportive Homes in Auburn, Maine" },
      { property: "og:description", content: "Supporting independence and community growth for adults with intellectual and developmental disabilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${IMG}/our_team.jpg` },
      { name: "twitter:image", content: `${IMG}/our_team.jpg` },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Who we are", href: "#Mission" },
  { label: "Founders", href: "#founders" },
  { label: "Services", href: "#ourService" },
  { label: "Team", href: "#Team" },
  { label: "Supporters", href: "#Supporters" },
  { label: "Our Herald", href: `${ORIGIN}/our_herald` },
  { label: "Gallery", href: `${ORIGIN}/our_gallery` },
];

const SERVICES = [
  { icon: Users, title: "Program supervisors", text: "A Program Supervisor is there to give the homes extra support. The staff member in this position provides daily oversight, including on-site support and supervision of residents." },
  { icon: ShieldCheck, title: "High Risk Behavioral Support", text: "We pride ourselves in being the only agency in our area that serves individuals with intellectual and developmental disabilities who have high-risk behaviors. We don’t deny services to individuals who have committed…" },
  { icon: HeartHandshake, title: "Personal care", text: "Consumers are motivated to exercise their self-determination each day by having the right to control their personal resources and implement the goals that they chose. Staff will help consumers complete daily tasks…" },
];

const VALUES = [
  ["One Team", "Make each other great"],
  ["Respect", "Put people first"],
  ["Integrity", "Honesty, principle-oriented"],
  ["Heart", "Compassion & dedicated to serve"],
  ["Trust", "Reliability"],
  ["Excellence", "Deliver exceptional results"],
  ["Innovative", "Forward-thinking solutions to challenges & demands"],
  ["7 C’s", "Effective communication"],
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-colors ${scrolled ? "border-b border-border bg-background/90 backdrop-blur" : "bg-background"}`}>
      <div className="hidden border-b border-border bg-deep text-deep-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:(207)241-0274" className="inline-flex items-center gap-1.5 hover:text-accent"><Phone className="size-3.5" />(207) 241-0274</a>
            <a href="mailto:info@happyhaven.llc" className="inline-flex items-center gap-1.5 hover:text-accent"><Mail className="size-3.5" />info@happyhaven.llc</a>
            <span className="inline-flex items-center gap-1.5 opacity-80"><Clock className="size-3.5" />Mon – Fri: 8AM – 5PM</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`${ORIGIN}:2096/`} className="hover:text-accent">Staff e-mail</a>
            <a href={`${ORIGIN}/service-portal/auth-login`} className="hover:text-accent">Service portal</a>
            <MaintenanceDialog><button className="hover:text-accent">Maintenance portal</button></MaintenanceDialog>
          </div>
        </div>
      </div>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span aria-hidden className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground"><Home className="size-5" /></span>
          <span className="font-display text-xl font-semibold tracking-tight">Happy Haven</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={CAREERS} className="btn btn-primary hidden sm:inline-flex">Apply to work with us</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="grid size-11 place-items-center rounded-full border border-border lg:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {NAV.map((n) => (
              <li key={n.label}><a onClick={() => setOpen(false)} href={n.href} className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary">{n.label}</a></li>
            ))}
            <li><a href={`${ORIGIN}/service-portal/auth-login`} className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary">Service portal</a></li>
            <li><MaintenanceDialog><button className="w-full rounded-lg px-3 py-3 text-left font-medium hover:bg-secondary">Maintenance portal</button></MaintenanceDialog></li>
            <li><a href={`${ORIGIN}:2096/`} className="block rounded-lg px-3 py-3 font-medium hover:bg-secondary">Staff e-mail</a></li>
            <li className="pt-2"><a href={CAREERS} className="btn btn-primary w-full">Apply to work with us</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">Skip to content</a>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Auburn, Maine · Since 2018</p>
            <h1 className="mt-4 font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
              Supporting independence. <em className="font-normal text-primary">Growing community.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Supporting and nurturing independence is a big part of what we do here at Happyhaven. An important part of living a fulfilling life is feeling as if you’re part of something larger.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#ourService" className="btn btn-primary">Explore our services <ArrowRight className="size-4" /></a>
              <a href="https://youtu.be/TuguoOAq_FY" className="btn btn-outline"><PlayCircle className="size-4" /> Watch our story</a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-2 gap-6 border-t border-border pt-6">
              <div><dt className="text-sm text-muted-foreground">Homes</dt><dd className="font-display text-4xl font-medium">30+</dd></div>
              <div><dt className="text-sm text-muted-foreground">Dedicated professionals</dt><dd className="font-display text-4xl font-medium">200+</dd></div>
            </dl>
          </div>
          <div className="relative">
            <img src={`${IMG}/our_team.jpg`} alt="The Happy Haven team" className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]" />
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border bg-card p-5 shadow-soft sm:left-auto sm:max-w-xs">
              <p className="font-display text-lg leading-snug">“Inspired to dream and encouraged to live those dreams.”</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section id="Mission" className="bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHead eyebrow="Who we are" title="A purpose that guides every home" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl bg-card p-8 shadow-soft md:p-10">
                <p className="eyebrow">Mission · Why we exist</p>
                <p className="mt-4 text-lg leading-relaxed">Committed to building supportive homes where individuals with intellectual and developmental disabilities & autism are <strong className="text-primary">inspired</strong> to dream and <strong className="text-primary">encouraged</strong> to live those dreams by being mentored and coached by our dedicated support professionals.</p>
              </article>
              <article className="rounded-3xl bg-deep p-8 text-deep-foreground md:p-10">
                <p className="eyebrow">Vision · Where we are headed</p>
                <p className="mt-4 text-lg leading-relaxed">To create a world where every individual with intellectual and developmental disabilities is embraced, celebrated, and empowered to live a life filled with joy, purpose, and fulfillment.</p>
              </article>
            </div>
            <div className="mt-16">
              <p className="eyebrow">Values · How we serve + deliver care</p>
              <ul className="mt-6 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {VALUES.map(([t, d]) => (
                  <li key={t} className="bg-card p-6 transition-colors hover:bg-background">
                    <h3 className="font-display text-xl font-medium">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section id="founders" className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <img src={`${IMG}/amanda_gael.png`} alt="Founders Gael and Amanda Karomba" loading="lazy" className="w-full rounded-[2rem] bg-secondary object-cover lg:sticky lg:top-28" />
          <div>
            <SectionHead eyebrow="Our founders" title="Gael & Amanda Karomba" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>In 2018, Gael and Amanda Karomba established Happy Haven to address the persistent demand for section 21 waiver services catering to Adults with Intellectual and Developmental Disabilities. Drawing from their extensive field experience and a heartfelt commitment to serving others, they courageously opened the first home. The rapid growth of Happy Haven mirrored the significant need for such services. However, the founders, driven by their dedication, aimed to ensure that the mission and vision were upheld daily, maintaining the highest quality of services.</p>
              <p>Today, Happy Haven operates over 30 homes and employs a team of more than 200 dedicated professionals. Gael and Amanda find inspiration in the unwavering dedication of the management team and all stakeholders, who collectively contribute to making Happy Haven a secure, thriving, and positive environment for everyone involved.</p>
              <p>Beyond the walls of Happy Haven, Gael and Amanda extend their commitment to the community by actively supporting various non-profit organizations. Their efforts in community outreach and sponsorship reflect a deep-seated belief in fostering a more inclusive and supportive society. Through these partnerships, Happy Haven not only enhances the lives of its residents but also contributes significantly to the broader community, building bridges and creating opportunities for meaningful engagement and support.</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="ourService" className="bg-deep py-20 text-deep-foreground md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow="Our services" title="Care shaped around each person" />
              <a href={`${ORIGIN}/ourPrograms/`} className="btn btn-on-deep">View all programs <ArrowUpRight className="size-4" /></a>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {SERVICES.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card-lift flex flex-col rounded-3xl bg-card p-8 text-card-foreground">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary"><Icon className="size-6" /></span>
                  <h3 className="mt-6 font-display text-2xl font-medium">{title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{text}</p>
                  <a href={`${ORIGIN}/ourPrograms/`} className="mt-6 inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all">Read more <ArrowRight className="size-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Gallery */}
        <section id="Team" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Our team" title="The people behind every home" />
            <a href={`${ORIGIN}/our_gallery`} className="btn btn-outline">Open the gallery <ArrowUpRight className="size-4" /></a>
          </div>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4">
            {[
              ["3_3.jpg", "col-span-2 row-span-2"],
              ["17.jpg", ""],
              ["18.jpg", ""],
              ["10.jpg", ""],
              ["11.jpg", ""],
            ].map(([src, cls]) => (
              <img key={src} src={`${IMG}/${src}`} alt="Happy Haven community moment" loading="lazy" className={`h-full w-full rounded-2xl object-cover ${cls}`} />
            ))}
          </div>
        </section>

        {/* Herald + Contact */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:pb-28">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
              <p className="eyebrow">Our Herald</p>
              <h2 className="mt-3 font-display text-3xl font-medium">Read the latest newsletter</h2>
              <p className="mt-3 text-muted-foreground">News, stories, and updates from across our homes.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`${ORIGIN}/our_herald`} className="btn btn-primary">Our Herald <ArrowRight className="size-4" /></a>
                <a href={`${ORIGIN}/wp-content/Herald/HHH_0820.pdf`} className="btn btn-outline">Download PDF</a>
              </div>
            </div>
            <div className="rounded-3xl bg-secondary p-8 md:p-10">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-medium">Let’s get in touch</h2>
              <p className="mt-3 text-muted-foreground">Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.</p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-3"><MapPin className="mt-0.5 size-5 shrink-0 text-primary" />158 Court Street, Auburn, Maine 04210, United States</li>
                <li><a href="tel:(207)241-0274" className="flex gap-3 hover:text-primary"><Phone className="size-5 text-primary" />(207) 241-0274</a></li>
                <li><a href="mailto:info@happyhaven.info" className="flex gap-3 hover:text-primary"><Mail className="size-5 text-primary" />info@happyhaven.info</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Supporters */}
        <section id="Supporters" className="border-y border-border py-14">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
            <p className="eyebrow">Our supporters</p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {["macsp.png", "LAMCC.png", "ANCOR.png"].map((s) => (
                <img key={s} src={`${IMG}/${s}`} alt="Supporter logo" loading="lazy" className="h-14 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-2xl font-semibold">Happy Haven</p>
            <p className="mt-3 text-sm leading-relaxed opacity-80">At Happyhaven, integrity is the foundation upon which we build our business. We firmly believe that honesty, transparency, and ethical conduct are essential in all our interactions.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Our services</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li><a href={`${ORIGIN}/ourPrograms/`} className="hover:text-accent">Program supervisors</a></li>
              <li><a href={`${ORIGIN}/ourPrograms/`} className="hover:text-accent">High Risk Behavioral Support</a></li>
              <li><a href={`${ORIGIN}/ourPrograms/`} className="hover:text-accent">Positive support plan / crisis prevention plan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact us</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>158 Court Street, Auburn, Maine 04210, United States</li>
              <li><a href="tel:(207)241-0274" className="hover:text-accent">(207) 241-0274</a></li>
              <li><a href="mailto:info@happyhaven.info" className="hover:text-accent">info@happyhaven.info</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li><a href="#top" className="hover:text-accent">Home</a></li>
              <li><a href="#Mission" className="hover:text-accent">Who we are</a></li>
              <li><a href="#Mission" className="hover:text-accent">Our values</a></li>
              <li><MaintenanceDialog><button className="inline-flex items-center gap-1.5 hover:text-accent"><Wrench className="size-3.5" />Maintenance portal</button></MaintenanceDialog></li>
              <li><a href={CAREERS} className="inline-flex items-center gap-1.5 hover:text-accent"><Briefcase className="size-3.5" />Apply to work with us</a></li>
              <li><a href={`${ORIGIN}/service-portal/auth-login`} className="inline-flex items-center gap-1.5 hover:text-accent"><LogIn className="size-3.5" />Staff portal</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-deep-foreground/15">
          <p className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-70">© Happyhaven. All rights reserved. Proudly designed by <a href="https://spacewave.rw" className="underline hover:text-accent">spaceWave Technologies LLC</a>.</p>
        </div>
      </footer>
    </div>
  );
}
