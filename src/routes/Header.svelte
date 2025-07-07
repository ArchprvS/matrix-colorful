<script>
</script>

<div class="menu">
  <img src="./logo_rgb.png" alt="logo" class="logo" />
  <button class="menuitem">Tworzenie</button>
  <button class="menuitem">Realizacje</button>
  <button class="menuitem">Kontakt</button>
  <button class="menuitem">FAQ</button>
</div>

<style>
  .menu {
    max-width: 100%;
    display: flex;
    padding: 0 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: rgba(23, 23, 23, 0.85);
  }
  .logo {
    width: 20%;
    max-width: 200px;
    padding: 0px 20px 0px 20px;

    /* background-color: rgba(170, 18, 18, 0.85); */
  }
  .menuitem {
    width: 20%;
    height: 100%;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Rajdhani";
    font-size: 20px;
    font-weight: 800;
    border: none;
    /* background-color: rgba(23, 23, 23, 0.85); */
    background-color: transparent;
    color: silver;
    transition: all 0.2s ease;
  }
  .menuitem:hover {
    width: 25%;
    margin: 0 auto;
    font-family: "Rajdhani";
    border: none;
    background-color: rgba(245, 245, 245, 0.65);
    color: rgb(30, 30, 30);
    cursor: pointer;
    transform: scale(1.03);
  }
</style>
