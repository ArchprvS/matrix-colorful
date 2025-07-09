<script>
  // Przykładowe dane – podmień src na własne ścieżki do logo
  const realizacje = [
    { name: "Firma A", src: "AVENET.svg", url: "https://firma-a.pl" },
    { name: "Firma B", src: "bajlando.png", url: "https://firma-b.pl" },
    { name: "Firma C", src: "logo-my-deco.webp", url: "https://firma-c.pl" },
    { name: "Firma D", src: "logo-po-sl.png", url: "https://firma-d.pl" },
    { name: "Firma E", src: "scg_logo.png", url: "https://firma-e.pl" },
    { name: "Firma E", src: "logo-ws.png", url: "https://firma-e.pl" },
    { name: "Firma E", src: "logo-kronos.png", url: "https://firma-e.pl" },
  ];

  // const show_link = () => {

  // }
</script>

<section class="reals">
  <h2>Nasze realizacje</h2>
  <div class="logos">
    {#each realizacje as r}
      <a class="logo-tile" href={r.url} target="_blank" rel="noopener" title={r.name}>
        <img src={r.src} alt={"Logo " + r.name} />
      </a>
    {/each}
  </div>
</section>

<style>
  :global(body) {
    overflow-x: hidden;
  }
  .reals {
    width: 100%;
    max-width: 1100px;
    margin: 8vh auto 4vh auto;
    padding: 4vh 2vw;
    background: rgba(245, 245, 245, 0.65);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    z-index: 2;
    position: relative;
  }
  .reals h2 {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    text-align: center;
    margin-bottom: 5vh;
    letter-spacing: 0.04em;
    text-shadow: 0 2px 16px #fff8;
    font-weight: 700;
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2vw 3vw;
  }
  .logo-tile {
    background: rgba(255,255,255,0.32);
    border-radius: 1.2em;
    box-shadow: 0 2px 12px #0001;
    padding: 1.5em 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
    min-width: 120px;
    min-height: 80px;
    max-width: 180px;
    margin: 1vh 0;
    position: relative;
  }
  .logo-tile:hover {
    background: rgba(255,255,255,0.7);
    transform: translateY(-6px) scale(1.04);
    box-shadow: 0 8px 24px #0002;
  }
  .logo-tile img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px #fff6);
    transition: filter 0.2s;
  }
  .logo-tile:hover img {
    filter: drop-shadow(0 4px 16px #00b7ff55);
  }
  @media (max-width: 900px) {
    .logos {
      gap: 3vw 4vw;
    }
    .logo-tile {
      max-width: 90vw;
      padding: 1em 1.5em;
    }
    .logo-tile img {
      max-width: 90px;
      max-height: 40px;
    }
  }
</style>