<script>
  import Creating from "./Creating.svelte";
  import Header from "./Header.svelte";
  import Testsquare from "./Testsquare.svelte";
  import Banner from "./Banner.svelte";
  import Footer from "./Footer.svelte";
  import Reals from "./Reals.svelte";
</script>

<Header />
<div class="container">
  <Banner />
  <Creating />
  <Reals />
  <Testsquare />
  <Testsquare />
  <Footer />
</div>

<style>
  .container {
    padding: 0 20px 0 20px;
  }
</style>
