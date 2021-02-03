<script lang="ts">
  let monthly = true;

  function toggle() {
    if (monthly) {
      document.getElementById('switch').style.transform = 'translateX(32px)';
      document.getElementById('switch-container').style.backgroundColor = 'black';
      document.getElementById('switch').style.backgroundColor = 'white';
      monthly = false;
    } else {
      document.getElementById('switch').style.transform = 'none';
      document.getElementById('switch-container').style.backgroundColor = '#dfdfdf';
      document.getElementById('switch').style.backgroundColor = 'black';

      monthly = true;
    }
  }
</script>

<div>
  <p class:desactived={monthly === false}>Monthly</p>
  <span on:click={toggle} id="switch-container"><span id="switch" /></span>
  <p class:desactived={monthly === true}>Yearly</p>
</div>

<style>
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 40px;
    max-width: 280px;
  }

  div > span {
    background-color: #dfdfdf;
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    height: 32px;
    padding: 4px;
    width: 64px;
  }

  p {
    font-size: 1.8rem;
    font-weight: 700;
  }

  #switch {
    background-color: black;
    border-radius: 50%;
    height: 24px;
    transition: 0.3s;
    width: 24px;
  }

  .desactived {
    opacity: 0.5;
  }

  @media only screen and (min-width: 1280px) {
    div {
      grid-column: span 3;
      justify-self: center;
      margin: 0 auto 52px;
      width: 100%;
    }
  }
</style>
