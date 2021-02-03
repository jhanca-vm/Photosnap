<script lang="ts">
  import { onMount } from 'svelte';
  import menu from 'images/menu.svg';
  import close from 'images/close.svg';
  import logo from 'images/logo.svg';

  export let segment: string;

  let icon = menu;
  let alt = 'menu';

  function showHideMenu() {
    if (icon === menu) {
      document.getElementById('menu').style.display = 'block';
      icon = close;
      alt = 'close';
    } else {
      document.getElementById('menu').style.display = 'none';
      icon = menu;
      alt = 'menu';
    }
  }

  onMount(() => {
    document.addEventListener(
      'click',
      e => {
        const img = document.getElementById('icon');
        const navMenu = document.getElementById('menu');

        if (icon === close && img != e.target && navMenu != e.target) {
          navMenu.style.display = 'none';
          icon = menu;
          alt = 'menu';
        }
      },
      false
    );
  });
</script>

<header>
  <a href="."><img src={logo} alt="logo" /></a>
  <img id="icon" on:click={showHideMenu} src={icon} {alt} />
  <nav id="menu">
    <ul>
      <li>
        <a aria-current={segment === 'stories' ? 'page' : undefined} href="stories">Stories</a>
      </li>
      <li>
        <a aria-current={segment === 'features' ? 'page' : undefined} href="features">Features</a>
      </li>
      <li>
        <a aria-current={segment === 'pricing' ? 'page' : undefined} href="pricing">Pricing</a>
      </li>
    </ul>
    <a href="pricing">Get an invite</a>
  </nav>
</header>

<style>
  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1024px;
    padding: 28px 24px;
    position: relative;
  }

  a {
    display: flex;
  }

  nav {
    background-color: white;
    display: none;
    left: 0;
    padding: 32px;
    position: absolute;
    right: 0;
    top: 68px;
  }

  ul {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    list-style: none;
  }

  li a {
    color: black;
    cursor: pointer;
    font-weight: 700;
    justify-content: center;
    letter-spacing: 0.25rem;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  li a:hover {
    color: rgba(0, 0, 0, 0.3);
  }

  nav > a {
    align-items: center;
    background-color: black;
    color: white;
    font-weight: 700;
    height: 48px;
    justify-content: center;
    letter-spacing: 0.25rem;
    margin-top: 24px;
    text-transform: uppercase;
    width: 100%;
  }

  nav > a:hover {
    background-color: #dfdfdf;
    color: black;
  }

  [aria-current] {
    color: rgba(0, 0, 0, 0.3);
    cursor: default;
  }

  @media only screen and (min-width: 640px) {
    header {
      padding: 16px 24px;
    }

    #icon {
      display: none;
    }

    nav {
      display: flex;
      justify-content: flex-end;
      padding: 0;
      position: static;
      width: 100%;
    }

    nav a {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
      margin: 0;
      max-width: 158px;
    }

    ul {
      align-items: center;
      display: flex;
      border: none;
      bottom: 0;
      box-sizing: initial;
      justify-content: space-between;
      left: 0;
      max-width: 320px;
      margin: 0 auto;
      padding-left: 12px;
      position: absolute;
      top: 0;
      right: 0;
      width: 37%;
    }
  }

  @media only screen and (min-width: 768px) {
    header {
      padding: 16px 32px;
    }
  }

  @media only screen and (min-width: 1024px) {
    ul {
      padding-left: 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    header {
      padding: 16px 0;
    }
  }
</style>
