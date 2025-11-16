import Image from "next/image";

const highlights = [
  {
    title: "Uncapped Fibre Internet",
    description: "Symmetric 500 Mbps backbone with power backup for zero downtime.",
  },
  {
    title: "Prime Lagos Location",
    description: "Victoria Island hub with 24/7 access, guarded parking, and lounge service.",
  },
  {
    title: "Business Concierge",
    description: "Printing, scanning, visa applications, and digital ID KYC support on-site.",
  },
];

const services = [
  {
    title: "Executive Work Pods",
    description:
      "Acoustic pods with ergonomic chairs, dual monitors, and secure lockers for consultants and founders on the move.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3.75V20.25M15 3.75V20.25M3.75 9H20.25M3.75 15H20.25"
        />
      </svg>
    ),
  },
  {
    title: "E-Sports Arena",
    description:
      "12-seat competitive gaming lounge with RTX graphics, mechanical keyboards, and curated tournaments every weekend.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 4.5h13.5a2.25 2.25 0 0 1 2.25 2.25v6a2.25 2.25 0 0 1-2.25 2.25h-1.5l1.5 4.5h-3l-1.5-4.5h-3l-1.5 4.5h-3l1.5-4.5h-1.5A2.25 2.25 0 0 1 3 12.75v-6A2.25 2.25 0 0 1 5.25 4.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Creative Studio",
    description:
      "Podcast booth, 6K-ready editing suite, and green screen cyclorama for content creators and media pros.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v18m6-9H6m13.5 0A7.5 7.5 0 1 0 4.5 12a7.5 7.5 0 0 0 15 0Z"
        />
      </svg>
    ),
  },
];

const memberships = [
  {
    name: "Pulse Hourly",
    price: "₦1,500/hr",
    description: "Walk-in access, high-speed browsing, refreshments on demand.",
    perks: ["No reservation required", "Secure Wi-Fi & LAN", "Pay-as-you-go printing"],
  },
  {
    name: "Growth Pro",
    price: "₦55,000/mo",
    description: "Perfect for founders and remote teams needing a consistent base.",
    perks: [
      "Unlimited weekday access",
      "Dedicated locker + mail handling",
      "5 complimentary studio hours",
      "Priority concierge support",
    ],
    featured: true,
  },
  {
    name: "Night Owl",
    price: "₦12,500/night",
    description: "Ideal for developers and gamers who thrive after dark.",
    perks: [
      "8pm – 6am unlimited access",
      "Energy bar & Nigerian coffee",
      "Esports arena priority slots",
    ],
  },
];

const testimonials = [
  {
    quote:
      "CyberWave Lounge keeps our Lagos engineering contractors productive during blackouts. Reliable fibre and 24/7 support make it our go-to satellite office.",
    name: "Adaobi E.",
    role: "Expansion Lead, Pan-African Fintech",
  },
  {
    quote:
      "From podcasting to live streams, their creative studio setup is plug-and-play. It beats renting multiple spaces across the island.",
    name: "Tayo B.",
    role: "Content Strategist & Producer",
  },
  {
    quote:
      "LAN tournaments here feel world-class. The rigs, chairs, and shoutcasting corner rival what we see abroad.",
    name: "Chima U.",
    role: "Team Captain, Naija Esports League",
  },
];

const faqs = [
  {
    question: "Do you offer corporate retainers?",
    answer:
      "Yes. Teams can reserve dedicated pods, secure VPN tunnels, and custom support hours. Corporate retainers start from ₦380,000 monthly for 6 seats.",
  },
  {
    question: "Is there backup power and cooling?",
    answer:
      "The lounge runs on dual solar-inverter systems with automatic generator failover, plus climate control and 24/7 monitoring.",
  },
  {
    question: "Can I host events or trainings?",
    answer:
      "Our 40-seat digital classroom includes 4K projection, hybrid conferencing support, and catering coordination with 2 weeks notice.",
  },
];

export default function Home() {
  return (
    <div className="relative bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/30 blur-[160px]" />
        <div className="absolute right-[-10%] top-1/3 h-[480px] w-[480px] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-20%] h-[360px] w-[360px] rounded-full bg-fuchsia-500/20 blur-[160px]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10 lg:px-12">
        <header className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-emerald-200 ring-1 ring-inset ring-white/20 backdrop-blur">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Lagos Victoria Island • Open 24/7
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              CyberWave Lounge
              <span className="block bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                Nigeria&apos;s Premium Cyber Cafe Experience
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-7 text-white/70 sm:text-xl">
              Power your hustle, your squad, and your creativity with fibre-fast internet, immersive
              gaming, and concierge-level digital services built for Nigeria&apos;s modern workforce.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/2348012345678"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-emerald-400"
              >
                Book A Tour
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-emerald-400 hover:text-emerald-200"
              >
                View Memberships
              </a>
            </div>

            <dl className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
                >
                  <dt className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    {item.title}
                  </dt>
                  <dd className="mt-2 text-sm text-white/70">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-2xl shadow-emerald-500/20 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Modern cyber cafe workspace in Lagos"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 space-y-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <p className="text-sm font-semibold text-white">Immersive Work + Play</p>
              <p className="text-xs text-white/70">
                Ultra-fast connectivity, locally roasted coffee, and concierge tech support on demand.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Designed for innovators, gamers, and creators.
            </h2>
            <p className="text-white/70">
              CyberWave Lounge fuses a premium cyber cafe with a co-creation hub. Whether you&apos;re
              debugging fintech rails, running a 12-hour hack sprint, or livestreaming across Africa,
              our spaces adapt to your flow.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                  Always-On Power
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Solar-inverter hybrid systems and silent backup generators keep you live during NEPA
                  outages.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-500/40 bg-sky-500/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-200">
                  Security First
                </p>
                <p className="mt-2 text-sm text-white/70">
                  CCTV, biometric entry, and dedicated lockers ensure your hardware and data stay
                  protected.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-emerald-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur lg:p-16"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Memberships built for Nigerian schedules.
              </h2>
              <p className="text-white/70">
                Flexible hourly passes, monthly retainers, and overnight bundles. All plans include
                lightning-fast internet, concierge support, and discounted refreshments.
              </p>
            </div>
            <a
              href="mailto:hello@cyberwavelounge.ng"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-emerald-400"
            >
              Request Custom Quote
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {memberships.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border border-white/10 bg-black/40 p-8 transition hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/20 ${
                  plan.featured ? "ring-2 ring-emerald-400" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-200">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-4 text-3xl font-bold text-emerald-300">{plan.price}</p>
                <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm text-white/80">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <svg
                        className="mt-1 h-4 w-4 text-emerald-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.25 7.3a1 1 0 0 1-1.42.01l-3.25-3.2a1 1 0 1 1 1.4-1.43l2.53 2.49 6.54-6.59a1 1 0 0 1 1.44-.004Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/2348012345678"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition ${
                    plan.featured
                      ? "bg-emerald-500 text-black hover:bg-emerald-400"
                      : "border border-white/20 text-white hover:border-emerald-300 hover:text-emerald-100"
                  }`}
                >
                  Secure Your Spot
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by Lagos leaders.</h2>
            <p className="text-white/70">
              From fintech scale-ups to content studios and pro gaming leagues, CyberWave Lounge is
              the place where Nigeria&apos;s smart operators plug in, collaborate, and win.
            </p>
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur"
                >
                  <p className="italic leading-relaxed text-white/90">“{testimonial.quote}”</p>
                  <footer className="mt-4 text-xs uppercase tracking-wide text-emerald-200">
                    {testimonial.name} — {testimonial.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-0">
            <Image
              src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80"
              alt="Cyber cafe gaming arena"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
                Weekly Skill Clinics
              </p>
              <p className="mt-2 text-sm text-white/80">
                Join UI/UX bootcamps, cybersecurity drills, and esports coaching hosted by top
                Nigerian mentors.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur lg:grid-cols-[0.9fr,1.1fr] lg:gap-12 lg:p-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="text-white/70">
              Need specifics about bookings, equipment, or team passes? Browse the answers below or
              connect with our concierge team.
            </p>
            <a
              href="tel:+2348012345678"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-200 transition hover:text-emerald-100"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 0 0 1.5-1.5v-2.52a1.5 1.5 0 0 0-1.257-1.48l-4.455-.74a1.5 1.5 0 0 0-1.497.732l-.997 1.66a11.927 11.927 0 0 1-6.262-6.262l1.66-.997a1.5 1.5 0 0 0 .732-1.497l-.74-4.455A1.5 1.5 0 0 0 6.27 3.75H3.75a1.5 1.5 0 0 0-1.5 1.5V6.75Z"
                />
              </svg>
              Call concierge
            </a>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur transition hover:border-emerald-400/40"
              >
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-white">
                  {faq.question}
                  <span className="ml-4 text-emerald-300 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-black/40 px-6 py-12 text-sm text-white/70 sm:px-10 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-300">CyberWave Lounge</p>
            <p className="text-base font-semibold text-white">
              15A Akin Adesola Street, Victoria Island, Lagos, Nigeria
            </p>
            <p>hello@cyberwavelounge.ng • +234 801 234 5678</p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="https://goo.gl/maps/XYZ"
              className="transition hover:text-emerald-200"
            >
              Get Directions
            </a>
            <a href="https://instagram.com" className="transition hover:text-emerald-200">
              Instagram
            </a>
            <a href="https://twitter.com" className="transition hover:text-emerald-200">
              X (Twitter)
            </a>
            <a href="mailto:careers@cyberwavelounge.ng" className="transition hover:text-emerald-200">
              Careers
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} CyberWave Lounge. Registered in Nigeria. Powered by relentless
          connectivity.
        </p>
      </footer>
    </div>
  );
}
