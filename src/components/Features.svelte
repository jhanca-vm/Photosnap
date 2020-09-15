<script>
  export let features;
  export let home;
</script>

<style>
  div {
    max-width: 457px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto 4.25rem;
  }

  div:last-of-type {
    margin-bottom: 0;
  }

  div h3 {
    margin: 2.5rem 0 1.25rem;
    font-size: 18px;
  }

  div p {
    line-height: 25px;
    opacity: 0.6;
  }

  @media only screen and (min-width: 640px) {
    div {
      margin: 0 auto 4.75rem;
    }

    .reset {
      margin: 0;
      align-self: center;
      justify-self: center;
    }
  }
</style>

{#each features as { title, description, img }}
  <div class:reset={home === false}>
    <figure><img src={img} alt={title} /></figure>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
{/each}
