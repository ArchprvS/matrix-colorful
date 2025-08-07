<script>
  import { onMount, onDestroy } from 'svelte';

  // Prekalkulowane dane - bez zmian
  const steps = [
    {
      title: "Analiza potrzeb klienta",
      desc: "Poznajemy Twoje cele i wymagania, aby zaproponować najlepsze rozwiązania.",
    },
    {
      title: "Projekt zgodny z wytycznymi",
      desc: "Tworzymy nowoczesny, funkcjonalny projekt graficzny zgodny z Twoją wizją.",
    },
    {
      title: "Dostosowywanie i optymalizacja",
      desc: "Dbamy o detale, responsywność i wydajność na każdym etapie realizacji.",
    },
    {
      title: "Wdrożenie gotowego projektu",
      desc: "Publikujemy i konfigurujemy Twój projekt, zapewniając wsparcie po wdrożeniu.",
    },
  ];

  let sectionVisible = $state(false);

  // Przechowywanie referencji do observer
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

    const section = document.querySelector('#cre_sec');
    if (section) intersectionObserver.observe(section);
  });

  onDestroy(() => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }
  });
</script>

<section id="cre_sec" class="process" class:visible={sectionVisible}>
  <h2 class="section-title" class:animate-title={sectionVisible}>
    Proces tworzenia
  </h2>
  <div class="steps">
    {#each steps as step, i}
      <div class="step" class:visible={sectionVisible} style="--delay: {i * 0.15}s;">
        <div class="circle">{i + 1}</div>
        <div class="step-content">
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .process {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245, 245, 245, 0.1);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    z-index: 2;
    position: relative;
    backdrop-filter: blur(3px);
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .process.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-title {
    color: #e7e7e7;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    text-align: center;
    margin-bottom: 5vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px rgba(255, 255, 255, 0.5);
    font-weight: 700;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .section-title.animate-title {
    opacity: 1;
    transform: translateY(0);
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;
  }

  .step {
    flex: 1 1 200px;
    min-width: 220px;
    max-width: 260px;
    background: rgba(255, 255, 255, 0.289);
    border-radius: 1.2em;
    padding: 2.5em 1.2em 1.2em 1.2em;
    margin: 0 auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.067);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(60px) rotateX(15deg);
    transition:
      opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.3s ease,
      background 0.1s ease;
    animation-fill-mode: forwards;
    will-change: transform, opacity;
  }
  .step:hover {
    background: rgba(255, 255, 255, 0.508);
  }

  .step.visible {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    animation: stepEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes stepEntrance {
    0% {
      opacity: 0;
      transform: translate3d(0, 60px, 0) rotateX(15deg) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  .circle {
    position: absolute;
    top: -1.5em;
    left: 50%;
    transform: translateX(-50%);
    width: 2.8em;
    height: 2.8em;
    background: linear-gradient(135deg, #232323 60%, #444 100%);
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6em;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.133);
    border: 3px solid #fff;
    z-index: 1;
    overflow: visible;
    will-change: transform;
  }

  .circle::after {
    content: "";
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top: 3px solid rgba(0, 183, 255, 0.729);
    border-right: 3px solid rgba(223, 14, 129, 0.737);
    border-bottom: 3px solid rgba(223, 208, 7, 0.841);
    border-left: 3px solid rgba(249, 87, 0, 0.811);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    will-change: transform, opacity;
  }

  .step:hover .circle::after {
    opacity: 1;
    animation: spin-impulse 1.5s linear infinite;
  }

  @keyframes spin-impulse {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .step-content {
    margin-top: 1.5em;
    text-align: center;
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
  }

  .step-content h3 {
    font-size: 1.25em;
    font-weight: 600;
    margin-bottom: 0.6em;
    color: #232323;
    text-shadow: 0 1px 8px rgba(255, 255, 255, 0.375);
  }

  .step-content p {
    font-size: 1em;
    color: #444;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .steps {
      flex-direction: column;
      align-items: center;
      gap: 3vh;
    }

    .step {
      max-width: 340px;
      width: 90%;
    }
  }
</style>