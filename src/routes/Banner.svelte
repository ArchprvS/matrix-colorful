<script>
  import { onMount } from "svelte";

  let text = "Projektujemy i wdrażamy po końcową ";
  let dynamic_text_upper = $state("");
  let dynamic_text_lower = $state("");
  let dot_status = $state("transparent");
  let release_text = $state(false);
  let release_button = $state(false);

  const typeWriter = () => {
    let i = 0;
    let dot = false;
    const interval_0 = setInterval(() => {
      if (i < 23) {
        dynamic_text_upper += text[i];
      } else {
        dynamic_text_lower += text[i];
      }
      i++;
      if (i === text.length) {
        release_text = true;
        setTimeout(() => release_button = true, 500)
        dot_status = "#444";
        clearInterval(interval_0);
        setInterval(() => {
          if (dot) {
            dot_status = "#444";
            dot = !dot;
          } else {
            dot_status = "transparent";
            dot = !dot;
          }
        }, 500);
      }
    }, 35);
  };
  onMount(() => {
    typeWriter(); // Wywołanie w onMount zapewnia reaktywność
    return () => {}; // Opcjonalne czyszczenie, jeśli potrzebne
  });

  let particles = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 12 + 8, // Particle size between 2-6px
    hue: 350 + Math.random() * 50, // Random hue for color variation
    delay: Math.random() * 10, // Random animation delay up to 2s
    angle: Math.random() * 360, // Random angle for radial movement
  }));
</script>

<div class="banner">
  <div class="banner-content">
    <h1 class:releasing={release_text}>Wykreujemy twoją<br />cyfrową przyszłość</h1>
    <button class:releasing={release_button}>Bezpłatna konsultacja</button>
    <p class:releasing={release_text}>
      {dynamic_text_upper}<br />{dynamic_text_lower}<span
        style="color: {dot_status}">.</span
      >
    </p>
    {#each particles as particle (particle.id)}
      <div
        class="particle"
        style="
        width: {particle.size}px;
        height: {particle.size}px;
        --color: hsl({particle.hue}, 65%, 65%);
        animation-delay: {particle.delay}s;
        --angle: {particle.angle}deg;
      "
      ></div>
    {/each}
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  .banner {
    width: 100%;
    max-width: 1100px;
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 245, 245, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
    border-radius: 2vw;
    margin: 4vh auto 4vh auto;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  .banner-content {
    text-align: center;
    color: #232323;
    padding: 4vh 4vw;
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    letter-spacing: 0.05em;
  }
  .banner-content h1 {
    font-size: clamp(4rem, 6vw, 4rem);
    font-weight: 700;
    color: #232323;
    text-shadow: 0 2px 16px #fff8;
    text-align: center;
    line-height: 120%;
    z-index: 1000;
    transform: translateY(70px);
    transition: all 1s ease;
  }
  .banner-content p {
    font-size: 4vh;
    font-weight: 600;
    margin-bottom: 2vh;
    color: #444;
    text-shadow: 0 1px 8px #fff6;
    transform: translateY(-70px);
    transition: all 1s ease;
  }

  .banner-content button {
    opacity: 0;
    padding: 10px 20px;
    margin: 5vh auto;
    border: 2px solid #ffffff;
    background: linear-gradient(
      110deg,
      #009fe3bf,
      #d72679c3,
      #ffb300c5,
      #009fe3bf
    );
    background-size: 300% 100%;
    background-position: 0% 50%;
    font-family: "Rajdhani";
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    transition: all 0.3s ease-in-out, opacity 1s ease-in;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    animation: gradient-move 8s ease-in-out infinite;
  }
  .releasing {
    opacity: 1 !important;
    transform: translateY(0px) !important;
  }

  @keyframes gradient-move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .banner-content button:hover {
    background: #f5f5f5;
    color: #232323;
    border: 2px solid #242424;
    font-weight: 600;
    transform: scale(1.05);
  }

  .banner-content button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      95deg,
      transparent,
      #009fe3bf,
      #d72679c3,
      #ffb300c5,
      transparent
    );
    transition: left 0.4s ease-in-out;
    border-radius: 5px; /* Dodaj border-radius również tutaj, aby gradient był zaokrąglony */
  }

  .banner-content button:hover::before {
    background: linear-gradient(
      95deg,
      transparent,
      #d7d7d7,
      #a5a5a5,
      #d9d9d9,
      transparent
    );
    left: 100%;
  }
  @media (max-width: 650px) {
    .banner-content h1 {
      font-size: 40px;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .banner-content p {
      font-size: 30px;
      margin-top: 20px;
    }
    .banner-content button {
      font-size: 30px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }

  .particle {
    position: absolute;
    opacity: 0;
    border-radius: 50%;
    background: var(--color);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    animation: emit 6s linear infinite;
    transform-origin: center;
    top: 50%;
    left: 50%;
    z-index: -10;
  }

  @keyframes emit {
    0% {
      opacity: 0;
      transform: translate(0, 0) scale(0.3);
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 1;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: translate(
          calc(cos(var(--angle)) * 430px),
          calc(sin(var(--angle)) * 430px)
        )
        scale(1);
    }
  }
</style>
