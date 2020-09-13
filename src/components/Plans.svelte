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

  .light-card,
  .dark-card {
    padding: 3rem 1.25rem;
    text-align: center;
  }

  .light-card > span,
  .dark-card > span {
    display: flex;
    flex-direction: column;
    margin-top: 2.25rem;
  }

  .light-card span span,
  .dark-card span span {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 4.17px;
  }

  .light-card button,
  .dark-card button {
    width: 87%;
    height: 40px;
    margin-top: 2.25rem;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;
  }

  .light-card button:hover,
  .dark-card button:hover {
    background-color: #dfdfdf;
    color: black;
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
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="6">
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
