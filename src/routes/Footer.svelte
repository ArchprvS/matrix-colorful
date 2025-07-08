<footer class="footer">
  <div class="footer-content">
    <div class="footer-logo">
      <img src="./logo_rgb.png" alt="logo" />
    </div>
    <div class="footer-links">
      <a href="/Creating" class="footer-link">Tworzenie</a>
      <a href="#" class="footer-link">Realizacje</a>
      <a href="#" class="footer-link">Kontakt</a>
      <a href="#" class="footer-link">FAQ</a>
    </div>
    <div class="footer-copy">
      &copy; {new Date().getFullYear()} matrix-colorful. Wszelkie prawa zastrzeżone.
    </div>
  </div>
</footer>

<style>
  .footer {
    width: 100%;
    background: rgba(23, 23, 23, 0.85);
    color: #eaeaea;
    padding: 3vh 0 2vh 0;
    border-radius: 2vw 2vw 0 0;
    box-shadow: 0 -4px 24px 0 rgba(31, 38, 135, 0.08);
    font-family: "Rajdhani", "Segoe UI", Arial, sans-serif;
    margin-top: 8vh;
    z-index: 2;
    position: relative;
  }
  .footer-content {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }
  .footer-logo img {
    width: 120px;
    filter: brightness(0.95) contrast(1.1);
    margin-bottom: 0.5em;
  }
  .footer-links {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    justify-content: center;
  }
  .footer-link {
    color: #eaeaea;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1em;
    letter-spacing: 0.03em;
    padding: 0.2em 0.7em;
    border-radius: 0.7em;
    transition: background 0.2s, color 0.2s;
  }
  .footer-link:hover {
    background: rgba(245, 245, 245, 0.65);
    color: #232323;
    text-shadow: 0 1px 8px #fff6;
  }
  .footer-copy {
    font-size: 0.95em;
    color: #bdbdbd;
    text-align: center;
    margin-top: 0.5em;
    letter-spacing: 0.02em;
  }
  @media (max-width: 700px) {
    .footer-content {
      gap: 1em;
    }
    .footer-links {
      gap: 1em;
    }
    .footer-logo img {
      width: 90px;
    }
  }
</style>