<script>
  import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
  import { setGlobalOptions } from 'svelte-scrolling';

  import Creating from "./Creating.svelte";
  import Header from "./Header.svelte";
  import Banner from "./Banner.svelte";
  import Footer from "./Footer.svelte";
  import Reals from "./Reals.svelte";
  import Contactform from "./Contactform.svelte";
  import Faq from "./Faq.svelte";
  import Offer from './Offer.svelte';
  import Mobileheader from './Mobileheader.svelte';
</script>

<Mobileheader />
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
