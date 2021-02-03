<script lang="ts">
  import Switch from './Switch.svelte';
</script>

<section>
  <Switch />
  <article class="light-card">
    <h3>Basic</h3>
    <p>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
    <span><span>$19.00</span><small>per month</small></span>
    <button>Pick plan</button>
  </article>
  <article class="dark-card">
    <svg class="horizontal h-p" width="100%" height="6">
      <defs>
        <linearGradient id="180ta" x1="0" x2="159" y1="6" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffc593" />
          <stop offset=".52" stop-color="#bc7198" />
          <stop offset="1" stop-color="#5a77ff" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <path fill="url(#180ta)" d="M0 0h600v6H0z" />
        </g>
      </g>
    </svg>
    <svg class="vertical v-p" width="6" height="100%">
      <defs>
        <linearGradient id="ubcja" x1="0" x2="3" y1="304" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffc593" />
          <stop offset=".52" stop-color="#bc7198" />
          <stop offset="1" stop-color="#5a77ff" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <path fill="url(#ubcja)" d="M0 0h6v800H0z" />
        </g>
      </g>
    </svg>
    <h3>Pro</h3>
    <p>More advanced features available. Recommended for photography veterans and professionals.</p>
    <span><span>$39.00</span><small>per month</small></span>
    <button>Pick plan</button>
  </article>
  <article class="light-card">
    <h3>Business</h3>
    <p>
      Additional features available such as more detailed metrics. Recommended for business owners.
    </p>
    <span><span>$99.00</span><small>per month</small></span>
    <button>Pick plan</button>
  </article>
</section>

<style>
  section {
    padding: 64px 24px;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 16px;
  }

  p,
  small {
    line-height: 2.5rem;
    opacity: 0.6;
  }

  svg {
    left: 0;
    position: absolute;
    top: 0;
  }

  article {
    padding: 48px 20px;
    text-align: center;
  }

  article > span {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
  }

  article span span {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.417rem;
  }

  article button {
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    height: 40px;
    letter-spacing: 0.2rem;
    margin-top: 36px;
    text-transform: uppercase;
    width: 87%;
  }

  article button:hover {
    background-color: #dfdfdf;
    color: black;
  }

  .light-card {
    background-color: #f5f5f5;
  }

  .light-card button {
    background-color: black;
    color: white;
  }

  .dark-card {
    background-color: black;
    color: white;
    margin: 24px 0;
    position: relative;
  }

  .dark-card button {
    background-color: white;
    color: black;
  }

  @media only screen and (min-width: 640px) {
    section {
      padding: 80px 24px;
    }

    article {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 48px 36px;
      text-align: left;
    }

    article > span {
      grid-column: 2;
      grid-row: 1;
      margin: 0;
      text-align: right;
    }

    article p {
      margin-top: -25px;
      max-width: 270px;
    }

    article button {
      grid-column: 1;
      max-width: 270px;
    }

    .horizontal {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      padding: 80px 32px;
    }

    .dark-card {
      margin: 28px 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      column-gap: 32px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      max-width: 1024px;
      padding: 112px 0;
    }

    article {
      display: block;
      text-align: center;
    }

    article p {
      margin: 0 auto;
    }

    article > span {
      margin-top: 36px;
      text-align: center;
    }

    article button {
      width: 100%;
    }

    .dark-card {
      align-items: center;
      display: flex;
      flex-direction: column;
      height: 445px;
      justify-content: center;
      margin: 0;
    }

    .light-card {
      align-self: center;
      height: fit-content;
    }

    .h-p {
      display: block;
    }

    .v-p {
      display: none;
    }
  }
</style>
