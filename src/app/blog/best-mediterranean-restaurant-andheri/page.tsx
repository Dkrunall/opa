import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { StickyActions } from "@/components/StickyActions";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "Best Mediterranean Restaurant in Andheri | OPA Bar & Cafe",
  description:
    "Experience authentic Mediterranean flavours at the best Mediterranean restaurant in Andheri. Enjoy Lebanese, Turkish, and Middle Eastern cuisine at OPA Bar & Cafe.",
  keywords: [
    "Best Mediterranean Restaurant in Andheri",
    "Mediterranean restaurant Andheri East",
    "Mediterranean food Andheri",
    "Lebanese restaurant Mumbai",
    "Turkish restaurant Andheri",
    "Middle Eastern restaurant Mumbai",
    "Best Lebanese restaurant Andheri",
    "Fine dining Andheri East",
    "Mediterranean cuisine Mumbai",
    "Healthy Mediterranean food",
    "OPA Bar & Cafe",
  ],
  openGraph: {
    title: "Best Mediterranean Restaurant in Andheri | OPA Bar & Cafe",
    description:
      "Experience authentic Mediterranean flavours at the best Mediterranean restaurant in Andheri. Enjoy Lebanese, Turkish, and Middle Eastern cuisine at OPA Bar & Cafe.",
    url: "https://opabarandcafe.in/blog/best-mediterranean-restaurant-andheri",
    siteName: "OPA Bar & Cafe",
    locale: "en_IN",
    type: "article",
  },
};

const faqs = [
  {
    q: "Which is the best Mediterranean restaurant in Andheri?",
    a: "OPA Bar & Cafe is one of the best Mediterranean restaurants in Andheri, offering authentic Mediterranean, Lebanese, Turkish, and Middle Eastern cuisine in a premium dining setting.",
  },
  {
    q: "What type of food does OPA Bar & Cafe serve?",
    a: "OPA Bar & Cafe serves Mediterranean-inspired cuisine featuring mezze, grilled specialties, Lebanese classics, Turkish dishes, seafood, and handcrafted cocktails.",
  },
  {
    q: "Is Mediterranean food healthy?",
    a: "Yes. Mediterranean cuisine is known for using fresh vegetables, olive oil, lean proteins, herbs, and wholesome ingredients, making it one of the healthiest cuisines in the world.",
  },
  {
    q: "Does OPA Bar & Cafe offer vegetarian Mediterranean dishes?",
    a: "Yes. The menu includes a variety of vegetarian options such as hummus, falafel, fresh salads, mezze, and other Mediterranean-inspired specialties.",
  },
  {
    q: "Is OPA Bar & Cafe suitable for celebrations?",
    a: "Absolutely. OPA is an ideal venue for birthdays, anniversaries, business lunches, family dinners, and weekend celebrations.",
  },
  {
    q: "Does OPA Bar & Cafe serve handcrafted cocktails?",
    a: "Yes. Guests can enjoy an extensive selection of handcrafted cocktails, premium spirits, wines, mocktails, and seasonal beverages.",
  },
  {
    q: "Why should I choose OPA Bar & Cafe for Mediterranean dining?",
    a: "OPA Bar & Cafe combines authentic Mediterranean flavors, elegant ambience, handcrafted cocktails, exceptional hospitality, and a memorable dining experience, making it one of Andheri's top culinary destinations.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://opabarandcafe.in/" },
    { "@type": "ListItem", position: 2, name: "Blogs", item: "https://opabarandcafe.in/blog" },
    { "@type": "ListItem", position: 3, name: "Best Mediterranean Restaurant in Andheri", item: "https://opabarandcafe.in/blog/best-mediterranean-restaurant-andheri" },
  ],
};

export default function BlogBestMediterraneanRestaurantAndheriPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <main className="min-h-screen bg-sand-light selection:bg-oasis-umber selection:text-sand-light">
        <Navbar />
        <StickyActions />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 md:pb-28 overflow-hidden bg-oasis-umber">
          <img
            src="/food/30 TEN -08182.png"
            alt="Best Mediterranean Restaurant in Andheri — OPA Bar & Cafe"
            className="absolute inset-0 w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oasis-umber via-oasis-umber/60 to-transparent" />
          <div className="container mx-auto px-6 relative z-10 space-y-5 max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="bg-oasis-accent/20 border border-oasis-accent/40 text-oasis-accent text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Mediterranean Dining
              </span>
              <span className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full">
                Andheri East · Mumbai
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-stylized text-sand-light leading-tight tracking-tight">
              Best Mediterranean <br className="hidden md:block" /> Restaurant in Andheri: A Journey <br className="hidden md:block" /> Through Authentic Coastal Flavors
            </h1>
            <p className="text-sand-light/60 max-w-2xl font-light text-base md:text-lg leading-relaxed">
              Lebanese, Turkish, and Middle Eastern traditions come alive on one menu — OPA Bar &amp; Cafe brings authentic Mediterranean hospitality to Andheri.
            </p>
          </div>
        </section>

        <Marquee text="MEDITERRANEAN • LEBANESE • TURKISH • ANDHERI EAST" />

        {/* Article Body */}
        <article className="py-20 md:py-32 bg-sand-light">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-14">

              {/* Intro */}
              <div className="space-y-5 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Mediterranean cuisine has become one of the world's most celebrated culinary traditions, admired for its fresh ingredients, bold flavors, and wholesome approach to dining. Rooted in the coastal regions of Southern Europe, the Middle East, and North Africa, this cuisine is known for bringing people together over beautifully prepared meals and vibrant shared platters. For food lovers searching for the{" "}
                  <strong className="text-oasis-umber">best Mediterranean restaurant in Andheri</strong>, the experience goes beyond great food — it's about discovering a culture built around hospitality, freshness, and unforgettable flavors.
                </p>
                <p>
                  Among the city's culinary destinations, OPA Bar &amp; Cafe brings the rich traditions of Mediterranean cuisine to Andheri with a thoughtfully curated menu, elegant ambience, handcrafted cocktails, and warm hospitality that makes every visit memorable.
                </p>
              </div>

              {/* Section 1 — What Makes Mediterranean Cuisine Popular */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  What Makes Mediterranean Cuisine So Popular?
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Mediterranean cuisine is more than a collection of recipes — it's a way of enjoying food that emphasizes quality, freshness, and shared experiences. Some of the defining characteristics include:
                </p>
                <ul className="space-y-3">
                  {[
                    "Fresh vegetables and seasonal produce",
                    "Premium olive oil",
                    "Charcoal-grilled meats and seafood",
                    "Homemade dips and mezze",
                    "Aromatic herbs and spices",
                    "Artisan breads",
                    "Balanced flavors",
                    "Vibrant presentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2 — Journey Across the Mediterranean */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  A Culinary Journey Across the Mediterranean
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  One of the reasons Mediterranean cuisine appeals to such a wide audience is its incredible diversity. Each region contributes unique flavors while sharing a common philosophy of fresh, wholesome cooking.
                </p>
                <div className="grid sm:grid-cols-3 gap-5">
                  {[
                    { title: "Lebanese Flavors", desc: "Flavorful mezze, creamy hummus, fresh salads, grilled kebabs, and aromatic spices — perfect for sharing and social dining." },
                    { title: "Turkish Specialties", desc: "Rich grilled meats, artisan flatbreads, kebabs, and comforting desserts showcasing centuries of culinary tradition." },
                    { title: "Middle Eastern Influences", desc: "Bold spices, charcoal-grilled delicacies, and beautifully balanced dishes for a memorable dining experience." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 3 — What to Look For */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  What to Look for in the Best Mediterranean Restaurant in Andheri
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Choosing the right Mediterranean restaurant is about more than selecting a menu. The finest dining destinations combine exceptional cuisine with thoughtful hospitality and inviting surroundings.
                </p>
                <div className="bg-oasis-umber/[0.04] border border-oasis-umber/10 rounded-2xl p-8 space-y-4">
                  <ul className="space-y-3">
                    {[
                      { title: "Fresh Ingredients", desc: "Authentic Mediterranean cooking begins with premium ingredients sourced for their freshness and quality." },
                      { title: "Authentic Flavors", desc: "Recipes remain true to their cultural roots while offering a contemporary dining experience." },
                      { title: "Warm Hospitality", desc: "Mediterranean dining is built around welcoming guests and encouraging shared meals and conversation." },
                      { title: "An Elegant Ambience", desc: "Beautiful interiors, comfortable seating, and a relaxed atmosphere make dining feel like a special occasion." },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-oasis-umber/70 font-light text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-oasis-accent shrink-0 mt-2" />
                        <span><strong className="text-oasis-umber font-medium">{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4 — OPA Bringing Mediterranean Hospitality */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  OPA Bar &amp; Cafe: Bringing Mediterranean Hospitality to Andheri
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  For diners seeking the best Mediterranean restaurant in Andheri, OPA Bar &amp; Cafe offers a thoughtfully curated experience inspired by the warmth and richness of Mediterranean culture. Guests can enjoy a wide variety of carefully prepared dishes, including:
                </p>
                <ul className="space-y-3">
                  {[
                    "Fresh mezze platters",
                    "Creamy hummus and signature dips",
                    "Charcoal-grilled kebabs",
                    "Mediterranean-inspired seafood",
                    "Turkish specialties",
                    "Lebanese classics",
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

              {/* Section 5 — Beyond the Plate */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  A Dining Experience Beyond the Plate
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  The elegant interiors, warm lighting, and stylish décor create an inviting space that's equally suited for:
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { title: "Romantic Dinners", desc: "An intimate setting paired with authentic Mediterranean flavors." },
                    { title: "Family Gatherings", desc: "Shared mezze platters and a warm atmosphere for every generation." },
                    { title: "Business Lunches", desc: "A sophisticated setting for client meetings and team catch-ups." },
                    { title: "Birthdays & Anniversaries", desc: "Elegant surroundings for celebrating life's milestones." },
                  ].map((item, i) => (
                    <div key={i} className="border border-oasis-umber/12 rounded-2xl p-6 space-y-2 hover:border-oasis-accent/30 hover:bg-oasis-umber/[0.02] transition-all duration-300">
                      <h3 className="font-stylized text-oasis-umber text-lg leading-snug">{item.title}</h3>
                      <p className="text-oasis-umber/55 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6 — Cuisine & Cocktails Pairing */}
              <div className="space-y-5">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  The Perfect Pairing: Mediterranean Cuisine and Handcrafted Cocktails
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    One of the highlights of dining at OPA Bar &amp; Cafe is the opportunity to pair Mediterranean flavors with expertly crafted cocktails, including signature cocktails, premium spirits, refreshing mocktails, curated wines, and seasonal beverage creations.
                  </p>
                  <p>
                    Whether guests prefer refreshing citrus notes, herb-infused beverages, or classic cocktails, every pairing is designed to complement the menu beautifully.
                  </p>
                </div>
              </div>

              {/* Section 7 — Why OPA Stands Out */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Why OPA Bar &amp; Cafe Stands Out
                </h2>
                <p className="text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  Among the many dining destinations across Mumbai, guests appreciate OPA Bar &amp; Cafe for its:
                </p>
                <ul className="space-y-3">
                  {[
                    "Authentic Mediterranean-inspired cuisine",
                    "Lebanese, Turkish, and Middle Eastern specialties",
                    "Elegant ambience",
                    "Handcrafted cocktails",
                    "Warm hospitality",
                    "Premium dining experience",
                    "Stylish interiors",
                    "Perfect setting for every occasion",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-oasis-umber/70 font-light">
                      <span className="w-2 h-2 rounded-full bg-oasis-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="space-y-5 border-t border-oasis-umber/10 pt-10">
                <h2 className="text-2xl md:text-4xl font-stylized text-oasis-umber leading-tight">
                  Ready to Experience Mediterranean Dining Like Never Before?
                </h2>
                <div className="space-y-4 text-oasis-umber/70 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Whether you're planning a romantic dinner, a family gathering, a business lunch, or an evening with friends, OPA Bar &amp; Cafe offers the perfect setting to enjoy authentic Mediterranean flavors in a vibrant and welcoming atmosphere.
                  </p>
                  <p>
                    Reserve your table today at OPA Bar &amp; Cafe and discover why it's becoming the{" "}
                    <strong className="text-oasis-umber">best Mediterranean restaurant in Andheri</strong> for food lovers who appreciate exceptional cuisine and unforgettable moments.
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
