<script>
  import { onMount } from 'svelte';

  const realizacje = [
    { name: "Firma A", src: "AVENET.svg", url: "https://firma-a.pl" },
    { name: "Firma B", src: "bajlando.webp", url: "https://firma-b.pl" },
    { name: "Firma C", src: "logo-my-deco.webp", url: "https://firma-c.pl" },
    { name: "Firma D", src: "logo-po-sl.webp", url: "https://firma-d.pl" },
    { name: "Firma E", src: "scg_logo.png", url: "https://firma-e.pl" },
    { name: "Firma F", src: "logo_ws.webp", url: "https://firma-f.pl" },
    { name: "Firma G", src: "logo-kronos.png", url: "https://firma-g.pl" },
  ];

  let sectionVisible = false;
  let titleVisible = false;
  let logosVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionVisible = true;
            setTimeout(() => (titleVisible = true), 200);
            setTimeout(() => (logosVisible = true), 400);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#rea_sec');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="rea_sec" class="reals" class:visible={sectionVisible}>
  <div class="content">
    <h2 class="section-title" class:animate={titleVisible}>
      <span class="title-text">Nasze realizacje</span>
    </h2>

    <div class="logos" class:animate={logosVisible}>
      {#each realizacje as r, i}
        <a
          class="logo-tile"
          href={r.url}
          target="_blank"
          rel="noopener"
          title={r.name}
          style="--delay: {i * 0.15}s;"
        >
          <div class="tile-bg"></div>
          <div class="tile-border"></div>

          <div class="logo-wrapper">
            <img src={r.src} alt={"Logo " + r.name} />
          </div>

          <div class="shine-effect"></div>
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
    background: rgba(245, 245, 245, 0.5);
    border: 1px solid rgb(245, 245, 245);
    border-radius: 2vw;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    position: relative;
    backdrop-filter: blur(1.5px);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .reals.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .content {
    position: relative;
    z-index: 10;
  }

  .section-title {
    color: #232323;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    text-align: center;
    margin-bottom: 5vh;
    letter-spacing: 0.04em;
    font-weight: 700;
    text-shadow: 0 2px 16px rgba(255, 255, 255, 0.5);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .section-title.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .title-text {
    color: #232323;
  }

  @keyframes underlineGlow {
    0%, 100% {
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 2.5rem;
  }

  .logos.animate .logo-tile {
    animation: logoSlideIn 0.6s ease forwards;
    animation-delay: var(--delay);
  }

  @keyframes logoSlideIn {
    0% {
      opacity: 0;
      transform: translateY(40px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .logo-tile {
    background: rgba(255, 255, 255, 0.289);
    border-radius: 1.2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.4);
    min-width: 160px;
    min-height: 100px;
    max-width: 200px;
    transition: all 0.3s ease;
    text-decoration: none;
    opacity: 0;
  }

  .tile-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.6);
    border-radius: inherit;
    transition: all 0.3s ease;
  }

  .logo-tile:hover .tile-bg {
    background: rgba(255, 255, 255, 0.9);
  }

  .tile-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(45deg, #3b82f6, #10b981);
    padding: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  .logo-tile:hover .tile-border {
    opacity: 0.6;
  }

  .logo-tile:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow:
      0 15px 40px rgba(59, 130, 246, 0.15),
      0 8px 25px rgba(0, 0, 0, 0.1);
  }

  .shine-effect {
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 60%
    );
    transform: rotate(45deg);
    transition: transform 0.6s ease;
    pointer-events: none;
  }

  .logo-tile:hover .shine-effect {
    transform: rotate(45deg) translateX(100%);
  }

  .logo-wrapper {
    position: relative;
    z-index: 5;
    transition: transform 0.3s ease;
  }

  .logo-tile:hover .logo-wrapper {
    transform: scale(1.1);
  }

  .logo-wrapper img {
    max-width: 120px;
    max-height: 60px;
    object-fit: contain;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
    transition: filter 0.3s ease;
  }

  .logo-tile:hover .logo-wrapper img {
    filter: drop-shadow(0 4px 16px rgba(59, 130, 246, 0.2));
  }

  @media (max-width: 768px) {
    .reals {
      margin: 4vh auto;
      padding: 4vh 3vw;
      border-radius: 1.5rem;
    }

    .logos {
      gap: 1.5rem;
    }

    .logo-tile {
      padding: 1.5rem;
      min-width: 140px;
      max-width: 160px;
    }

    .logo-wrapper img {
      max-width: 100px;
      max-height: 50px;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 4vh;
    }
  }
</style>