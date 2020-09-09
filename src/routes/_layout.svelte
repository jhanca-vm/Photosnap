<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
  }

  :global(h1) {
    font-size: 32px;
    text-transform: uppercase;
    letter-spacing: 3.33px;
    line-height: 40px;
  }

  :global(a) {
    text-decoration: none;
  }

  :global(picture) {
    display: flex;
  }

  :global(picture img) {
    width: 100%;
  }

  :global(button) {
    background: none;
    border: none;
    outline: none;
  }
</style>

<Header {segment} />
<slot />
