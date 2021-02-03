<script lang="ts">
  import type { Feature } from '../types';

  export let features: Feature[], home: boolean;
</script>

{#each features as { name, description, img }}
  <div class:reset={home === false}>
    <figure>
      {@html img}
    </figure>
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
{/each}

<style>
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 457px;
    margin: 0 auto 68px;
  }

  div:last-of-type {
    margin-bottom: 0;
  }

  div h3 {
    font-size: 1.8rem;
    margin: 40px 0 20px;
  }

  div p {
    line-height: 2.5rem;
    opacity: 0.6;
  }

  @media only screen and (min-width: 640px) {
    div {
      margin: 0 auto 76px;
    }

    .reset {
      align-self: center;
      justify-self: center;
      margin: 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    div {
      align-self: center;
      margin: 0;
    }

    div figure {
      align-items: center;
      display: flex;
      min-height: 72px;
    }
  }
</style>
