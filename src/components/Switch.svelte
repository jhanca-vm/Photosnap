<script>
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

<style>
  div {
    max-width: 17.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 2.5rem;
  }

  div > span {
    width: 64px;
    height: 32px;
    display: flex;
    background-color: #dfdfdf;
    border-radius: 16px;
    padding: 4px;
    cursor: pointer;
  }

  p {
    font-size: 18px;
    font-weight: 700;
  }

  #switch {
    width: 24px;
    height: 24px;
    background-color: black;
    border-radius: 50%;
    transition: 0.3s;
  }

  .desactived {
    opacity: 0.5;
  }
</style>

<div>
  <p class:desactived={monthly === false}>Monthly</p>
  <span on:click={toggle} id="switch-container"><span id="switch" /></span>
  <p class:desactived={monthly === true}>Yearly</p>
</div>
