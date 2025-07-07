<script>
  import Creating from "./Creating.svelte";
  import Header from "./Header.svelte";
  import Testsquare from "./Testsquare.svelte";
  import Banner from "./Banner.svelte";
</script>

<Header />
<div class="container">
  <Banner />
  <Creating />
  <Testsquare />
  <Testsquare />
  <Testsquare />
</div>

<style>
  .container {
    padding: 0 20px 0 20px;
  }
</style>
