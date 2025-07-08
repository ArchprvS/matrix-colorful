<script>
  import { tick } from "svelte";
  let realizacje = [
    { name: "Firma A", src: "/images/logo-firma-a.svg", url: "https://firma-a.pl" },
    { name: "Firma B", src: "/images/logo-firma-b.svg", url: "https://firma-b.pl" },
    { name: "Firma C", src: "/images/logo-firma-c.svg", url: "https://firma-c.pl" },
    { name: "Firma D", src: "/images/logo-firma-d.svg", url: "https://firma-d.pl" },
    { name: "Firma E", src: "/images/logo-firma-e.svg", url: "https://firma-e.pl" },
  ];

  let track;
  let step = 0;
  let interval;
  let transitioning = false;

  function getStepWidth() {
    if (!track || !track.children.length) return 0;
    return track.children[0].offsetWidth + parseFloat(getComputedStyle(track).gap || 0);
  }

  async function nextStep() {
    if (transitioning) return;
    transitioning = true;
    step = 1;
    track.style.transition = "transform 0.5s";
    track.style.transform = `translateX(-${getStepWidth()}px)`;

    // Czekaj na koniec animacji
    await new Promise((res) => setTimeout(res, 500));

    // Przenieś pierwszy element na koniec
    track.style.transition = "none";
    realizacje = [...realizacje.slice(1), realizacje[0]];
    await tick();
    track.style.transform = "translateX(0)";

    // Pozwól na kolejne przesunięcie
    transitioning = false;
  }

  import { onMount, onDestroy } from "svelte";
  onMount(() => {
    interval = setInterval(nextStep, 3000);
  });
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<section class="reals">
  <h2>Nasze realizacje</h2>
  <div class="carousel">
    <div class="carousel-track" bind:this={track}>
      {#each realizacje as r (r.name)}
        <a class="logo-tile" href={r.url} target="_blank" rel="noopener" title={r.name}>
          <img src={r.src} alt={"Logo " + r.name} />
        </a>
      {/each}
    </div>
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
    overflow: hidden;
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
  .carousel {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 110px;
    display: flex;
    align-items: center;
    min-width: 0;
    box-sizing: border-box;
  }
  .carousel-track {
    display: flex;
    align-items: center;
    gap: 3vw;
    transition: transform 0.5s;
    will-change: transform;
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
    max-width: 175px;
    margin: 1vh 0;
    position: relative;
    flex: 0 0 auto;
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
    .carousel {
      height: 70px;
    }
    .carousel-track {
      gap: 4vw;
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