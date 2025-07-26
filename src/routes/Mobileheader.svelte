<script>
  import { scrollTo, scrollRef, scrollTop } from "svelte-scrolling";
  import { setGlobalOptions } from "svelte-scrolling";

  let menuButton = false;

  const mb_transform = () => {
    menuButton = !menuButton;
  };
</script>

<div class="menu">
  <a href="#"><img src="./logo_rgb.png" alt="logo" class="logo" /></a>
  <div
    class="menu_button"
    class:mb_transformed={menuButton}
    onclick={mb_transform}
  >
    <div class="menu_line" id="upper" class:upp_tr={menuButton}></div>
    <div class="menu_line" id="middle" class:mid_tr={menuButton}></div>
    <div class="menu_line" id="lower" class:low_tr={menuButton}></div>
  </div>
</div>
<div class="list" class:list_in={menuButton}>
  <div class="menu_item" class:menu_item_in={menuButton}>
    <!-- <img alt="icon" src="new-product.png" /> -->
    <p class="menu_p">Tworzenie</p>
  </div>
  <div class="menu_item" class:menu_item_in={menuButton}>
    <!-- <img alt="icon" src="coding.png" /> -->
    <p class="menu_p">Realizacje</p>
  </div>
  <div class="menu_item" class:menu_item_in={menuButton}>
    <!-- <img alt="icon" src="communicate.png" /> -->
    <p class="menu_p">Kontakt</p>
  </div>
  <div class="menu_item" class:menu_item_in={menuButton}>
    <!-- <img alt="icon" src="chatbot.png" /> -->
    <p class="menu_p">FAQ</p>
  </div>
</div>

<style>
  .menu_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 10px 0;
    transform: translateY(100px);
    transition: padding-right 0.3s ease, background-color 0.3s ease, transform 1.5s ease;
  }
  .menu_item_in {
    transform: translateY(0px);
  }
  .menu_item:hover {
    background-color: rgba(90, 90, 90, 0.85);
    padding-right: 20px;
  }
  .menu_item img {
    width: 40%;
    margin-bottom: 20px;
  }
  .menu_p {
    font-family: "Rajdhani";
    font-size: 40px;
    font-weight: 500;
    width: 100%;
    text-align: right;
    padding: 10px 10%;
    color: white;
  }
  .list {
    background-color: rgba(23, 23, 23, 0.85);
    padding: 0 20px 30% 20px;
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px; */
    transform: translateY(100%);
    transition: all 1s ease;
  }
  .list_in {
    transform: translateY(0%);
    transition: all 1s ease;
  }

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
    padding: 0px 20px 0px 20px;
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
</style>
