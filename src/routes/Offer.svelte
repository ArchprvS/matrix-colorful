<script>
  const offers = [
    {
      title: "Strony i sklepy internetowe",
      desc: "Nowoczesne, responsywne strony oraz sklepy internetowe dopasowane do Twoich potrzeb.",
      icon: "🌐"
    },
    {
      title: "Aplikacje Webowe",
      desc: "Dedykowane aplikacje webowe wspierające rozwój Twojego biznesu.",
      icon: "💻"
    },
    {
      title: "SEO – pozycjonowanie",
      desc: "Zadbaj o widoczność swojej strony w wyszukiwarkach i pozyskaj nowych klientów.",
      icon: "🚀"
    },
    {
      title: "Automatyzacje sprzedaży",
      desc: "Integracje i automatyzacje procesów sprzedażowych dla większej efektywności.",
      icon: "🤖"
    },
    {
      title: "Administrowanie serwerami",
      desc: "Bezpieczne i niezawodne zarządzanie Twoją infrastrukturą IT.",
      icon: "🛡️"
    }
  ];
</script>

<section class="offer-section">
  <h2>Nasza oferta</h2>
  <div class="offer-list">
    {#each offers as offer, i}
      <div class="offer-card" style="animation-delay: {i * 0.13}s">
        <div class="offer-icon">{offer.icon}</div>
        <div class="offer-content">
          <h3>{offer.title}</h3>
          <p>{offer.desc}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .offer-section {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245,245,245,0.65);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.10);
    z-index: 2;
    position: relative;
    overflow: hidden;
  }
  .offer-section h2 {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.2rem);
    text-align: center;
    margin-bottom: 4vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px #fff8;
    font-weight: 700;
  }
  .offer-list {
    display: flex;
    flex-wrap: wrap;
    gap: 3vw 3vw;
    justify-content: center;
  }
  .offer-card {
    background: rgba(255, 255, 255, 0.289);
    border-radius: 1.2em;
    box-shadow: 0 2px 12px #0001;
    padding: 2em 2em 1.5em 2em;
    min-width: 220px;
    max-width: 300px;
    flex: 1 1 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    transform: translateY(40px) scale(0.98);
    animation: offer-fade-in 0.7s cubic-bezier(.4,1.5,.5,1) forwards;
    transition: box-shadow 0.2s, transform 0.2s, background-color 0.2s;
    cursor: pointer;
    position: relative;
  }
  .offer-card:hover {
    box-shadow: 0 8px 32px #009fe344;
    transform: translateY(-8px) scale(1.03);
    background: rgba(255, 255, 255, 0.652);
  }
  .offer-icon {
    font-size: 2.5em;
    margin-bottom: 0.7em;
    filter: drop-shadow(0 2px 8px #009fe344);
    transition: filter 0.2s;
  }
  .offer-card:hover .offer-icon {
    filter: drop-shadow(0 4px 16px #d72679c3);
  }
  .offer-content h3 {
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: 1.25em;
    font-weight: 700;
    color: #232323;
    margin-bottom: 0.5em;
    text-align: center;
    letter-spacing: 0.02em;
  }
  .offer-content p {
    color: #444;
    font-size: 1.05em;
    text-align: center;
    margin: 0;
    font-family: "Segoe UI", Arial, sans-serif;
  }
  @keyframes offer-fade-in {
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
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
  }
</style>