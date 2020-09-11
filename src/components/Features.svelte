<script>
  export let features;
</script>

<style>
  section {
    padding: 4.75rem 2.25rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4.25rem;
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
</style>

<section>
  {#each features as { title, description, img }}
    <div>
      <figure><img src={img} alt={title} /></figure>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  {/each}
</section>
