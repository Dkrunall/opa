import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Best Lounge in Mumbai | OPA Bar & Cafe",
  description:
    "Discover the best lounge in Mumbai for Mediterranean dining, handcrafted cocktails, live entertainment, and unforgettable nights at OPA Bar & Cafe.",
  keywords: [
    "best lounge in Mumbai",
    "lounge in Mumbai",
    "best lounge in Andheri",
    "OPA Bar & Cafe",
    "Mediterranean dining Mumbai",
    "handcrafted cocktails Mumbai",
    "nightlife in Mumbai",
    "rooftop lounge Mumbai",
    "premium lounge Andheri East",
    "party places in Mumbai",
  ],
  openGraph: {
    title: "Best Lounge in Mumbai | OPA Bar & Cafe",
    description:
      "Discover the best lounge in Mumbai for Mediterranean dining, handcrafted cocktails, live entertainment, and unforgettable nights at OPA Bar & Cafe.",
    url: "https://opabarandcafe.in/blog/best-lounge-in-mumbai",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "article",
  },
};

const faqs = [
  {
    q: "Which is the best lounge in Mumbai?",
    a: "OPA Bar & Cafe is one of the best lounges in Mumbai, offering Mediterranean-inspired cuisine, handcrafted cocktails, elegant interiors, and a vibrant nightlife experience.",
  },
  {
    q: "What type of cuisine does OPA Bar & Cafe serve?",
    a: "OPA Bar & Cafe serves Mediterranean-inspired cuisine along with Lebanese, Turkish, and Middle Eastern flavours, complemented by premium cocktails and curated beverages.",
  },
  {
    q: "Does OPA Bar & Cafe offer handcrafted cocktails?",
    a: "Yes. Guests can enjoy an extensive menu of handcrafted cocktails, premium spirits, wines, mocktails, and seasonal signature beverages.",
  },
  {
    q: "Is OPA Bar & Cafe suitable for celebrations?",
    a: "Absolutely. OPA is an excellent venue for birthdays, anniversaries, corporate events, date nights, weekend parties, and special occasions.",
  },
  {
    q: "What makes OPA Bar & Cafe different from other lounges?",
    a: "OPA combines exceptional Mediterranean dining, premium cocktails, stylish ambience, curated entertainment, and attentive hospitality, creating a complete lifestyle experience.",
  },
  {
    q: "Is OPA Bar & Cafe good for corporate gatherings?",
    a: "Yes. Its sophisticated setting and premium service make it ideal for business lunches, client meetings, team dinners, and corporate celebrations.",
  },
  {
    q: "Why should I visit OPA Bar & Cafe?",
    a: "OPA Bar & Cafe offers a perfect blend of Mediterranean cuisine, handcrafted cocktails, elegant interiors, and lively entertainment, making it one of the best lounge destinations in Mumbai.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://opabarandcafe.in/" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://opabarandcafe.in/blog" },
    { "@type": "ListItem", position: 3, name: "Best Lounge in Mumbai", item: "https://opabarandcafe.in/blog/best-lounge-in-mumbai" },
  ],
};

export default function BlogBestLoungeMumbaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
        <Navbar />
        <StickyActions />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-oasis-umber">
          <img
            src="/lounge/DSC03306.jpg"
            alt="Best Lounge in Mumbai — OPA Bar & Cafe"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 space-y-5 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="bg-oasis-accent/20 border border-oasis-accent/40 text-oasis-accent text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Lounge & Nightlife
              </span>
              <span className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Andheri East · Mumbai
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-tight tracking-tight">
              Best Lounge in Mumbai: <br className="hidden md:block" /> Where Luxury, Music, and <br className="hidden md:block" /> Unforgettable Nights Come Alive
            </h1>
            <p className="text-sand-light/60 max-w-2xl font-light text-base md:text-lg leading-relaxed">
              Mediterranean hospitality, handcrafted cocktails, and vibrant energy — OPA Bar &amp; Cafe delivers a complete lifestyle experience under one roof.
            </p>
          </div>
        </section>

        <Marquee text="LOUNGE • COCKTAILS • LIVE ENTERTAINMENT • MUMBAI" />

        {/* Article Body */}
        <article className="py-20 md:py-32 bg-sand-light">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-14">

              {/* Intro */}
              <div className="space-y-5 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Mumbai's nightlife is as dynamic as the city itself. From rooftop venues with breathtaking views to stylish lounges that redefine after-hours entertainment, the city offers countless places to relax and celebrate. However, finding the{" "}
                  <strong className="text-oasis-umber">best lounge in Mumbai</strong> is about more than discovering a venue with great music or premium drinks. It's about finding a destination where exceptional food, handcrafted cocktails, elegant interiors, and vibrant energy come together to create an experience worth remembering.
                </p>
                <p>
                  Today, guests are looking for immersive lifestyle destinations rather than conventional bars. Whether it's a casual evening with friends, a romantic date, a corporate get-together, or a weekend celebration, the right lounge creates moments that extend beyond the table.
                </p>
                <p>
                  Among Mumbai's premium nightlife destinations, OPA Bar &amp; Cafe has established itself as a place where Mediterranean hospitality, contemporary dining, and energetic nightlife blend effortlessly.
                </p>
              </div>

              {/* Section 1 — What Makes a Lounge Exceptional */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  What Makes a Lounge Truly Exceptional?
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  A premium lounge is much more than a venue serving drinks. It is a carefully curated space where every element contributes to the overall experience. The best lounge in Mumbai consistently delivers on the following essentials.
                </p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {[
                    { title: "An Atmosphere That Sets the Mood", desc: "Elegant lighting, stylish interiors, comfortable seating, and curated music create an inviting environment that encourages guests to unwind." },
                    { title: "Handcrafted Cocktails That Tell a Story", desc: "Premium spirits, fresh fruits, aromatic herbs, and innovative techniques elevate every sip beyond the ordinary." },
                    { title: "Cuisine That Complements the Experience", desc: "Mediterranean cuisine, grilled specialties, and chef-driven creations pair naturally with handcrafted cocktails." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2 — Cocktail Menu */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Handcrafted Cocktails Worth Talking About
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Modern cocktail culture is built around creativity and craftsmanship. A thoughtfully curated cocktail menu often includes:
                </p>
                <ul className="space-y-3">
                  {[
                    "Signature house cocktails",
                    "Classic international favourites",
                    "Seasonal creations",
                    "Premium spirits",
                    "Refreshing mocktails",
                    "Beautifully presented beverages",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  The right cocktail doesn't simply complement the meal — it enhances the entire dining experience.
                </p>
              </div>

              {/* Section 3 — Mumbai's Nightlife Has Evolved */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Mumbai's Nightlife Has Evolved
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    The city's nightlife has transformed significantly over the past decade. Guests today are no longer searching for places that only serve food or drinks. They seek destinations that offer complete lifestyle experiences where dining, entertainment, music, and hospitality come together under one roof.
                  </p>
                </div>
                <div className="bg-oasis-umber/[0.04] border border-oasis-umber/10 rounded-2xl p-8">
                  <p className="text-oasis-umber/70 text-base leading-relaxed font-light mb-4">Today's leading lounges offer:</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Fine dining experiences",
                      "Premium cocktails",
                      "Live entertainment",
                      "DJ nights",
                      "Curated playlists",
                      "Elegant interiors",
                      "Late-night dining",
                      "Social spaces for celebrations",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-oasis-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 4 — OPA Redefining */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  OPA Bar &amp; Cafe: Redefining the Lounge Experience
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Among the many venues competing for attention, OPA Bar &amp; Cafe has built a reputation for offering an elevated experience inspired by Mediterranean hospitality and contemporary luxury.
                  </p>
                  <p>
                    From its elegant interiors and inviting ambience to its vibrant energy and attentive hospitality, OPA creates a seamless balance between sophistication and comfort. Whether visiting for an intimate dinner or a lively weekend gathering, guests experience a venue that feels welcoming, stylish, and effortlessly memorable.
                  </p>
                </div>
              </div>

              {/* Section 5 — Culinary Journey */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  A Culinary Journey Inspired by the Mediterranean
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Drawing inspiration from Mediterranean culinary traditions, OPA also embraces flavours influenced by Lebanese, Turkish, and Middle Eastern cuisine. Guests can explore an impressive selection of:
                </p>
                <ul className="space-y-3">
                  {[
                    "Fresh mezze platters",
                    "Charcoal-grilled specialties",
                    "Signature kebabs",
                    "Mediterranean-inspired mains",
                    "Artisan flatbreads",
                    "Chef-crafted desserts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 6 — Occasions */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Perfect for Every Occasion
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Versatility is one of the reasons OPA continues to be recognised among the best lounges in Mumbai. The venue offers the ideal setting for:
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Romantic Date Nights", desc: "Stylish ambience and curated cocktails set the mood for an intimate evening." },
                    { title: "Birthday Celebrations", desc: "Elegant interiors and attentive hospitality make milestones memorable." },
                    { title: "Corporate Gatherings", desc: "Sophisticated settings for business lunches, client meetings, and team dinners." },
                    { title: "Weekend Parties & Reunions", desc: "Vibrant energy and live entertainment for friends' get-togethers and celebrations." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-5 border-t border-oasis-umber/10 pt-10">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Experience the Best Lounge in Mumbai
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Choosing the best lounge in Mumbai is about more than finding a stylish venue — it's about discovering a destination that consistently delivers exceptional experiences. Great food, handcrafted cocktails, warm hospitality, and an inviting ambience all contribute to creating evenings that guests remember long after the last toast.
                  </p>
                  <p>
                    OPA Bar &amp; Cafe brings these elements together through Mediterranean-inspired cuisine, innovative beverages, contemporary interiors, and a vibrant social atmosphere. Gather your friends, raise a toast, and experience a nightlife destination where every visit feels like a celebration.
                  </p>
                </div>
                <a
                  href="/book-a-table"
                  className="inline-block mt-2 bg-oasis-umber text-sand-light text-[10px] uppercase tracking-widest font-bold px-8 py-4 rounded-full hover:bg-oasis-accent transition-colors duration-300"
                >
                  Reserve Your Table
                </a>
              </div>

            </div>
          </div>
        </article>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-oasis-umber">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
                  Frequently Asked Questions
                </span>
                <h2 className="text-3xl md:text-5xl font-stylized text-sand-light">FAQs</h2>
              </div>
              <div className="space-y-5">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-sand-light/10 rounded-2xl p-7 space-y-3 hover:border-oasis-accent/30 transition-colors duration-300">
                    <h3 className="font-stylized text-sand-light text-lg leading-snug">
                      {i + 1}. {faq.q}
                    </h3>
                    <p className="text-sand-light/50 text-sm leading-relaxed font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-sand-light border-t border-oasis-umber/10">
          <div className="container mx-auto px-6 text-center space-y-4">
            <span className="text-oasis-accent text-[10px] uppercase tracking-[0.8em] font-bold block">
              Hotel Peninsula Grand · Sakinaka · Andheri East, Mumbai
            </span>
            <p className="text-oasis-umber/60 text-sm font-light">
              📍 Sakinaka Junction, Andheri East &nbsp;|&nbsp; 📞 +91 81049 61636 &nbsp;|&nbsp; 🕐 5:00 PM – 3:00 AM Daily
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
