<script>
  import { onMount, onDestroy } from 'svelte';
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  import { setGlobalOptions } from 'svelte-scrolling';

  // Prekalkulowane dane FAQ - bez zmian
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

  let open = $state(null);
  let sectionVisible = $state(false);

  // Przechowywanie referencji do observer
  let intersectionObserver;

  // Inline funkcja dla lepszej wydajności
  const toggle = (idx) => {
    open = open === idx ? null : idx;
  };

  onMount(() => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // Obserwujemy tylko jeden element
        if (entry.isIntersecting) {
          sectionVisible = true;
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#faq_sec');
    if (section) intersectionObserver.observe(section);
  });

  onDestroy(() => {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }
  });
</script>

<section id="faq_sec" class="faq-section" class:visible={sectionVisible}>
  <h2 class="section-title" class:animate-title={sectionVisible}>
    Najczęściej zadawane pytania
  </h2>
  <div class="faq-list">
    {#each faqs as faq, idx}
      <div class="faq-item" class:visible={sectionVisible} style="--delay: {idx * 0.15}s;">
        <button
          class="faq-question"
          on:click={() => toggle(idx)}
          aria-expanded={open === idx}
          aria-controls="faq-answer-{idx}"
        >
          {faq.question}
          <span class="faq-toggle" aria-hidden="true">{open === idx ? "−" : "+"}</span>
        </button>
        {#if open === idx}
          <div class="faq-answer" id="faq-answer-{idx}" role="region">
            {faq.answer}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
  .faq-section {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245, 245, 245, 0.5);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    z-index: 2;
    position: relative;
    backdrop-filter: blur(1.5px);
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  .faq-section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .section-title {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 3vh;
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

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }

  .faq-item {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 1em;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.067);
    padding: 0;
    overflow: hidden;
    transition: box-shadow 0.2s ease;
    opacity: 0;
    transform: translateY(60px) rotateX(15deg);
    will-change: transform, opacity;
  }

  .faq-item.visible {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    animation: faqItemEntrance 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: var(--delay, 0s);
  }

  @keyframes faqItemEntrance {
    0% {
      opacity: 0;
      transform: translate3d(0, 60px, 0) rotateX(15deg) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  .faq-question {
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    outline: none;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: #232323;
    padding: 1.2em 1.5em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.18s ease;
    will-change: background-color;
  }

  .faq-question:hover {
    background: rgba(0, 159, 227, 0.08);
  }

  .faq-question:focus {
    background: rgba(0, 159, 227, 0.12);
    outline: 2px solid rgba(0, 159, 227, 0.3);
    outline-offset: -2px;
  }

  .faq-toggle {
    font-size: 1.5em;
    line-height: 1;
    margin-left: 1em;
    color: #009fe3;
    font-weight: 700;
    user-select: none;
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
  }

  .faq-question[aria-expanded="true"] .faq-toggle {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0.5em 1.5em 1.2em 1.5em;
    color: #444;
    font-size: 1.08rem;
    font-family: "Segoe UI", Arial, sans-serif;
    animation: fadeInFaq 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
  }

  @keyframes fadeInFaq {
    0% {
      opacity: 0;
      transform: translate3d(0, -10px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media (max-width: 700px) {
    .faq-section {
      max-width: 98vw;
      padding: 4vw 2vw;
    }

    .faq-question {
      font-size: 1rem;
      padding: 1em;
    }

    .faq-answer {
      font-size: 0.98rem;
      padding: 0.2em 1em 1em 1em;
    }
  }
</style>