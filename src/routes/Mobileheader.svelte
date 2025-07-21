<script>
  import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
  import { setGlobalOptions } from "svelte-scrolling";

  let menuButton = false;

  const mb_transform = () => {
    menuButton = !menuButton;
  }
</script>

<div class="menu">
  <a href="#"><img src="./logo_rgb.png" alt="logo" class="logo" /></a>
  <div class="menu_button" class:mb_transformed={menuButton} onclick={mb_transform}>
    <div class="menu_line" id="upper" class:upp_tr={menuButton}></div>
    <div class="menu_line" id="middle" class:mid_tr={menuButton}></div>
    <div class="menu_line" id="lower" class:low_tr={menuButton}></div>
  </div>
</div>

<style>
  .menu_button {
    width: 40px;
    height: 10%;
    cursor: pointer;
  }
  .menu_line {
    height: 2px;
    margin: 10px 0px 10px 0px;
    width: 40px;
    background-color: aliceblue;
   transition: all 1s ease;
  }
  .mid_tr {
    background-color: transparent;
    transition: all 0.5s ease;
  }
  .upp_tr {
    transform: translateY(12px) rotateZ(45deg);
    transition: all 1s ease;
  }
  .low_tr {
    transform: translateY(-12px) rotateZ(-45deg);
    transition: all 1s ease;
  }
  .menu {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: rgba(23, 23, 23, 0.85);
  }
  .logo {
    width: 100%;
    max-width: 150px;
    padding: 10px 0px 10px 0px;
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
