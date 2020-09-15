<script>
  export let plans;
</script>

<style>
  section {
    padding: 0 1.5rem 4rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 1.25rem;
    border-bottom: 1px solid #dfdfdf;
  }

  svg {
    margin-top: 0.5rem;
  }

  h2 {
    display: none;
  }

  h3,
  h4 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h3 {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid black;
  }

  h4 {
    margin: 1.5rem 0 1.25rem;
  }

  h6 {
    font-size: 10px;
    letter-spacing: 1.67px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  .plans {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      padding: 0 1.5rem 5.75rem;
    }

    h2 {
      display: initial;
      grid-column: span 5;
      justify-self: center;
      margin-bottom: 3rem;
    }

    h4,
    .features {
      grid-column: 1 / span 2;
      padding-left: 1.5rem;
    }

    h4 {
      margin: 0;
      padding: 1.5rem 0 1.5rem 1.5rem;
      border-bottom: 1px solid #dfdfdf;
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
      padding: 0 2rem 5.75rem;
    }

    h4,
    .features {
      padding-left: 2rem;
    }
  }
</style>

<section>
  <h2>Compare</h2>
  <h3 class="features">The features</h3>
  <h3 class="plans">Basic</h3>
  <h3 class="plans">Pro</h3>
  <h3 class="plans">Business</h3>
  {#each plans as { title, basic, pro, business }}
    <h4>{title}</h4>
    <div>
      <span>
        <h6>Basic</h6>
        {#if basic === true}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Pro</h6>
        {#if pro === true}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Business</h6>
        {#if business === true}
          <svg width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
    </div>
  {/each}
</section>
