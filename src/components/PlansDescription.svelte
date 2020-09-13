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
</style>

<section>
  <h3>The features</h3>
  {#each plans as { title, basic, pro, business }}
    <h4>{title}</h4>
    <div>
      <span>
        <h6>Basic</h6>
        {#if basic === true}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Pro</h6>
        {#if pro === true}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
      <span>
        <h6>Business</h6>
        {#if business === true}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15">
            <path fill="none" stroke="#000" stroke-width="2" d="M1 8.124L5.623 13 17 1" />
          </svg>
        {/if}
      </span>
    </div>
  {/each}
</section>
