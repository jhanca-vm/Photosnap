<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`index.json`)
      .then(r => r.json())
      .then(data => {
        return { data };
      });
  }
</script>

<script>
  import Hero from '../components/Hero.svelte';
  import Descriptions from '../components/Descriptions.svelte';
  import StoryPreview from '../components/StoryPreview.svelte';
  import Features from '../components/Features.svelte';

  export let data;

  let stories = data.stories;
  let features = data.features;

  let img = {
    mobile: 'assets/home/mobile/create-and-share.jpg',
    tablet: 'assets/home/tablet/create-and-share.jpg',
    desktop: 'assets/home/desktop/create-and-share.jpg',
  };

  let link = {
    title: 'Get an invite',
    path: 'pricing',
  };

  let title = 'Create and share your photo stories.';

  let description =
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.';
</script>

<style>
  .features {
    padding: 4.75rem 2.25rem;
    text-align: center;
  }

  @media only screen and (min-width: 640px) {
    .stories {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .features {
      padding: 5.75rem 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    .stories {
      grid-template-columns: repeat(4, 1fr);
    }

    .features {
      max-width: 1024px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2.25rem;
      margin: 0 auto;
      padding: 5.5rem 0 6.5rem;
    }
  }
</style>

<svelte:head>
  <title>Photosnap</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} {link} />
  <Descriptions />
  <section class="stories">
    {#each stories as story}
      <StoryPreview {...story} home={true} />
    {/each}
  </section>
  <section class="features">
    <Features {features} home={true} />
  </section>
</main>
