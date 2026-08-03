const AW_BASE = "https://www.awbridal.com";
const AW_AFFILIATE_URL =
  "https://www.jdoqocy.com/click-101845352-17231942?sid=7994525";

function affiliateLink(destination: string) {
  return `${AW_AFFILIATE_URL}&url=${encodeURIComponent(destination)}`;
}

const categories = [
  {
    title: "For the Bride",
    eyebrow: "The main moment",
    image: "/women/hero-bride.webp",
    href: affiliateLink(`${AW_BASE}/wedding-dresses`),
  },
  {
    title: "Bridesmaids",
    eyebrow: "Made to harmonize",
    image: "/women/bridesmaids.webp",
    href: affiliateLink(`${AW_BASE}/bridesmaid-dresses`),
  },
  {
    title: "Mother of the Bride",
    eyebrow: "Modern refinement",
    image: "/women/mother-of-bride.webp",
    href: affiliateLink(`${AW_BASE}/mother-of-the-bride-dresses`),
  },
  {
    title: "Wedding Guest",
    eyebrow: "Celebrate beautifully",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=88",
    href: affiliateLink(`${AW_BASE}/wedding-guest-dresses`),
  },
];

const edit = [
  {
    name: "The Soft Romance Edit",
    note: "Airy layers, graceful movement, and luminous ivory.",
    image: "/women/hero-bride.webp",
    href: affiliateLink(`${AW_BASE}/wedding-dresses`),
  },
  {
    name: "The Garden Party Edit",
    note: "Petal-inspired shades for celebrations in full bloom.",
    image: "/women/bridesmaids.webp",
    href: affiliateLink(`${AW_BASE}/bridesmaid-dresses`),
  },
  {
    name: "The Modern Muse Edit",
    note: "Clean silhouettes and understated, confident glamour.",
    image: "/women/mother-of-bride.webp",
    href: affiliateLink(`${AW_BASE}/dresses`),
  },
];

const colors = [
  ["Sage", "#a7ad91"],
  ["Dusty Rose", "#c99591"],
  ["Champagne", "#d9c5a5"],
  ["Ink Blue", "#33445c"],
  ["Terracotta", "#b96f56"],
  ["Lilac", "#b8a7c8"],
  ["Black", "#282524"],
  ["Ivory", "#eee8dc"],
];

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="Gwen and Megan Bridal home">
      <img src="/brand/gwen-megan-monogram.png" alt="" />
      <span>
        <b>Gwen &amp; Megan</b>
        <small>Bridal</small>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <p className="affiliate-bar">
        An independent bridal edit featuring AW Bridal. We may earn a commission
        from qualifying purchases.
      </p>

      <header className="site-header">
        <div className="header-inner">
          <Mark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#shop">Shop</a>
            <a href="#colors">Shop by color</a>
            <a href="#edit">The edit</a>
            <a href="#guide">Wedding guide</a>
          </nav>
          <a className="header-cta" href={affiliateLink(`${AW_BASE}/get-free-swatches`)} target="_blank" rel="sponsored noopener">
            Free swatches
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open menu"><span></span><span></span></summary>
            <nav>
              <a href="#shop">Shop</a>
              <a href="#colors">Shop by color</a>
              <a href="#edit">The edit</a>
              <a href="#guide">Wedding guide</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-image" role="img" aria-label="Bride in an elegant wedding gown outdoors" />
        <div className="hero-copy">
          <p className="kicker">The 2026 bridal edit</p>
          <h1 id="hero-title">A beautiful beginning, styled your way.</h1>
          <p>
            Discover romantic gowns, coordinated bridesmaid colors, and
            celebration looks selected for modern love stories.
          </p>
          <div className="button-row">
            <a className="button dark" href={affiliateLink(`${AW_BASE}/wedding-dresses`)} target="_blank" rel="sponsored noopener">
              Shop wedding dresses <span>↗</span>
            </a>
            <a className="text-link" href="#shop">Explore the bridal party</a>
          </div>
          <div className="hero-perks">
            <span>Free customization</span>
            <span>5 free swatches</span>
            <span>Home try-on</span>
          </div>
        </div>
      </section>

      <section className="intro section-pad" id="shop">
        <p className="kicker">Dress every chapter</p>
        <h2>Shop by your place in the story</h2>
        <p className="section-lede">
          Thoughtful collections for the aisle, the wedding party, and every
          unforgettable guest.
        </p>
        <div className="category-grid">
          {categories.map((item) => (
            <a className="category-card" href={item.href} target="_blank" rel="sponsored noopener" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <small>{item.eyebrow}</small>
                <h3>{item.title}</h3>
                <span>Shop the collection ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="color-section section-pad" id="colors">
        <div className="color-copy">
          <p className="kicker">Find your palette</p>
          <h2>Your color story starts here.</h2>
          <p>
            From quiet neutrals to rich jewel tones, explore shades made to
            coordinate beautifully across silhouettes.
          </p>
          <a className="button light" href={affiliateLink(`${AW_BASE}/shop-by-color`)} target="_blank" rel="sponsored noopener">
            See every color <span>↗</span>
          </a>
        </div>
        <div className="swatches" aria-label="Popular bridal colors">
          {colors.map(([name, color]) => (
            <a href={affiliateLink(`${AW_BASE}/shop-by-color`)} target="_blank" rel="sponsored noopener" key={name}>
              <i style={{ backgroundColor: color }} />
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="editorial section-pad" id="edit">
        <div className="section-heading">
          <div>
            <p className="kicker">Curated for you</p>
            <h2>The Gwen &amp; Megan Edit</h2>
          </div>
          <p>Our favorite ways to set the tone for your celebration.</p>
        </div>
        <div className="edit-grid">
          {edit.map((item, index) => (
            <article className={`edit-card edit-${index + 1}`} key={item.name}>
              <a href={item.href} target="_blank" rel="sponsored noopener">
                <img src={item.image} alt="" />
              </a>
              <p>Edition 0{index + 1}</p>
              <h3>{item.name}</h3>
              <span>{item.note}</span>
              <a className="text-link" href={item.href} target="_blank" rel="sponsored noopener">
                Shop this story ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="try-on">
        <div className="try-image" role="img" aria-label="Detail of satin wedding dress fabric" />
        <div className="try-copy">
          <p className="kicker">Confidence before the celebration</p>
          <h2>See it. Feel it. Make it yours.</h2>
          <p>
            Order swatches to compare shades in your own light, explore home
            try-on options, and discover complimentary customization for a more
            personal fit.
          </p>
          <div>
            <a className="button dark" href={affiliateLink(`${AW_BASE}/get-free-swatches`)} target="_blank" rel="sponsored noopener">
              Get free swatches <span>↗</span>
            </a>
            <a className="text-link" href={affiliateLink(`${AW_BASE}/home-try-on`)} target="_blank" rel="sponsored noopener">
              Explore home try-on ↗
            </a>
          </div>
        </div>
      </section>

      <section className="guide section-pad" id="guide">
        <div className="guide-copy">
          <p className="kicker">The wedding guide</p>
          <h2>Less searching. More celebrating.</h2>
          <p>
            A simple roadmap for choosing silhouettes, colors, and timing your
            bridal party orders.
          </p>
          <a className="text-link" href={affiliateLink(`${AW_BASE}/blog`)} target="_blank" rel="sponsored noopener">
            Read wedding inspiration ↗
          </a>
        </div>
        <div className="guide-steps">
          <article><b>01</b><div><h3>Choose your mood</h3><p>Save a few words that describe the celebration you want to create.</p></div></article>
          <article><b>02</b><div><h3>Build your palette</h3><p>Compare physical swatches in the venue light before making the final call.</p></div></article>
          <article><b>03</b><div><h3>Invite individuality</h3><p>Coordinate one color across silhouettes your bridal party feels wonderful in.</p></div></article>
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <Mark />
          <p>
            An independent bridal style destination helping you discover
            beautiful looks available from AW Bridal.
          </p>
          <div className="footer-links">
            <a href="#shop">Shop</a>
            <a href="#colors">Colors</a>
            <a href="#edit">The edit</a>
            <a href="#guide">Guide</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Gwen &amp; Megan Bridal.</p>
          <p>
            Affiliate disclosure: We may receive a commission when you purchase
            through links on this site, at no extra cost to you. Gwen &amp;
            Megan Bridal is independent and is not AW Bridal.
          </p>
        </div>
      </footer>
    </main>
  );
}
