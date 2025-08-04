<script>
  import { onMount } from 'svelte';

  const realizacje = [
    { name: "Firma A", src: "AVENET.svg", url: "https://firma-a.pl" },
    { name: "Firma B", src: "bajlando.png", url: "https://firma-b.pl" },
    { name: "Firma C", src: "logo-my-deco.webp", url: "https://firma-c.pl" },
    { name: "Firma D", src: "logo-po-sl.png", url: "https://firma-d.pl" },
    { name: "Firma E", src: "scg_logo.png", url: "https://firma-e.pl" },
    { name: "Firma F", src: "logo-ws.png", url: "https://firma-f.pl" },
    { name: "Firma G", src: "logo-kronos.png", url: "https://firma-g.pl" },
  ];

  let sectionVisible = false;
  let titleVisible = false;
  let logosVisible = false;

  onMount(() => {
    // Prostszy observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionVisible = true;
          setTimeout(() => titleVisible = true, 200);
          setTimeout(() => logosVisible = true, 400);
        }
      });
    }, { threshold: 0.2 });

    const section = document.querySelector('#rea_sec');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="rea_sec" class="reals" class:visible={sectionVisible}>
  <!-- Animowane tło -->
  <div class="background-effects">
    <div class="gradient-blob blob-1"></div>
    <div class="gradient-blob blob-2"></div>
  </div>

  <!-- Floating particles -->
  <div class="particles">
    {#each Array(6) as _, i}
      <div class="particle" style="--delay: {i * 0.5}s; --x: {20 + i * 15}%; --y: {30 + (i % 2) * 40}%;"></div>
    {/each}
  </div>

  <div class="content">
    <h2 class="section-title" class:animate={titleVisible}>
      <span class="title-text">Nasze realizacje</span>
      <div class="title-underline"></div>
    </h2>

    <div class="logos" class:animate={logosVisible}>
      {#each realizacje as r, i}
        <a
          class="logo-tile"
          href={r.url}
          target="_blank"
          rel="noopener"
          title={r.name}
          style="--delay: {i * 0.1}s;"
        >
          <div class="tile-bg"></div>
          <div class="tile-border"></div>

          <div class="logo-wrapper">
            <img src={r.src} alt={"Logo " + r.name} />
          </div>

          <div class="shine-effect"></div>

          <div class="tooltip">{r.name}</div>
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
    padding: 6vh 4vw;
    background: rgba(255, 255, 255, 0.499);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .reals.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .background-effects {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .gradient-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(1.5px);
    animation: blobFloat 10s ease-in-out infinite;
  }

  .blob-1 {
    width: 200px;
    height: 200px;
    background: rgba(59, 130, 246, 0.1);
    top: -100px;
    left: -50px;
  }

  .blob-2 {
    width: 150px;
    height: 150px;
    background: rgba(16, 185, 129, 0.08);
    bottom: -75px;
    right: -50px;
    animation-delay: 5s;
  }

  @keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(20px, -10px) scale(1.1); }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(59, 130, 246, 0.4);
    border-radius: 50%;
    left: var(--x);
    top: var(--y);
    animation: particleFloat 8s ease-in-out infinite;
    animation-delay: var(--delay);
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0px);
      opacity: 0.4;
    }
    50% {
      transform: translateY(-20px);
      opacity: 1;
    }
  }

  .content {
    position: relative;
    z-index: 10;
  }

  .section-title {
    color: #1e293b;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    font-size: clamp(2rem, 4vw, 2.8rem);
    text-align: center;
    margin-bottom: 5vh;
    letter-spacing: 0.02em;
    font-weight: 700;
    position: relative;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .section-title.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .title-text {
    background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .title-underline {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #3b82f6, transparent);
    margin: 1rem auto 0;
    border-radius: 2px;
    animation: underlineGlow 2s ease-in-out infinite;
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
    background: rgba(255, 255, 255, 0.6);
    border-radius: 1.2rem;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    backdrop-filter: blur(10px);
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
    background: linear-gradient(45deg,
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

  .tooltip {
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(30, 41, 59, 0.9);
    color: white;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    z-index: 20;
  }

  .tooltip::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid rgba(30, 41, 59, 0.9);
  }

  .logo-tile:hover .tooltip {
    opacity: 1;
    visibility: visible;
    bottom: -45px;
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

    .particles,
    .background-effects {
      display: none;
    }

    .tooltip {
      position: relative;
      bottom: auto;
      transform: none;
      background: none;
      color: #64748b;
      padding: 0;
      margin-top: 8px;
      opacity: 1;
      visibility: visible;
      font-size: 0.75rem;
    }

    .tooltip::before {
      display: none;
    }
  }
</style>