<script lang="ts">
  import type { Plan } from '../types';

  export let plans: Plan[];
</script>

<section>
  <h2>Compare</h2>
  <h3 class="features">The features</h3>
  <h3 class="plans">Basic</h3>
  <h3 class="plans">Pro</h3>
  <h3 class="plans">Business</h3>
  {#each plans as { item, basic, pro, business }}
    <h4>{item}</h4>
    <div>
      <span>
        <h6>Basic</h6>
        {#if basic === 'yes'}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Pro</h6>
        {#if pro === 'yes'}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Business</h6>
        {#if business === 'yes'}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
    </div>
  {/each}
</section>

<style>
  section {
    padding: 0 24px 64px;
  }

  div {
    border-bottom: 1px solid #dfdfdf;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 20px;
  }

  svg {
    margin-top: 8px;
  }

  h2 {
    display: none;
  }

  h3,
  h4 {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }

  h3 {
    border-bottom: 1px solid black;
    padding-bottom: 24px;
  }

  h4 {
    margin: 24px 0 20px;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: 0.167rem;
    opacity: 0.5;
    text-transform: uppercase;
  }

  .plans {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 0 24px 92px;
    }

    h2 {
      display: initial;
      grid-column: span 5;
      justify-self: center;
      margin-bottom: 48px;
    }

    h4,
    .features {
      grid-column: 1 / span 2;
      padding-left: 24px;
    }

    h4 {
      border-bottom: 1px solid #dfdfdf;
      margin: 0;
      padding: 24px 0 24px 24px;
    }

    h6 {
      display: none;
    }

    div {
      grid-column: span 3;
      padding: 0;
    }

    div > span {
      align-self: center;
      justify-self: center;
    }

    .plans {
      display: initial;
      text-align: center;
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      padding: 0 32px 92px;
    }

    h4,
    .features {
      padding-left: 32px;
    }
  }

  @media only screen and (min-width: 1024px) {
    section {
      margin: 0 auto;
      max-width: 800px;
      padding: 0 0 112px;
    }
  }
</style>
