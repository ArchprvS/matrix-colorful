<script>
  // Możesz dodać tu logikę, jeśli baner ma być dynamiczny
</script>

<div class="banner">
  <div class="banner-content">
    <h1>Wykreujemy twoją<br />cyfrową przyszłość</h1>
    <p>Twój partner w internetowej<br />transformacji biznesu</p>
    <button>Bezpłatna konsultacja</button>
  </div>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  .banner {
    width: 100%;
    max-width: 1100px;
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(245, 245, 245, 0.65);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    border-radius: 2vw;
    margin: 8vh auto 4vh auto;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  .banner-content {
    text-align: center;
    color: #232323;
    padding: 4vh 4vw;
    font-family: 'Rajdhani', 'Segoe UI', Arial, sans-serif;
    letter-spacing: 0.05em;
  }
  .banner-content h1 {
    font-size: clamp(4rem, 6vw, 4rem);
    font-weight: 700;
    margin-bottom: 1vh;
    color: #232323;
    text-shadow: 0 2px 16px #fff8;
    text-align: center;
    line-height: 120%;
  }
  .banner-content p {
    font-size: clamp(1.1rem, 2.8vw, 1.7rem);
    font-weight: 600;
    margin-bottom: 2vh;
    color: #444;
    text-shadow: 0 1px 8px #fff6;
  }

.banner-content button {
  padding: 10px 20px;
  border: 2px solid #ffffff;
  background: linear-gradient(110deg, #009fe3bf, #d72679c3, #ffb300c5, #009fe3bf);
  background-size: 300% 100%;
  background-position: 0% 50%;
  font-family: "Rajdhani";
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  animation: gradient-move 8s ease-in-out infinite;
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
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(95deg, transparent, #009fe3bf, #d72679c3, #ffb300c5, transparent);
  transition: left 0.4s ease-in-out;
  border-radius: 5px; /* Dodaj border-radius również tutaj, aby gradient był zaokrąglony */
}

.banner-content button:hover::before {
  background: linear-gradient(95deg, transparent, #d7d7d7, #a5a5a5, #d9d9d9, transparent);
  left: 100%;
}
@media (max-width: 650px) {
  .banner-content h1 {
    font-size: 45px;
  }
}
</style>