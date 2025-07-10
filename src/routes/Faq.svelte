<script>
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
  function toggle(idx) {
    open = open === idx ? null : idx;
  }
</script>

<section class="faq-section">
  <h2>Najczęściej zadawane pytania</h2>
  <div class="faq-list">
    {#each faqs as faq, idx}
      <div class="faq-item">
        <button class="faq-question" on:click={() => toggle(idx)} aria-expanded={open === idx}>
          {faq.question}
          <span class="faq-toggle">{open === idx ? "−" : "+"}</span>
        </button>
        {#if open === idx}
          <div class="faq-answer">
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
    background: rgba(245,245,245,0.65);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    z-index: 2;
    position: relative;
  }
  .faq-section h2 {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 3vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px #fff8;
    font-weight: 700;
  }
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
  .faq-item {
    background: rgba(255,255,255,0.85);
    border-radius: 1em;
    box-shadow: 0 2px 12px #0001;
    padding: 0;
    overflow: hidden;
    transition: box-shadow 0.2s;
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
    transition: background 0.18s;
  }
  .faq-question:hover {
    background: rgba(0,159,227,0.08);
  }
  .faq-toggle {
    font-size: 1.5em;
    line-height: 1;
    margin-left: 1em;
    color: #009fe3;
    font-weight: 700;
    user-select: none;
  }
  .faq-answer {
    padding: 0.5em 1.5em 1.2em 1.5em;
    color: #444;
    font-size: 1.08rem;
    font-family: "Segoe UI", Arial, sans-serif;
    animation: fadeInFaq 0.3s;
  }
  @keyframes fadeInFaq {
    from { opacity: 0; transform: translateY(-10px);}
    to { opacity: 1; transform: translateY(0);}
  }
  @media (max-width: 700px) {
    .faq-section {
      max-width: 98vw;
      padding: 4vw 2vw;
    }
    .faq-question {
      font-size: 1rem;
      padding: 1em 1em;
    }
    .faq-answer {
      font-size: 0.98rem;
      padding: 0.2em 1em 1em 1em;
    }
  }
</style>