<script>
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  import { setGlobalOptions } from 'svelte-scrolling';
  import { onMount } from "svelte";

  import Creating from "./Creating.svelte";
  import Header from "./Header.svelte";
  import Banner from "./Banner.svelte";
  import Footer from "./Footer.svelte";
  import Reals from "./Reals.svelte";
  import Contactform from "./Contactform.svelte";
  import Faq from "./Faq.svelte";
  import Offer from './Offer.svelte';
  import Mobileheader from './Mobileheader.svelte';

  let screenWidth = 0;
  let isMobile = false;

  const updateScreenWidth = () => {
    screenWidth = window.innerWidth
    isMobile = screenWidth < 768;
  }

  onMount(() => {
    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);

    return () => window.removeEventListener('resize', updateScreenWidth);
  })

</script>

{#if isMobile}
  <Mobileheader />
{:else}
  <Header />
{/if}
<div class="container">
  <Banner />
  <Offer />
  <Creating />
  <Reals />
  <Contactform />
  <Faq />
  <Footer />
</div>

<style>
  .container {
    padding: 0 20px 0 20px;
  }
</style>
