import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { PostDate } from "@/components/PostDate";
import post from "./post.json";

export const metadata: Metadata = {
  title: "Best LIT Cocktails in Andheri | Opa! Bar & Cafe",
  description:
    "Discover the best LIT cocktails in Andheri at Opa! Bar & Cafe, with bold drinks, Arabian ambience, music, dining and late-night vibes.",
  keywords: [
    "best LIT cocktails in Andheri",
    "LIT cocktails Andheri",
    "Long Island Iced Tea Andheri",
    "best cocktail bar in Andheri",
    "best lounge in Andheri",
    "best Arabian ambience in Andheri",
    "best Mediterranean restaurant in Andheri",
    "late night cocktails Andheri",
    "Andheri East nightlife",
    "Opa! Bar & Cafe",
  ],
  openGraph: {
    title: "Best LIT Cocktails in Andheri | Opa! Bar & Cafe",
    description:
      "Discover the best LIT cocktails in Andheri at Opa! Bar & Cafe, with bold drinks, Arabian ambience, music, dining and late-night vibes.",
    url: "https://opabarandcafe.in/blog/best-lit-cocktails-in-andheri",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "article",
    publishedTime: post.date,
  },
};

const faqs = [
  {
    q: "Where can guests enjoy LIT cocktails in Andheri?",
    a: "Guests looking for LIT-style cocktails in Andheri can explore Opa! Bar & Cafe, particularly if they want cocktails combined with dining, music and an Arabian-inspired atmosphere.",
  },
  {
    q: "What is a LIT cocktail?",
    a: "LIT commonly refers to Long Island Iced Tea-style cocktails, known for combining multiple spirits with mixers. Because recipes and alcohol strengths can vary, guests should check the specific preparation with the bar.",
  },
  {
    q: "Is Opa! Bar & Cafe a good place for cocktail nights?",
    a: "Yes. The venue combines cocktails with food, music, social ambience and late-night dining, making it suitable for cocktail-focused evenings.",
  },
  {
    q: "What food is available with the cocktails?",
    a: "Opa! Bar & Cafe features Mediterranean and Middle Eastern-inspired cuisine, offering dishes that can be enjoyed alongside drinks.",
  },
  {
    q: "Is Opa! suitable for birthday celebrations and group outings?",
    a: "The venue's lively atmosphere, dining options and cocktail experience make it suitable for group gatherings and celebrations.",
  },
  {
    q: "Does Opa! have Arabian-inspired interiors?",
    a: "Yes. Arabian-inspired interiors are a defining part of the venue's ambience and contribute to its distinctive nightlife experience.",
  },
  {
    q: "Is Opa! Bar & Cafe suitable for late-night plans?",
    a: "Yes. The venue caters to late-night dining and nightlife. Guests should confirm the latest operating hours when planning a visit.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://opabarandcafe.in/" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://opabarandcafe.in/blog" },
    { "@type": "ListItem", position: 3, name: "Best LIT Cocktails in Andheri", item: "https://opabarandcafe.in/blog/best-lit-cocktails-in-andheri" },
  ],
};

export default function BlogBestLitCocktailsAndheriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
        <Navbar />
        <StickyActions />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-oasis-umber">
          <img
            src="/images/bar.webp"
            alt="Best LIT Cocktails in Andheri — Opa! Bar & Cafe"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 space-y-5 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="bg-oasis-accent/20 border border-oasis-accent/40 text-oasis-accent text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Cocktails
              </span>
              <span className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Andheri East · Mumbai
              </span>
              <PostDate date={post.date} />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-tight tracking-tight">
              From First Sip to Last Call: <br className="hidden md:block" /> Discover the Best LIT <br className="hidden md:block" /> Cocktails in Andheri
            </h1>
            <p className="text-sand-light/60 max-w-2xl font-light text-base md:text-lg leading-relaxed">
              Bold drinks, Arabian-inspired ambience, music and late-night energy — a cocktail night at Opa! Bar &amp; Cafe is built to last from the first sip to the last call.
            </p>
          </div>
        </section>

        <Marquee text="LIT COCKTAILS • MUSIC • LATE NIGHTS • ANDHERI EAST" />

        {/* Article Body */}
        <article className="py-20 md:py-32 bg-sand-light">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-14">

              {/* Intro */}
              <div className="space-y-5 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>Some nights call for a quiet dinner. Others call for something with a little more energy.</p>
                <p>
                  For cocktail lovers in Mumbai, a LIT cocktail can bring an extra sense of excitement to the table. Its bold character, dramatic presentation and social appeal make it a popular choice for groups looking to turn an ordinary evening into something more memorable.
                </p>
                <p>
                  For those searching for the <strong className="text-oasis-umber">best LIT cocktails in Andheri</strong>, Opa! Bar &amp; Cafe offers a setting where cocktails become part of a much bigger experience—one built around food, music, Arabian-inspired ambience and late-night energy.
                </p>
              </div>

              {/* Section 1 — What Makes a LIT Night Different */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  What Makes a LIT Cocktail Night Different?
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>A cocktail is only one piece of the nightlife puzzle.</p>
                </div>
                <div className="bg-oasis-umber/[0.04] border border-oasis-umber/10 rounded-2xl p-8">
                  <p className="text-oasis-umber/70 text-base leading-relaxed font-light mb-4">
                    The experience surrounding the drink can make just as much of a difference. A memorable cocktail night often combines:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Well-crafted drinks",
                      "Interesting flavors and presentation",
                      "A vibrant atmosphere",
                      "Music that matches the mood",
                      "Food suitable for sharing",
                      "Comfortable seating",
                      "Good company",
                      "A venue that lets the evening continue",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-oasis-accent shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  This is why searches for the best cocktail bar in Andheri increasingly go beyond the drink itself. Guests want an experience they can enjoy from the first sip through the final round.
                </p>
              </div>

              {/* Section 2 — Why Opa Stands Out */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Why Opa! Bar &amp; Cafe Stands Out
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Opa! Bar &amp; Cafe creates a distinctive setting inspired by Arabian aesthetics, giving cocktail evenings a more immersive feel.
                  </p>
                  <p>
                    The ambience makes it suitable for guests who want more than a conventional bar experience. It provides a backdrop for conversations, celebrations, dinner and cocktails while maintaining an energetic nightlife personality.
                  </p>
                  <p>For those searching for the best Arabian ambience in Andheri, the setting itself becomes part of the evening.</p>
                  <p>
                    The venue can work particularly well for groups that want to start with dinner and gradually transition into drinks and music.
                  </p>
                </div>
              </div>

              {/* Section 3 — Cocktails Meet Food */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Cocktails Meet Mediterranean &amp; Middle Eastern-Inspired Food
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>Great drinks deserve equally engaging food.</p>
                  <p>
                    Opa! Bar &amp; Cafe combines its cocktail experience with Mediterranean and Middle Eastern-inspired dining. This gives guests plenty of opportunities to share dishes while exploring drinks.
                  </p>
                  <p>
                    For food-focused visitors searching for the best Mediterranean restaurant in Andheri, the combination offers a convenient way to enjoy dinner and cocktails in the same location.
                  </p>
                  <p>
                    This food-and-drink combination is particularly useful for groups. Instead of planning dinner at one restaurant and cocktails somewhere else, the entire evening can happen under one roof.
                  </p>
                </div>
              </div>

              {/* Section 4 — Social Cocktail Night */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  The Perfect Setting for a Social Cocktail Night
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>Cocktails naturally lend themselves to social occasions.</p>
                  <p>
                    A table filled with friends, shared plates, music in the background and a round of drinks can quickly turn an ordinary weekday into a memorable evening.
                  </p>
                  <p>
                    For guests looking for the best lounge in Andheri, ambience plays a major role. Lighting, interiors, music and seating all influence how comfortable people feel and how long they want to stay.
                  </p>
                  <p>
                    Opa! Bar &amp; Cafe brings these components together to create a setting that works for casual gatherings as well as celebrations.
                  </p>
                  <p>
                    Whether the occasion is a birthday, reunion, date night or post-work catch-up, the venue offers an environment built around social dining and drinks.
                  </p>
                </div>
              </div>

              {/* Section 5 — When to Plan */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  When Should Guests Plan a Cocktail Night?
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  There is no single right time. The ideal timing depends on the kind of evening guests want.
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Early Evening", desc: "Ideal for after-work drinks and relaxed conversations." },
                    { title: "Dinner Hours", desc: "A good choice for guests who want to combine food with cocktails." },
                    { title: "Later Evening", desc: "Better suited to groups looking for a livelier nightlife atmosphere." },
                    { title: "Weekend Nights", desc: "A natural choice for celebrations, group outings and extended cocktail sessions." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Guests planning a popular weekend slot should consider reserving a table in advance.
                </p>
              </div>

              {/* Section 6 — Late-Night Cocktails */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Why Late-Night Cocktails Are Part of the Andheri Experience
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Andheri is one of Mumbai&apos;s busiest entertainment hubs, and its nightlife often extends well beyond traditional dinner hours.
                  </p>
                  <p>
                    A late-night venue creates flexibility. Friends can arrive after work, enjoy dinner, order cocktails and continue the evening at a comfortable pace.
                  </p>
                  <p>For anyone planning a spontaneous night out, checking the latest venue timings before visiting is always recommended.</p>
                </div>
              </div>

              {/* Section 7 — More Than a Cocktail */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  More Than Just a Cocktail
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>The appeal of the best LIT cocktails in Andheri ultimately comes down to the complete experience.</p>
                  <p>
                    A memorable drink can start the conversation, but the ambience keeps the group engaged. Food gives the evening substance, while music adds energy. Together, these elements create the kind of night that guests are more likely to remember.
                  </p>
                  <p>
                    Opa! Bar &amp; Cafe brings these components together with Arabian-inspired interiors, Mediterranean and Middle Eastern-inspired dining, cocktails and a lively atmosphere.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <div className="space-y-5 border-t border-oasis-umber/10 pt-10">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  From the First Sip to the Last Call
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    A memorable cocktail night is about more than ordering a drink. It is about choosing the right setting, bringing the right people together and giving the evening enough room to unfold.
                  </p>
                  <p>
                    For guests searching for the best LIT cocktails in Andheri, Opa! Bar &amp; Cafe offers a compelling combination of cocktails, Arabian-inspired ambience, Mediterranean and Middle Eastern-inspired cuisine, music and late-night energy.
                  </p>
                  <p>
                    Ready to get the night started? Book a table at Opa! Bar &amp; Cafe, bring the crew and make the first sip count.
                  </p>
                </div>
                <a
                  href="/book-a-table"
                  className="inline-block mt-2 bg-oasis-umber text-sand-light text-[10px] uppercase tracking-widest font-bold px-8 py-4 rounded-full hover:bg-oasis-accent transition-colors duration-300"
                >
                  Book a Table
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
