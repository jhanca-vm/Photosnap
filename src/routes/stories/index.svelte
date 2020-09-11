<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`stories.json`)
      .then(r => r.json())
      .then(stories => {
        return { stories };
      });
  }
</script>

<script>
  import MainStory from '../../components/MainStory.svelte';
  import StoryPreview from '../../components/StoryPreview.svelte';

  export let stories;
</script>

<svelte:head>
  <title>Photosnap | Stories</title>
</svelte:head>

<main>
  <MainStory />
  <section>
    {#each stories as story}
      <StoryPreview {...story} />
    {/each}
  </section>
</main>
