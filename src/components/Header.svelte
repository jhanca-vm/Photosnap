<script>
  import { onMount } from 'svelte';

  export let segment;

  let icon = 'assets/shared/mobile/menu.svg';
  let alt = 'menu';

  function showHideMenu() {
    if (alt === 'menu') {
      document.getElementById('menu').style.display = 'block';
      icon = 'assets/shared/mobile/close.svg';
      alt = 'close';
    } else {
      document.getElementById('menu').style.display = 'none';
      icon = 'assets/shared/mobile/menu.svg';
      alt = 'menu';
    }
  }

  onMount(() => {
    document.addEventListener(
      'click',
      e => {
        let img = document.getElementById('icon');
        let menu = document.getElementById('menu');

        if (alt === 'close' && img != e.target && menu != e.target) {
          menu.style.display = 'none';
          icon = 'assets/shared/mobile/menu.svg';
          alt = 'menu';
        }
      },
      false
    );
  });
</script>

<style>
  header {
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75rem 1.5rem;
    margin: 0 auto;
    position: relative;
  }

  a {
    display: flex;
  }

  nav {
    display: none;
    padding: 2rem;
    background-color: white;
    position: absolute;
    top: 68px;
    right: 0;
    left: 0;
  }

  ul {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

  li a {
    justify-content: center;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    color: black;
    cursor: pointer;
  }

  li a:hover {
    color: rgba(0, 0, 0, 0.3);
  }

  nav > a {
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    background-color: black;
    color: white;
  }

  nav > a:hover {
    background-color: #dfdfdf;
    color: black;
  }

  [aria-current] {
    color: rgba(0, 0, 0, 0.3);
  }

  @media only screen and (min-width: 640px) {
    header {
      padding: 1rem 1.5rem;
    }

    #icon {
      display: none;
    }

    nav {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 0;
      position: static;
    }

    nav a {
      max-width: 158px;
      margin: 0;
      font-size: 12px;
      letter-spacing: 2px;
    }

    ul {
      width: 37%;
      max-width: 20rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 12px;
      margin: 0 auto;
      border: none;
      box-sizing: initial;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    header {
      padding: 1rem 2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    ul {
      padding-left: 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    header {
      padding: 1rem 0;
    }
  }
</style>

<header>
  <a rel="prefetch" href="."><img src="assets/shared/desktop/logo.svg" alt="logo" /></a>
  <img id="icon" on:click={showHideMenu} src={icon} {alt} />
  <nav id="menu">
    <ul>
      <li>
        <a rel="prefetch" aria-current={segment === 'stories' ? 'page' : undefined} href="stories">
          Stories
        </a>
      </li>
      <li>
        <a
          rel="prefetch"
          aria-current={segment === 'features' ? 'page' : undefined}
          href="features">
          Features
        </a>
      </li>
      <li>
        <a rel="prefetch" aria-current={segment === 'pricing' ? 'page' : undefined} href="pricing">
          Pricing
        </a>
      </li>
    </ul>
    <a rel="prefetch" href="pricing">Get an invite</a>
  </nav>
</header>
