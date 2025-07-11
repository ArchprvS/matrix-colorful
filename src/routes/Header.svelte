<script>
  import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
  import { setGlobalOptions } from "svelte-scrolling";
</script>

<div class="menu">
  <a href="#"><img src="./logo_rgb.png" alt="logo" class="logo" /></a>
  <a href="#cre_sec" class="menuitem">Tworzenie</a>
  <a href="#rea_sec" class="menuitem">Realizacje</a>
  <a href="#con_sec" class="menuitem">Kontakt</a>
  <a href="#faq_sec" class="menuitem">FAQ</a>
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
    width: 100%;
    max-width: 200px;
    padding: 5px 20px 0px 20px;
    cursor: pointer;

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
    text-align: center;
    text-decoration: none;
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
