<script lang="ts">
  import { stories } from '../stores';
  import MainStory from '../components/MainStory.svelte';
  import StoryPreview from '../components/StoryPreview.svelte';
</script>

<svelte:head>
  <title>Photosnap | Stories</title>
</svelte:head>

<main>
  <MainStory />
  <section>
    {#each $stories as story}
      <StoryPreview {story} home={false} />
    {/each}
  </section>
</main>

<style>
  @media only screen and (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
