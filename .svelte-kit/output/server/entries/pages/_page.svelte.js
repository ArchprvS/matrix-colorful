import "clsx";
import { G as ensure_array_like, I as attr_class, J as attr_style, F as escape_html, B as pop, z as push, K as stringify, M as attr } from "../../chunks/index2.js";
import { w as writable, g as get } from "../../chunks/index.js";
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
function Creating($$payload, $$props) {
  push();
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
  let sectionVisible = false;
  const each_array = ensure_array_like(steps);
  $$payload.out.push(`<section id="cre_sec"${attr_class("process svelte-1as3pqn", void 0, { "visible": sectionVisible })}><h2${attr_class("section-title svelte-1as3pqn", void 0, { "animate-title": sectionVisible })}>Proces tworzenia</h2> <div class="steps svelte-1as3pqn"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let step = each_array[i];
    $$payload.out.push(`<div${attr_class("step svelte-1as3pqn", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(i * 0.15)}s;`)}><div class="circle svelte-1as3pqn">${escape_html(i + 1)}</div> <div class="step-content svelte-1as3pqn"><h3 class="svelte-1as3pqn">${escape_html(step.title)}</h3> <p class="svelte-1as3pqn">${escape_html(step.desc)}</p></div></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
  pop();
}
function Header($$payload) {
  $$payload.out.push(`<div class="menu svelte-1is6wts"><a href="#"><img src="./logo_rgb.png" alt="logo" class="logo svelte-1is6wts"/></a> <a href="#cre_sec" class="menuitem svelte-1is6wts">Tworzenie</a> <a href="#rea_sec" class="menuitem svelte-1is6wts">Realizacje</a> <a href="#con_sec" class="menuitem svelte-1is6wts">Kontakt</a> <a href="#faq_sec" class="menuitem svelte-1is6wts">FAQ</a></div>`);
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
    hue: 280 + Math.random() * 120,
    // Random hue for color variation
    delay: Math.random() * 10,
    // Random animation delay up to 2s
    angle: Math.random() * 360
    // Random angle for radial movement
  }));
  const each_array = ensure_array_like(particles);
  $$payload.out.push(`<div class="banner svelte-16x0f8r"><div class="banner-content svelte-16x0f8r"><h1${attr_class("svelte-16x0f8r", void 0, { "releasing": release_text })}>Wykreujemy twoją<br class="svelte-16x0f8r"/>cyfrową przyszłość</h1> <button${attr_class("svelte-16x0f8r", void 0, { "releasing": release_button })}>Bezpłatna konsultacja</button> <p${attr_class("svelte-16x0f8r", void 0, { "releasing": release_text })}>${escape_html(dynamic_text_upper)}<br class="svelte-16x0f8r"/>${escape_html(dynamic_text_lower)}<span${attr_style(`color: ${stringify(dot_status)}`)} class="svelte-16x0f8r">.</span></p> <!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let particle = each_array[$$index];
    $$payload.out.push(`<div class="particle svelte-16x0f8r"${attr_style(` width: ${stringify(particle.size)}px; height: ${stringify(particle.size)}px; --color: hsl(${stringify(particle.hue)}, 80%, 80%); animation-delay: ${stringify(particle.delay)}s; --angle: ${stringify(particle.angle)}deg; `)}></div>`);
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
function Footer($$payload, $$props) {
  push();
  $$payload.out.push(`<footer class="footer svelte-1qru4ic"><div class="footer-content svelte-1qru4ic"><div class="footer-logo svelte-1qru4ic"><img src="./logo_rgb.png" alt="logo" class="svelte-1qru4ic"/></div> <div class="footer-links svelte-1qru4ic"><a href="/Creating" class="footer-link svelte-1qru4ic">Tworzenie</a> <a href="#" class="footer-link svelte-1qru4ic">Realizacje</a> <a href="#" class="footer-link svelte-1qru4ic">Kontakt</a> <a href="#" class="footer-link svelte-1qru4ic">FAQ</a></div> <div class="footer-copy svelte-1qru4ic">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} matrix-colorful. Wszelkie prawa zastrzeżone.</div></div></footer>`);
  pop();
}
function Reals($$payload, $$props) {
  push();
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
      name: "Firma F",
      src: "logo-ws.png",
      url: "https://firma-f.pl"
    },
    {
      name: "Firma G",
      src: "logo-kronos.png",
      url: "https://firma-g.pl"
    }
  ];
  let sectionVisible = false;
  let titleVisible = false;
  let logosVisible = false;
  const each_array = ensure_array_like(realizacje);
  $$payload.out.push(`<section id="rea_sec"${attr_class("reals svelte-17xo8cq", void 0, { "visible": sectionVisible })}><div class="content svelte-17xo8cq"><h2${attr_class("section-title svelte-17xo8cq", void 0, { "animate": titleVisible })}><span class="title-text svelte-17xo8cq">Nasze realizacje</span></h2> <div${attr_class("logos svelte-17xo8cq", void 0, { "animate": logosVisible })}><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let r = each_array[i];
    $$payload.out.push(`<a class="logo-tile svelte-17xo8cq"${attr("href", r.url)} target="_blank" rel="noopener"${attr("title", r.name)}${attr_style(`--delay: ${stringify(i * 0.15)}s;`)}><div class="tile-bg svelte-17xo8cq"></div> <div class="tile-border svelte-17xo8cq"></div> <div class="logo-wrapper svelte-17xo8cq"><img${attr("src", r.src)}${attr("alt", "Logo " + r.name)} class="svelte-17xo8cq"/></div> <div class="shine-effect svelte-17xo8cq"></div></a>`);
  }
  $$payload.out.push(`<!--]--></div></div></section>`);
  pop();
}
function Contactform($$payload, $$props) {
  push();
  let name = "";
  let surname = "";
  let email = "";
  let subject = "";
  let message = "";
  let sectionVisible = false;
  $$payload.out.push(`<section id="con_sec"${attr_class("contact-form-section svelte-1idtmfm", void 0, { "visible": sectionVisible })}><h2${attr_class("section-title svelte-1idtmfm", void 0, { "animate-title": sectionVisible })}>Cześć ${escape_html(name)}! <br class="svelte-1idtmfm"/>Napisz do nas!</h2> <form class="contact-form svelte-1idtmfm"><div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(0 * 0.15)}s;`)}><input type="text" name="name" placeholder="Imię"${attr("value", name)} required class="svelte-1idtmfm"/></div> <div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(1 * 0.15)}s;`)}><input type="text" name="surname" placeholder="Nazwisko"${attr("value", surname)} required class="svelte-1idtmfm"/></div> <div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(2 * 0.15)}s;`)}><input type="email" name="email" placeholder="Adres e-mail"${attr("value", email)} required class="svelte-1idtmfm"/></div> <div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(3 * 0.15)}s;`)}><input type="text" name="subject" placeholder="Temat"${attr("value", subject)} class="svelte-1idtmfm"/></div> <div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(4 * 0.15)}s;`)}><textarea name="message" rows="5" placeholder="Wiadomość" required class="svelte-1idtmfm">`);
  const $$body = escape_html(message);
  if ($$body) {
    $$payload.out.push(`${$$body}`);
  }
  $$payload.out.push(`</textarea></div> <div${attr_class("form-row svelte-1idtmfm", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(5 * 0.15)}s;`)}><button type="submit" class="svelte-1idtmfm">Wyślij wiadomość</button></div></form> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></section>`);
  pop();
}
function Faq($$payload, $$props) {
  push();
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
  let sectionVisible = false;
  const each_array = ensure_array_like(faqs);
  $$payload.out.push(`<section id="faq_sec"${attr_class("faq-section svelte-1cjihqp", void 0, { "visible": sectionVisible })}><h2${attr_class("section-title svelte-1cjihqp", void 0, { "animate-title": sectionVisible })}>Najczęściej zadawane pytania</h2> <div class="faq-list svelte-1cjihqp"><!--[-->`);
  for (let idx = 0, $$length = each_array.length; idx < $$length; idx++) {
    let faq = each_array[idx];
    $$payload.out.push(`<div${attr_class("faq-item svelte-1cjihqp", void 0, { "visible": sectionVisible })}${attr_style(`--delay: ${stringify(idx * 0.15)}s;`)}><button class="faq-question svelte-1cjihqp"${attr("aria-expanded", open === idx)}>${escape_html(faq.question)} <span class="faq-toggle svelte-1cjihqp">${escape_html(open === idx ? "−" : "+")}</span></button> `);
    if (open === idx) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="faq-answer svelte-1cjihqp">${escape_html(faq.answer)}</div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
  pop();
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
  $$payload.out.push(`<section${attr_class("offer-section svelte-1u1xze5", void 0, { "visible": sectionVisible })}><div class="background-particles svelte-1u1xze5"><!--[-->`);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out.push(`<div class="particle svelte-1u1xze5"${attr_style(`--delay: ${stringify(i * 0.5)}s; --duration: ${stringify(8 + i * 2)}s;`)}></div>`);
  }
  $$payload.out.push(`<!--]--></div> <h2${attr_class("section-title svelte-1u1xze5", void 0, { "animate-title": sectionVisible })}>Nasza oferta <div class="title-underline svelte-1u1xze5"></div></h2> <div class="offer-list svelte-1u1xze5"><!--[-->`);
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let offer = each_array_1[i];
    $$payload.out.push(`<div${attr_class("offer-card svelte-1u1xze5", void 0, { "visible": sectionVisible, "hovered": hoveredCard === i })}${attr_style(`--delay: ${stringify(i * 0.15)}s;`)} role="button" tabindex="0"><div class="card-glow svelte-1u1xze5"></div> <div class="offer-icon svelte-1u1xze5"><div class="icon-wrapper svelte-1u1xze5"><img${attr("src", offer.src)} alt="offer" class="svelte-1u1xze5"/></div></div> <div class="offer-content svelte-1u1xze5"><h3 class="svelte-1u1xze5">${escape_html(offer.title)}</h3> <p class="svelte-1u1xze5">${escape_html(offer.desc)}</p></div> <div class="card-border svelte-1u1xze5"></div> `);
    if (hoveredCard === i) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="spotlight svelte-1u1xze5"${attr_style(`--mouse-x: ${stringify(mouseX)}%; --mouse-y: ${stringify(mouseY)}%;`)}></div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
  pop();
}
function _page($$payload, $$props) {
  push();
  {
    $$payload.out.push("<!--[!-->");
    Header($$payload);
  }
  $$payload.out.push(`<!--]--> <div class="container svelte-15ugrrm">`);
  Banner($$payload);
  $$payload.out.push(`<!----> `);
  Offer($$payload);
  $$payload.out.push(`<!----> `);
  Creating($$payload);
  $$payload.out.push(`<!----> `);
  Reals($$payload);
  $$payload.out.push(`<!----> `);
  Contactform($$payload);
  $$payload.out.push(`<!----> `);
  Faq($$payload);
  $$payload.out.push(`<!----></div> `);
  Footer($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
