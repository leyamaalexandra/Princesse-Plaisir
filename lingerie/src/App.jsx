import { useState, useEffect } from "react";

const PAGES = ["Accueil", "Blog", "À Propos", "Contact"];

const products = [
  {
    id: 1,
    name: "Ensemble Dentelle Rose",
    desc: "Dentelle délicate de qualité, finitions satin",
    price: "25 000 FCFA",
    img: "https://images.unsplash.com/photo-1616624588985-0de4f13e9b4c?w=400&q=80",
    tag: "Nouveauté",
  },
  {
    id: 2,
    name: "Body Sculpture",
    desc: "Silhouette sculptée, tissu stretch premium",
    price: "30 000 FCFA",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4b5e54?w=400&q=80",
    tag: "Best-seller",
  },
  {
    id: 3,
    name: "Soutien-gorge Bridal",
    desc: "Collection mariage, broderies artisanales",
    price: "20 000FCFA",
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
    tag: "Exclusif",
  },
  {
    id: 4,
    name: "Nuisette Soie",
    desc: "Soi naturelle, coupe biais élégante",
    price: "25 000 FCFA",
    img: "https://images.unsplash.com/photo-1617551307578-9aa7f4bd0e55?w=400&q=80",
    tag: "Luxe",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "L'Art de la Dentelle : Un Savoir-Faire Ancestral",
    excerpt:
      "Plongez dans l'univers fascinant de la dentelle artisanale, ce savoir-faire d'exception qui sublime chaque pièce de notre collection avec raffinement et élégance.",
    date: "12 Avril 2026",
    read: "5 min",
    img: "https://images.unsplash.com/photo-1595341595379-cf1cd4b1b9d3?w=600&q=80",
    cat: "Savoir-Faire",
  },
  {
    id: 2,
    title: "Comment Choisir Sa Lingerie Pour Chaque Occasion",
    excerpt:
      "Du quotidien au mariage, chaque moment mérite une lingerie adaptée. Nos expertes vous guident à travers les codes et les matières pour être parfaite en toutes circonstances.",
    date: "28 Mars 2026",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80",
    cat: "Guide & Conseils",
  },
  {
    id: 3,
    title: "Les Tendances Lingerie Printemps-Été 2026",
    excerpt:
      "Floraux en dentelle, nude sophistiqué, imprimés botaniques… découvrez les pièces qui définiront votre garde-robe intime cette saison.",
    date: "5 Mars 2026",
    read: "4 min",
    img: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&q=80",
    cat: "Tendances",
  },
];

// ─── ACCUEIL ──────────────────────────────────────────────────────────────────
function PageAccueil() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`page-fade ${visible ? "in" : ""}`}>
    {/* Hero */}
<section className="hero">
  <div className="hero-overlay" />
  
  {/* Vidéo YouTube en background */}
  <div className="hero-video-wrap">
    <iframe
      className="hero-video-iframe"
      src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="background video"
    />
  </div>

  <div className="hero-content">
    <p className="hero-sub">Collection Sexy Lady ❤</p>
    <h1 className="hero-title">
      Bienvenue sur<br />
      <em>Little Princess Premium</em>
    </h1>
    <p className="hero-tagline">
      Lingerie de luxe pour la femme qui s'assume
    </p>
    <button className="btn-primary">Découvrir la Collection</button>
  </div>
  <div className="hero-scroll">
    <span>Défiler</span>
    <div className="scroll-line" />
  </div>
</section>

      {/* Intro */}
      <section className="section-intro">
        <div className="intro-deco">✦</div>
        <h2 className="section-title">Notre Philosophie</h2>
        <p className="section-text">
          Chez <strong>Little Princess Premium</strong>, chaque pièce est une ode à la
          féminité. Nous créons une lingerie qui célèbre votre corps, votre
          confiance et votre beauté intérieure — avec des matières nobles et un
          savoir-faire artisanal d'exception.
        </p>
        <div className="intro-stats">
          <div className="stat">
            <span className="stat-num">12</span>
            <span className="stat-label">Années d'excellence</span>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <span className="stat-num">3K+</span>
            <span className="stat-label">Clientes fidèles</span>
          </div>
          <div className="stat-sep" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Fait à la main</span>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section className="section-products">
        <p className="section-eyebrow">— Collection Sexy Lady ❤ —</p>
        <h2 className="section-title">La Sélection du Moment</h2>
        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-img-wrap">
                <img src={p.img} alt={p.name} className="product-img" />
                <div className="product-tag">{p.tag}</div>
                <div className="product-overlay">
                  <button className="btn-ghost">Voir le détail</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <span className="product-price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="banner-section">
        <img
          src="https://images.unsplash.com/photo-1485129547027-ec0e4a8e66a6?w=1400&q=80"
          alt="banner"
          className="banner-bg"
        />
        <div className="banner-overlay" />
        <div className="banner-content">
          <p className="banner-sub">Édition Limitée</p>
          <h2 className="banner-title">Collection Sexy Lady ❤</h2>
          <p className="banner-text">
            Dix pièces. Dix histoires. Une sensualité absolue.
          </p>
          <button className="btn-white">Explorer →</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-deco">❦</div>
        <h2 className="section-title">Rejoignez notre Univers</h2>
        <p className="section-text">
          Recevez en avant-première nos nouvelles collections, conseils stylisme
          et offres exclusives réservées aux initiées.
        </p>
        <div className="newsletter-form">
          <input
            type="email"
            placeholder="Votre adresse e-mail…"
            className="newsletter-input"
          />
          <button className="btn-primary">S'abonner</button>
        </div>
      </section>
    </div>
  );
}

// ─── BLOG ──────────────────────────────────────────────────────────────────────
function PageBlog() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`page-fade ${visible ? "in" : ""}`}>
      <div className="page-header">
        <p className="page-header-sub">Notre Univers</p>
        <h1 className="page-header-title">Journal Intime</h1>
        <p className="page-header-desc">
          Conseils, inspirations et secrets de féminité par nos experts
        </p>
      </div>

      <section className="blog-section">
        <div className="blog-featured">
          <div className="blog-featured-img-wrap">
            <img
              src={blogPosts[0].img}
              alt={blogPosts[0].title}
              className="blog-featured-img"
            />
            <span className="blog-cat">{blogPosts[0].cat}</span>
          </div>
          <div className="blog-featured-content">
            <p className="blog-date">
              {blogPosts[0].date} · {blogPosts[0].read} de lecture
            </p>
            <h2 className="blog-featured-title">{blogPosts[0].title}</h2>
            <p className="blog-excerpt">{blogPosts[0].excerpt}</p>
            <button className="btn-primary">Lire l'article →</button>
          </div>
        </div>

        <div className="blog-grid">
          {blogPosts.slice(1).map((post) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-img-wrap">
                <img
                  src={post.img}
                  alt={post.title}
                  className="blog-card-img"
                />
                <span className="blog-cat">{post.cat}</span>
              </div>
              <div className="blog-card-content">
                <p className="blog-date">
                  {post.date} · {post.read} de lecture
                </p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="btn-link">Lire la suite →</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── À PROPOS ─────────────────────────────────────────────────────────────────
function PageAPropos() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`page-fade ${visible ? "in" : ""}`}>
      <div className="page-header">
        <p className="page-header-sub">Notre Histoire</p>
        <h1 className="page-header-title">Little Princess Premium</h1>
        <p className="page-header-desc">
          Une maison fondée sur la passion du beau et le culte du détail
        </p>
      </div>

      <section className="about-section">
        <div className="about-split">
          <div className="about-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=85"
              alt="atelier"
              className="about-img"
            />
            <div className="about-img-accent" />
          </div>
          <div className="about-text-col">
            <p className="about-eyebrow">— Notre ADN —</p>
            <h2 className="about-title">Née d'une Passion pour le Beau</h2>
            <p className="about-body">
              Fondée par <strong>LEYAMA Alexandra</strong>, <strong>Little Princess Premium</strong> est née d'une passion unique : offrir aux femmes une lingerie qui conjugue sensualité raffinée, confort absolu et qualité artisanale.
            </p>
            <p className="about-body">
              Chaque collection prend vie dans notre atelier au Gabon, où chaque pièce est travaillée avec soin à partir des plus belles matières — dentelles, soies et satins sélectionnés avec passion.
            </p>
            <div className="about-values">
              {["Artisanat", "Durabilité", "Sensualité", "Inclusivité"].map(
                (v) => (
                  <span key={v} className="value-tag">
                    {v}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="team-section">
          <p className="section-eyebrow">— La Fondatrice —</p>
          <h2 className="section-title">Derrière la Marque</h2>
          <div className="team-grid" style={{gridTemplateColumns: "340px", justifyContent: "center"}}>
            {[
              {
                name: "LEYAMA Alexandra",
                role: "Fondatrice & Créatrice",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
                quote: "Je crée pour toutes les femmes, parce que chaque corps mérite d'être célébré avec élégance et sensualité.",
              },
            ].map((m) => (
              <div className="team-card" key={m.name}>
                <img src={m.img} alt={m.name} className="team-img" />
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-quote">"{m.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function PageContact() {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`page-fade ${visible ? "in" : ""}`}>
      <div className="page-header">
        <p className="page-header-sub">Parlons</p>
        <h1 className="page-header-title">Nous Contacter</h1>
        <p className="page-header-desc">
          Notre équipe vous répond avec soin sous 24h
        </p>
      </div>

      <section className="contact-section">
        <div className="contact-split">
          <div className="contact-info">
            <h2 className="contact-info-title">Retrouvez-nous</h2>
            <div className="contact-items">
              {[
                {
                  icon: "📍",
                  label: "Adresse",
                  val: "Libreville, Gabon",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  val: "bonjour@littleprincesspremium.fr",
                },
                {
                  icon: "📞",
                  label: "Téléphone",
                  val: "+241 00 00 00 00",
                },
                {
                  icon: "🕐",
                  label: "Horaires",
                  val: "Lun–Sam · 10h–19h",
                },
              ].map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="contact-icon">{item.icon}</span>
                  <div>
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-val">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-socials">
              {["Instagram", "Pinterest", "TikTok"].map((s) => (
                <button key={s} className="social-btn">
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✦</div>
                <h3>Message envoyé !</h3>
                <p>Nous vous répondrons très bientôt. Merci de votre confiance.</p>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>Prénom</label>
                    <input type="text" placeholder="Alexandra" required />
                  </div>
                  <div className="form-group">
                    <label>Nom</label>
                    <input type="text" placeholder="Martin" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="sophie@exemple.fr"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Sujet</label>
                  <select>
                    <option>Conseil taille & morphologie</option>
                    <option>Commande & livraison</option>
                    <option>Partenariat & presse</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Votre message</label>
                  <textarea
                    rows={5}
                    placeholder="Bonjour, je souhaitais…"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary full-width">
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── APP PRINCIPALE ────────────────────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pages = [PageAccueil, PageBlog, PageAPropos, PageContact];
  const CurrentPage = pages[activePage];

  return (
    <>
      <style>{CSS}</style>
      <div className="app">
        {/* NAV */}
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="nav-logo" onClick={() => setActivePage(0)}>
            <span className="logo-vs">Little Princess</span>{" "}
            <span className="logo-amp">Premium</span>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {PAGES.map((p, i) => (
              <li key={p}>
                <button
                  className={`nav-link ${activePage === i ? "active" : ""}`}
                  onClick={() => {
                    setActivePage(i);
                    setMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="nav-cta">Boutique</button>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </nav>

        {/* PAGE */}
        <main>
          <CurrentPage />
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">Little Princess Premium</div>
              <p className="footer-tagline">
                L'art de la lingerie depuis 2006
              </p>
            </div>
            <div className="footer-links">
              {["Collections", "Nouveautés", "Soldes", "Cadeaux"].map((l) => (
                <button key={l} className="footer-link">
                  {l}
                </button>
              ))}
            </div>
            <div className="footer-links">
              {["À propos", "Blog", "Contact", "Presse"].map((l) => (
                <button key={l} className="footer-link">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Little Princess Premium · LEYAMA Alexandra · Tous droits réservés</p>
            <p>Fait avec ❤ au Gabon</p>
          </div>
        </footer>
      </div>
    </>
  );
}

// ─── CSS ───────────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

  :root {
    --brown: #5c3d2e;
    --brown-light: #8b6355;
    --brown-pale: #d4b5a8;
    --rose: #e8b4c0;
    --rose-dark: #c98ca0;
    --rose-deep: #a05070;
    --cream: #fdf6f0;
    --white: #ffffff;
    --text: #3a2a24;
    --text-light: #7a6a64;
    --gold: #c9a96e;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Jost', sans-serif;
    background: var(--cream);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  /* ── PAGE TRANSITIONS */
  .page-fade { opacity: 0; transform: translateY(16px); transition: opacity .6s ease, transform .6s ease; }
  .page-fade.in { opacity: 1; transform: translateY(0); }

  /* ── NAVBAR */
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 48px;
    transition: background .4s, box-shadow .4s, padding .4s;
  }
  .navbar.scrolled {
    background: rgba(253,246,240,.96);
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 30px rgba(92,61,46,.1);
    padding: 14px 48px;
  }
  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem; font-weight: 300; letter-spacing: .12em;
    color: var(--brown); cursor: pointer;
  }
  .logo-vs { font-style: italic; font-weight: 600; }
  .logo-amp { color: var(--rose-dark); }
  .nav-links { display: flex; list-style: none; gap: 36px; }
  .nav-link {
    background: none; border: none; cursor: pointer;
    font-family: 'Jost', sans-serif; font-size: .8rem;
    font-weight: 400; letter-spacing: .2em; text-transform: uppercase;
    color: var(--brown); position: relative; padding-bottom: 4px;
    transition: color .3s;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 100%;
    height: 1px; background: var(--rose-dark); transition: right .3s;
  }
  .nav-link:hover::after, .nav-link.active::after { right: 0; }
  .nav-link.active { color: var(--rose-deep); }
  .nav-actions { display: flex; align-items: center; gap: 16px; }
  .nav-cta {
    background: var(--brown); color: var(--white); border: none; cursor: pointer;
    font-family: 'Jost', sans-serif; font-size: .75rem; font-weight: 500;
    letter-spacing: .15em; text-transform: uppercase;
    padding: 10px 24px; transition: background .3s;
  }
  .nav-cta:hover { background: var(--rose-deep); }
  .burger {
    display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer;
  }
  .burger span { display: block; width: 24px; height: 1.5px; background: var(--brown); transition: .3s; }

  @media (max-width: 768px) {
    .navbar { padding: 16px 24px; }
    .nav-links {
      display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: var(--cream); flex-direction: column; align-items: center;
      justify-content: center; gap: 32px;
    }
    .nav-links.open { display: flex; }
    .nav-link { font-size: 1.1rem; }
    .burger { display: flex; }
    .nav-cta { display: none; }
  }

  /* ── BUTTONS */
  .btn-primary {
    display: inline-block; background: var(--brown); color: var(--white);
    border: none; cursor: pointer; font-family: 'Jost', sans-serif;
    font-size: .8rem; font-weight: 500; letter-spacing: .2em; text-transform: uppercase;
    padding: 14px 36px; transition: background .3s, transform .2s;
  }
  .btn-primary:hover { background: var(--rose-deep); transform: translateY(-1px); }
  .btn-primary.full-width { width: 100%; text-align: center; }
  .btn-ghost {
    background: transparent; color: var(--white); border: 1px solid rgba(255,255,255,.7);
    cursor: pointer; font-family: 'Jost', sans-serif; font-size: .75rem;
    letter-spacing: .18em; text-transform: uppercase; padding: 12px 28px;
    transition: all .3s;
  }
  .btn-ghost:hover { background: var(--white); color: var(--brown); }
  .btn-white {
    background: var(--white); color: var(--brown); border: none; cursor: pointer;
    font-family: 'Jost', sans-serif; font-size: .8rem; font-weight: 500;
    letter-spacing: .18em; text-transform: uppercase; padding: 14px 36px;
    transition: all .3s;
  }
  .btn-white:hover { background: var(--rose); }
  .btn-link {
    background: none; border: none; cursor: pointer; color: var(--rose-deep);
    font-family: 'Jost', sans-serif; font-size: .8rem; letter-spacing: .1em;
    text-transform: uppercase; padding: 0; text-decoration: underline;
    text-underline-offset: 4px;
  }

  /* ── HERO */
  .hero {
    position: relative; height: 100vh; min-height: 600px;
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: 0; width: 100%; height: 100%;
    object-fit: cover; object-position: center top;
    transform: scale(1.04); transition: transform 8s ease;
  }
  .hero:hover .hero-bg { transform: scale(1); }
  .hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(92,61,46,.55) 0%, rgba(201,140,160,.3) 100%);
  }
  .hero-content {
    position: relative; text-align: center; color: var(--white); z-index: 2;
    max-width: 700px; padding: 0 24px;
    animation: heroIn 1.2s ease both;
  }
  @keyframes heroIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hero-sub {
    font-family: 'Jost', sans-serif; font-size: .75rem; font-weight: 300;
    letter-spacing: .35em; text-transform: uppercase; margin-bottom: 20px;
    opacity: .85;
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 300; line-height: 1.1; margin-bottom: 20px;
  }
  .hero-title em { font-style: italic; color: var(--rose); }
  .hero-tagline {
    font-size: .95rem; font-weight: 300; letter-spacing: .1em;
    margin-bottom: 36px; opacity: .9;
  }
  .hero-scroll {
    position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 10px;
    color: rgba(255,255,255,.7); font-size: .7rem; letter-spacing: .2em; text-transform: uppercase;
  }
  .scroll-line {
    width: 1px; height: 48px; background: rgba(255,255,255,.5);
    animation: scrollPulse 2s ease infinite;
  }
  @keyframes scrollPulse {
    0%,100% { transform: scaleY(1); opacity: .5; }
    50% { transform: scaleY(.5); opacity: 1; }
  }

  /* ── SECTIONS */
  .section-intro {
    text-align: center; padding: 100px 48px;
    background: var(--white);
  }
  .intro-deco { font-size: 1.4rem; color: var(--rose-dark); margin-bottom: 16px; }
  .section-title {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400; color: var(--brown); margin-bottom: 16px;
  }
  .section-text {
    font-size: 1rem; line-height: 1.8; color: var(--text-light);
    max-width: 600px; margin: 0 auto 40px;
  }
  .section-eyebrow {
    font-size: .72rem; letter-spacing: .3em; text-transform: uppercase;
    color: var(--rose-dark); margin-bottom: 12px; font-weight: 400;
  }
  .intro-stats {
    display: flex; align-items: center; justify-content: center; gap: 48px;
    margin-top: 16px;
  }
  .stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .stat-num {
    font-family: 'Cormorant Garamond', serif; font-size: 2.8rem;
    font-weight: 300; color: var(--brown);
  }
  .stat-label { font-size: .72rem; letter-spacing: .15em; text-transform: uppercase; color: var(--text-light); }
  .stat-sep { width: 1px; height: 60px; background: var(--brown-pale); }

  /* ── PRODUCTS */
  .section-products {
    padding: 80px 48px; background: var(--cream); text-align: center;
  }
  .products-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    margin-top: 48px;
  }
  @media (max-width: 1100px) { .products-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .products-grid { grid-template-columns: 1fr; } }
  .product-card { text-align: left; }
  .product-img-wrap {
    position: relative; overflow: hidden; aspect-ratio: 3/4;
  }
  .product-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s ease;
  }
  .product-card:hover .product-img { transform: scale(1.05); }
  .product-tag {
    position: absolute; top: 16px; left: 16px;
    background: var(--rose-dark); color: var(--white);
    font-size: .65rem; letter-spacing: .15em; text-transform: uppercase;
    padding: 5px 12px;
  }
  .product-overlay {
    position: absolute; inset: 0; background: rgba(92,61,46,.45);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity .4s;
  }
  .product-card:hover .product-overlay { opacity: 1; }
  .product-info { padding: 16px 0 8px; }
  .product-name {
    font-family: 'Cormorant Garamond', serif; font-size: 1.15rem;
    font-weight: 400; color: var(--brown); margin-bottom: 6px;
  }
  .product-desc { font-size: .8rem; color: var(--text-light); margin-bottom: 8px; }
  .product-price {
    font-family: 'Cormorant Garamond', serif; font-size: 1.1rem;
    font-weight: 600; color: var(--rose-deep);
  }

  /* ── BANNER */
  .banner-section {
    position: relative; height: 500px;
    display: flex; align-items: center; justify-content: center;
  }
  .banner-bg {
    position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  }
  .banner-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to right, rgba(92,61,46,.75), rgba(201,140,160,.4));
  }
  .banner-content {
    position: relative; color: var(--white); text-align: center; z-index: 2;
    padding: 0 24px;
  }
  .banner-sub {
    font-size: .72rem; letter-spacing: .35em; text-transform: uppercase;
    opacity: .8; margin-bottom: 12px;
  }
  .banner-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 300; margin-bottom: 12px;
  }
  .banner-text { font-size: .95rem; opacity: .85; margin-bottom: 32px; }

  /* ── NEWSLETTER */
  .newsletter-section {
    padding: 100px 48px; background: var(--white); text-align: center;
  }
  .newsletter-deco { font-size: 2rem; color: var(--rose-dark); margin-bottom: 12px; }
  .newsletter-form {
    display: flex; gap: 0; max-width: 480px; margin: 0 auto;
  }
  .newsletter-input {
    flex: 1; border: 1px solid var(--brown-pale); border-right: none;
    padding: 14px 20px; font-family: 'Jost', sans-serif; font-size: .9rem;
    background: var(--cream); outline: none; color: var(--text);
  }
  .newsletter-input::placeholder { color: var(--text-light); }

  /* ── PAGE HEADER */
  .page-header {
    padding: 140px 48px 80px; text-align: center;
    background: linear-gradient(180deg, rgba(232,180,192,.18) 0%, transparent 100%);
    border-bottom: 1px solid rgba(212,181,168,.4);
  }
  .page-header-sub {
    font-size: .72rem; letter-spacing: .35em; text-transform: uppercase;
    color: var(--rose-dark); margin-bottom: 12px;
  }
  .page-header-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 6vw, 5rem); font-weight: 300; color: var(--brown);
    margin-bottom: 16px;
  }
  .page-header-desc { font-size: 1rem; color: var(--text-light); }

  /* ── BLOG */
  .blog-section { padding: 80px 48px; }
  .blog-featured {
    display: grid; grid-template-columns: 1fr 1fr; gap: 64px;
    margin-bottom: 64px; align-items: center;
  }
  @media (max-width: 900px) { .blog-featured { grid-template-columns: 1fr; } }
  .blog-featured-img-wrap { position: relative; overflow: hidden; aspect-ratio: 4/3; }
  .blog-featured-img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s; }
  .blog-featured-img-wrap:hover .blog-featured-img { transform: scale(1.04); }
  .blog-cat {
    position: absolute; bottom: 16px; left: 16px;
    background: var(--rose-dark); color: var(--white);
    font-size: .65rem; letter-spacing: .15em; text-transform: uppercase; padding: 5px 12px;
  }
  .blog-date { font-size: .75rem; color: var(--text-light); letter-spacing: .08em; margin-bottom: 12px; }
  .blog-featured-title {
    font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 400;
    color: var(--brown); margin-bottom: 16px; line-height: 1.3;
  }
  .blog-excerpt { font-size: .9rem; line-height: 1.75; color: var(--text-light); margin-bottom: 28px; }
  .blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; }
  @media (max-width: 700px) { .blog-grid { grid-template-columns: 1fr; } }
  .blog-card {}
  .blog-card-img-wrap { position: relative; overflow: hidden; aspect-ratio: 16/10; margin-bottom: 20px; }
  .blog-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; }
  .blog-card:hover .blog-card-img { transform: scale(1.04); }
  .blog-card-title {
    font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400;
    color: var(--brown); margin-bottom: 10px; line-height: 1.3;
  }

  /* ── ABOUT */
  .about-section { padding: 80px 48px; }
  .about-split { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-bottom: 96px; }
  @media (max-width: 900px) { .about-split { grid-template-columns: 1fr; gap: 40px; } }
  .about-img-wrap { position: relative; }
  .about-img { width: 100%; object-fit: cover; display: block; }
  .about-img-accent {
    position: absolute; bottom: -20px; right: -20px; width: 60%; height: 60%;
    border: 2px solid var(--rose); z-index: -1;
  }
  .about-eyebrow { font-size: .72rem; letter-spacing: .3em; text-transform: uppercase; color: var(--rose-dark); margin-bottom: 12px; }
  .about-title {
    font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; font-weight: 300;
    color: var(--brown); margin-bottom: 20px; line-height: 1.25;
  }
  .about-body { font-size: .95rem; line-height: 1.8; color: var(--text-light); margin-bottom: 16px; }
  .about-values { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
  .value-tag {
    border: 1px solid var(--brown-pale); color: var(--brown);
    padding: 6px 18px; font-size: .75rem; letter-spacing: .15em; text-transform: uppercase;
    transition: all .3s;
  }
  .value-tag:hover { background: var(--rose); border-color: var(--rose); }
  .team-section { text-align: center; }
  .team-grid { display: grid; grid-template-columns: repeat(2, 340px); gap: 48px; justify-content: center; margin-top: 48px; }
  @media (max-width: 760px) { .team-grid { grid-template-columns: 1fr; } }
  .team-card {}
  .team-img { width: 100%; aspect-ratio: 1; object-fit: cover; object-position: top; margin-bottom: 16px; }
  .team-name {
    font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400;
    color: var(--brown); margin-bottom: 4px;
  }
  .team-role { font-size: .75rem; letter-spacing: .15em; text-transform: uppercase; color: var(--rose-dark); margin-bottom: 12px; }
  .team-quote { font-size: .9rem; line-height: 1.7; color: var(--text-light); font-style: italic; }

  /* ── CONTACT */
  .contact-section { padding: 80px 48px; }
  .contact-split { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; }
  @media (max-width: 900px) { .contact-split { grid-template-columns: 1fr; } }
  .contact-info-title {
    font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300;
    color: var(--brown); margin-bottom: 32px;
  }
  .contact-items { display: flex; flex-direction: column; gap: 24px; margin-bottom: 40px; }
  .contact-item { display: flex; gap: 16px; align-items: flex-start; }
  .contact-icon { font-size: 1.2rem; }
  .contact-label { font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--rose-dark); margin-bottom: 2px; }
  .contact-val { font-size: .9rem; color: var(--text); }
  .contact-socials { display: flex; gap: 10px; }
  .social-btn {
    border: 1px solid var(--brown-pale); background: none; cursor: pointer;
    color: var(--brown); font-family: 'Jost', sans-serif; font-size: .72rem;
    letter-spacing: .12em; text-transform: uppercase; padding: 8px 16px;
    transition: all .3s;
  }
  .social-btn:hover { background: var(--rose); border-color: var(--rose); }
  .contact-form-wrap {
    background: var(--white); padding: 48px; box-shadow: 0 4px 40px rgba(92,61,46,.08);
  }
  .contact-form { display: flex; flex-direction: column; gap: 20px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
  .form-group { display: flex; flex-direction: column; gap: 6px; }
  .form-group label {
    font-size: .7rem; letter-spacing: .15em; text-transform: uppercase; color: var(--text-light);
  }
  .form-group input, .form-group select, .form-group textarea {
    border: 1px solid var(--brown-pale); padding: 12px 16px;
    font-family: 'Jost', sans-serif; font-size: .9rem; color: var(--text);
    background: var(--cream); outline: none; transition: border-color .3s;
    resize: vertical;
  }
  .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-color: var(--rose-dark);
  }
  .form-success {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    height: 280px; text-align: center; gap: 16px;
  }
  .success-icon { font-size: 2.5rem; color: var(--rose-dark); }
  .form-success h3 {
    font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; color: var(--brown);
  }
  .form-success p { color: var(--text-light); }

  /* ── FOOTER */
  .footer { background: var(--brown); color: rgba(255,255,255,.8); }
  .footer-top {
    display: flex; align-items: flex-start; justify-content: space-between;
    padding: 64px 48px; gap: 40px; flex-wrap: wrap;
  }
  .footer-logo {
    font-family: 'Cormorant Garamond', serif; font-size: 1.8rem;
    font-weight: 300; color: var(--white); margin-bottom: 8px;
  }
  .footer-tagline { font-size: .75rem; opacity: .6; letter-spacing: .1em; }
  .footer-links { display: flex; flex-direction: column; gap: 12px; }
  .footer-link {
    background: none; border: none; cursor: pointer; color: rgba(255,255,255,.7);
    font-family: 'Jost', sans-serif; font-size: .8rem; letter-spacing: .1em;
    text-align: left; transition: color .3s;
  }
  .footer-link:hover { color: var(--rose); }
  .footer-bottom {
    border-top: 1px solid rgba(255,255,255,.1);
    padding: 20px 48px;
    display: flex; justify-content: space-between; align-items: center;
    font-size: .75rem; opacity: .5;
  }
  @media (max-width: 600px) {
    .footer-top { padding: 40px 24px; }
    .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
    .section-products, .blog-section, .about-section, .contact-section { padding: 60px 24px; }
    .page-header { padding: 120px 24px 60px; }
    .newsletter-section { padding: 60px 24px; }
    .newsletter-form { flex-direction: column; }
    .newsletter-input { border-right: 1px solid var(--brown-pale); border-bottom: none; }
    .intro-stats { gap: 24px; }
    .stat-sep { display: none; }
  }
`;
