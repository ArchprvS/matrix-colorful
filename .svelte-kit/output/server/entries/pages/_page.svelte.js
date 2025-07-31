import "clsx";
import { I as ensure_array_like, G as escape_html, J as attr_class, K as attr_style, M as stringify, D as pop, z as push, N as attr } from "../../chunks/index.js";
import { w as writable, g as get } from "../../chunks/index2.js";
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
const elements = writable([]);
const globalOptions = writable({
  offset: 0,
  duration: 500,
  passive: false,
  easing: cubicInOut,
  onStart: () => {
  },
  onDone: () => {
  }
});
get(globalOptions);
get(elements);
function Creating($$payload) {
  const steps = [
    {
      title: "Analiza potrzeb klienta",
      desc: "Poznajemy Twoje cele i wymagania, aby zaproponować najlepsze rozwiązania."
    },
    {
      title: "Projekt zgodny z wytycznymi",
      desc: "Tworzymy nowoczesny, funkcjonalny projekt graficzny zgodny z Twoją wizją."
    },
    {
      title: "Dostosowywanie i optymalizacja",
      desc: "Dbamy o detale, responsywność i wydajność na każdym etapie realizacji."
    },
    {
      title: "Wdrożenie gotowego projektu",
      desc: "Publikujemy i konfigurujemy Twój projekt, zapewniając wsparcie po wdrożeniu."
    }
  ];
  const each_array = ensure_array_like(steps);
  $$payload.out += `<section id="cre_sec" class="process svelte-op1uri"><h2 class="svelte-op1uri">Proces tworzenia</h2> <div class="steps svelte-op1uri"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let step = each_array[i];
    $$payload.out += `<div class="step svelte-op1uri"><div class="circle svelte-op1uri">${escape_html(i + 1)}</div> <div class="step-content svelte-op1uri"><h3 class="svelte-op1uri">${escape_html(step.title)}</h3> <p class="svelte-op1uri">${escape_html(step.desc)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}
function Header($$payload) {
  $$payload.out += `<div class="menu svelte-1is6wts"><a href="#"><img src="./logo_rgb.png" alt="logo" class="logo svelte-1is6wts"/></a> <a href="#cre_sec" class="menuitem svelte-1is6wts">Tworzenie</a> <a href="#rea_sec" class="menuitem svelte-1is6wts">Realizacje</a> <a href="#con_sec" class="menuitem svelte-1is6wts">Kontakt</a> <a href="#faq_sec" class="menuitem svelte-1is6wts">FAQ</a></div>`;
}
function Banner($$payload, $$props) {
  push();
  let dynamic_text_upper = "";
  let dynamic_text_lower = "";
  let dot_status = "transparent";
  let release_text = false;
  let release_button = false;
  let particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 8,
    // Particle size between 2-6px
    hue: 350 + Math.random() * 50,
    // Random hue for color variation
    delay: Math.random() * 10,
    // Random animation delay up to 2s
    angle: Math.random() * 360
    // Random angle for radial movement
  }));
  const each_array = ensure_array_like(particles);
  $$payload.out += `<div class="banner svelte-ys5jy"><div class="banner-content svelte-ys5jy"><h1${attr_class("svelte-ys5jy", void 0, { "releasing": release_text })}>Wykreujemy twoją<br class="svelte-ys5jy"/>cyfrową przyszłość</h1> <button${attr_class("svelte-ys5jy", void 0, { "releasing": release_button })}>Bezpłatna konsultacja</button> <p${attr_class("svelte-ys5jy", void 0, { "releasing": release_text })}>${escape_html(dynamic_text_upper)}<br class="svelte-ys5jy"/>${escape_html(dynamic_text_lower)}<span${attr_style(`color: ${stringify(dot_status)}`)} class="svelte-ys5jy">.</span></p> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let particle = each_array[$$index];
    $$payload.out += `<div class="particle svelte-ys5jy"${attr_style(` width: ${stringify(particle.size)}px; height: ${stringify(particle.size)}px; --color: hsl(${stringify(particle.hue)}, 65%, 65%); animation-delay: ${stringify(particle.delay)}s; --angle: ${stringify(particle.angle)}deg; `)}></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  $$payload.out += `<footer class="footer svelte-17bxdn9"><div class="footer-content svelte-17bxdn9"><div class="footer-logo svelte-17bxdn9"><img src="./logo_rgb.png" alt="logo" class="svelte-17bxdn9"/></div> <div class="footer-links svelte-17bxdn9"><a href="/Creating" class="footer-link svelte-17bxdn9">Tworzenie</a> <a href="#" class="footer-link svelte-17bxdn9">Realizacje</a> <a href="#" class="footer-link svelte-17bxdn9">Kontakt</a> <a href="#" class="footer-link svelte-17bxdn9">FAQ</a></div> <div class="footer-copy svelte-17bxdn9">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} matrix-colorful. Wszelkie prawa zastrzeżone.</div></div></footer>`;
  pop();
}
function Reals($$payload) {
  const realizacje = [
    {
      name: "Firma A",
      src: "AVENET.svg",
      url: "https://firma-a.pl"
    },
    {
      name: "Firma B",
      src: "bajlando.png",
      url: "https://firma-b.pl"
    },
    {
      name: "Firma C",
      src: "logo-my-deco.webp",
      url: "https://firma-c.pl"
    },
    {
      name: "Firma D",
      src: "logo-po-sl.png",
      url: "https://firma-d.pl"
    },
    {
      name: "Firma E",
      src: "scg_logo.png",
      url: "https://firma-e.pl"
    },
    {
      name: "Firma E",
      src: "logo-ws.png",
      url: "https://firma-e.pl"
    },
    {
      name: "Firma E",
      src: "logo-kronos.png",
      url: "https://firma-e.pl"
    }
  ];
  const each_array = ensure_array_like(realizacje);
  $$payload.out += `<section id="rea_sec" class="reals svelte-1kao3g8"><h2 class="svelte-1kao3g8">Nasze realizacje</h2> <div class="logos svelte-1kao3g8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let r = each_array[$$index];
    $$payload.out += `<a class="logo-tile svelte-1kao3g8"${attr("href", r.url)} target="_blank" rel="noopener"${attr("title", r.name)}><img${attr("src", r.src)}${attr("alt", "Logo " + r.name)} class="svelte-1kao3g8"/></a>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}
function Contactform($$payload) {
  let name = "";
  let surname = "";
  let email = "";
  let subject = "";
  let message = "";
  $$payload.out += `<section id="con_sec" class="contact-form-section svelte-1azu4k"><h2 class="svelte-1azu4k">Cześć ${escape_html(name)}! <br/>Napisz do nas!</h2> <form class="contact-form svelte-1azu4k"><div class="form-row svelte-1azu4k"><input type="text" name="name" placeholder="Imię"${attr("value", name)} required class="svelte-1azu4k"/></div> <div class="form-row svelte-1azu4k"><input type="text" name="surname" placeholder="Nazwisko"${attr("value", surname)} required class="svelte-1azu4k"/></div> <div class="form-row svelte-1azu4k"><input type="email" name="email" placeholder="Adres e-mail"${attr("value", email)} required class="svelte-1azu4k"/></div> <div class="form-row svelte-1azu4k"><input type="text" name="subject" placeholder="Temat"${attr("value", subject)} class="svelte-1azu4k"/></div> <div class="form-row svelte-1azu4k"><textarea name="message" rows="5" placeholder="Wiadomość" required class="svelte-1azu4k">`;
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> <div class="form-row svelte-1azu4k"><button type="submit" class="svelte-1azu4k">Wyślij wiadomość</button></div></form> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></section>`;
}
function Faq($$payload) {
  const faqs = [
    {
      question: "Ile kosztuje strona internetowa?",
      answer: "W zależności od stopnia skomplikowania – ceny zaczynają się od kilkuset złotych. Nie ma ściśle określonej górnej granicy."
    },
    {
      question: "Czy zapewniacie wsparcie po założeniu serwisu?",
      answer: "Tak, zapewniamy pełne wsparcie, aktualizacje i opiekę nad serwisem."
    },
    {
      question: "Jak długo trwa proces tworzenia strony?",
      answer: "W zależności od stopnia złożoności projektu proces ten trwa od kilku dni w przypadku prostych stron do kilku tygodni w przypadku sklepów internetowych i innych bardziej zaawansowanych serwisów."
    }
  ];
  let open = null;
  const each_array = ensure_array_like(faqs);
  $$payload.out += `<section id="faq_sec" class="faq-section svelte-1h3tinm"><h2 class="svelte-1h3tinm">Najczęściej zadawane pytania</h2> <div class="faq-list svelte-1h3tinm"><!--[-->`;
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let faq = each_array[idx];
    $$payload.out += `<div class="faq-item svelte-1h3tinm"><button class="faq-question svelte-1h3tinm"${attr("aria-expanded", open === idx)}>${escape_html(faq.question)} <span class="faq-toggle svelte-1h3tinm">${escape_html(open === idx ? "−" : "+")}</span></button> `;
    if (open === idx) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="faq-answer svelte-1h3tinm">${escape_html(faq.answer)}</div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
}
function Offer($$payload, $$props) {
  push();
  const offers = [
    {
      title: "Strony i sklepy internetowe",
      desc: "Nowoczesne, responsywne strony oraz sklepy internetowe dopasowane do Twoich potrzeb.",
      icon: "🌐",
      src: "./shopping-cart.png"
    },
    {
      title: "Aplikacje Webowe",
      desc: "Dedykowane aplikacje webowe wspierające rozwój Twojego biznesu.",
      icon: "💻",
      src: "./laptop.png"
    },
    {
      title: "SEO – pozycjonowanie",
      desc: "Zadbaj o widoczność swojej strony w wyszukiwarkach i pozyskaj nowych klientów.",
      icon: "🚀",
      src: "./rocket.png"
    },
    {
      title: "Automatyzacje sprzedaży",
      desc: "Integracje i automatyzacje procesów sprzedażowych dla większej efektywności.",
      icon: "🤖",
      src: "./automation.png"
    },
    {
      title: "Administrowanie serwerami",
      desc: "Bezpieczne i niezawodne zarządzanie Twoją infrastrukturą IT.",
      icon: "🛡️",
      src: "./security.png"
    }
  ];
  let sectionVisible = false;
  let hoveredCard = null;
  let mouseX = 0;
  let mouseY = 0;
  const each_array = ensure_array_like(Array(8));
  const each_array_1 = ensure_array_like(offers);
  $$payload.out += `<section${attr_class("offer-section svelte-114tzx7", void 0, { "visible": sectionVisible })}><div class="background-particles svelte-114tzx7"><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div class="particle svelte-114tzx7"${attr_style(`--delay: ${stringify(i * 0.5)}s; --duration: ${stringify(8 + i * 2)}s;`)}></div>`;
  }
  $$payload.out += `<!--]--></div> <h2${attr_class("section-title svelte-114tzx7", void 0, { "animate-title": sectionVisible })}>Nasza oferta <div class="title-underline svelte-114tzx7"></div></h2> <div class="offer-list svelte-114tzx7"><!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let offer = each_array_1[i];
    $$payload.out += `<div${attr_class("offer-card svelte-114tzx7", void 0, { "visible": sectionVisible, "hovered": hoveredCard === i })}${attr_style(`--delay: ${stringify(i * 0.15)}s;`)} role="button" tabindex="0"><div class="card-glow svelte-114tzx7"></div> <div class="offer-icon svelte-114tzx7"><div class="icon-wrapper svelte-114tzx7"><img${attr("src", offer.src)} alt="offer" class="svelte-114tzx7"/></div></div> <div class="offer-content svelte-114tzx7"><h3 class="svelte-114tzx7">${escape_html(offer.title)}</h3> <p class="svelte-114tzx7">${escape_html(offer.desc)}</p></div> <div class="card-border svelte-114tzx7"></div> `;
    if (hoveredCard === i) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="spotlight svelte-114tzx7"${attr_style(`--mouse-x: ${stringify(mouseX)}%; --mouse-y: ${stringify(mouseY)}%;`)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  {
    $$payload.out += "<!--[!-->";
    Header($$payload);
  }
  $$payload.out += `<!--]--> <div class="container svelte-15ugrrm">`;
  Banner($$payload);
  $$payload.out += `<!----> `;
  Offer($$payload);
  $$payload.out += `<!----> `;
  Creating($$payload);
  $$payload.out += `<!----> `;
  Reals($$payload);
  $$payload.out += `<!----> `;
  Contactform($$payload);
  $$payload.out += `<!----> `;
  Faq($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
