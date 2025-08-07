<script>
  import { onMount, onDestroy } from 'svelte';

  // Prekalkulowane dane ofert - bez zmian
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
    },
  ];

  // Prekalkulowane pozycje cząstek dla lepszej wydajności
  const particlePositions = [
    { top: '20%', left: '10%' },
    { top: '60%', left: '80%' },
    { top: '30%', left: '70%' },
    { top: '80%', left: '20%' },
    { top: '15%', left: '50%' },
    { top: '70%', left: '10%' },
    { top: '40%', left: '90%' },
    { top: '90%', left: '60%' }
  ];

  let sectionVisible = $state(false);
  let hoveredCard = $state(null);
  let mouseX = $state(0);
  let mouseY = $state(0);

  // Przechowywanie referencji do observer dla łatwiejszego czyszczenia
  let intersectionObserver;

  onMount(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // Obserwujemy tylko jeden element
        if (entry.isIntersecting && !sectionVisible) {
          sectionVisible = true;
          intersectionObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.offer-section');
    if (section) intersectionObserver.observe(section);
  });

  onDestroy(() => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }
  });

  // Optymalizacja - użycie requestAnimationFrame dla smooth mouse tracking
  let rafId;
  function handleMouseMove(event) {
    if (rafId) return; // Jeśli już jest zaplanowane, pomiń

    rafId = requestAnimationFrame(() => {
      const rect = event.currentTarget.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 100;
      mouseY = ((event.clientY - rect.top) / rect.height) * 100;
      rafId = null;
    });
  }

  // Inline funkcje dla lepszej wydajności (unikamy tworzenia nowych funkcji)
  const handleCardHover = (index) => hoveredCard = index;
  const handleCardLeave = () => hoveredCard = null;
</script>

<section class="offer-section" class:visible={sectionVisible}>
  <div class="background-particles">
    {#each Array(8) as _, i}
      <div
        class="particle"
        style="
          --delay: {i * 0.5}s;
          --duration: {8 + i * 2}s;
          top: {particlePositions[i].top};
          left: {particlePositions[i].left};
        "
      ></div>
    {/each}
  </div>

  <h2 class="section-title" class:animate-title={sectionVisible}>
    Nasza oferta
    <div class="title-underline"></div>
  </h2>

  <div class="offer-list">
    {#each offers as offer, i}
      <div
        class="offer-card"
        class:visible={sectionVisible}
        class:hovered={hoveredCard === i}
        style="--delay: {i * 0.15}s;"
        on:mouseenter={() => handleCardHover(i)}
        on:mouseleave={handleCardLeave}
        on:mousemove={handleMouseMove}
        role="button"
        tabindex="0"
      >
        <div class="card-glow"></div>
        <div class="offer-icon">
          <div class="icon-wrapper">
            <img src={offer.src} alt={offer.title} loading="lazy" />
          </div>
        </div>
        <div class="offer-content">
          <h3>{offer.title}</h3>
          <p>{offer.desc}</p>
        </div>
        <div class="card-border"></div>

        {#if hoveredCard === i}
          <div
            class="spotlight"
            style="--mouse-x: {mouseX}%; --mouse-y: {mouseY}%;"
          ></div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  .offer-section {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 4vw;
    background: rgba(245, 245, 245, 0.1);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 1vw;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    z-index: 2;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(3px);
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .offer-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .background-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, rgba(0, 159, 227, 0.8), transparent);
    border-radius: 50%;
    animation: float var(--duration, 10s) infinite ease-in-out;
    animation-delay: var(--delay, 0s);
    will-change: transform, opacity;
  }

  @keyframes float {
    0%, 100% {
      transform: translate3d(0, 0, 0) scale(1);
      opacity: 0.7;
    }
    50% {
      transform: translate3d(0, -20px, 0) scale(1.2);
      opacity: 1;
    }
  }

  .section-title {
    color: #e7e7e7;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 4vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px rgba(255, 255, 255, 0.5);
    font-weight: 700;
    position: relative;
    transform: translateY(30px);
    opacity: 0;
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .section-title.animate-title {
    transform: translateY(0);
    opacity: 1;
  }

  .title-underline {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    margin: 1rem auto 0;
    border-radius: 2px;
    animation: underlineGlow 2s ease-in-out infinite;
    will-change: box-shadow;
  }

  @keyframes underlineGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
    }
  }

  .offer-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw;
    justify-content: center;
  }

  .offer-card {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 1.2em;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 2em 2em 1.5em 2em;
    min-width: 220px;
    max-width: 300px;
    flex: 1 1 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(60px) rotateX(15deg);
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s ease,
      background-color 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation-fill-mode: forwards;
    will-change: transform, opacity, box-shadow;
  }

  .offer-card.visible {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    animation: cardEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes cardEntrance {
    0% {
      opacity: 0;
      transform: translate3d(0, 60px, 0) rotateX(15deg) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  .offer-card:hover {
    transform: translate3d(0, -12px, 0) scale(1.05);
    box-shadow: 0 20px 60px rgba(0, 159, 227, 0.25);
    background: rgba(255, 255, 255, 0.7);
  }

  .card-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(45deg, #009fe3, transparent);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .offer-card.hovered .card-border {
    opacity: 1;
  }

  .spotlight {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle 150px at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 255, 255, 0.1),
      transparent 70%
    );
    border-radius: inherit;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .offer-icon {
    margin-bottom: 0.7em;
    position: relative;
  }

  .icon-wrapper {
    position: relative;
    display: inline-block;
    transform-style: preserve-3d;
    transition: transform 0s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .offer-card:hover .icon-wrapper {
    transform: rotateY(360deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .icon-wrapper img {
    max-width: 50px;
    position: relative;
    z-index: 2;
    filter: drop-shadow(0 4px 12px rgba(0, 159, 227, 0.3));
    transition: filter 0.3s ease;
    will-change: filter;
  }

  .offer-card:hover .icon-wrapper img {
    filter: drop-shadow(0 8px 24px #009fe3);
  }

  .offer-content h3 {
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: 1.25em;
    font-weight: 700;
    color: #232323;
    margin-bottom: 0.5em;
    text-align: center;
    letter-spacing: 0.02em;
    position: relative;
    transition: color 0.3s ease;
    will-change: color;
  }

  .offer-card:hover .offer-content h3 {
    color: #009fe3;
  }

  .offer-content p {
    color: #444;
    font-size: 1.05em;
    text-align: center;
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
    transition: transform 0.3s ease;
    will-change: transform;
  }

  .offer-card:hover .offer-content p {
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    .offer-list {
      flex-direction: column;
      gap: 2vh;
    }

    .offer-card {
      max-width: 98vw;
      min-width: 0;
      padding: 1.5em 1em 1.2em 1em;
    }

    .particle {
      display: none;
    }
  }
</style>