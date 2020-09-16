<script>
  import Switch from './Switch.svelte';
</script>

<style>
  section {
    padding: 4rem 1.5rem;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  p,
  small {
    line-height: 25px;
    opacity: 0.6;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  article {
    padding: 3rem 1.25rem;
    text-align: center;
  }

  article > span {
    display: flex;
    flex-direction: column;
    margin-top: 2.25rem;
  }

  article span span {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4.17px;
  }

  article button {
    width: 87%;
    height: 40px;
    margin-top: 2.25rem;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
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
    margin: 1.5rem 0;
    background-color: black;
    color: white;
    position: relative;
  }

  .dark-card button {
    background-color: white;
    color: black;
  }

  @media only screen and (min-width: 640px) {
    section {
      padding: 5rem 1.5rem;
    }

    article {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 3rem 2.25rem;
      text-align: left;
    }

    article > span {
      grid-column: 2;
      grid-row: 1;
      margin: 0;
      text-align: right;
    }

    article p {
      max-width: 270px;
      margin-top: -25px;
    }

    article button {
      max-width: 270px;
      grid-column: 1;
    }

    .horizontal {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      padding: 5rem 2rem;
    }

    .dark-card {
      margin: 1.75rem 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      max-width: 1024px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2rem;
      margin: 0 auto;
      padding: 7rem 0;
    }

    article {
      display: block;
      text-align: center;
    }

    article p {
      margin: 0 auto;
    }

    article > span {
      margin-top: 2.25rem;
      text-align: center;
    }

    article button {
      width: 100%;
    }

    .dark-card {
      height: 445px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
    }

    .light-card {
      height: fit-content;
      align-self: center;
    }

    .h-p {
      display: block;
    }

    .v-p {
      display: none;
    }
  }
</style>

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
