<script lang="ts">
  import { stories, features } from '../stores';
  import Hero from '../components/Hero.svelte';
  import Descriptions from '../components/Descriptions.svelte';
  import StoryPreview from '../components/StoryPreview.svelte';
  import Features from '../components/Features.svelte';

  const title = 'Create and share your photo stories.';

  const description =
    'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.';

  const img = {
    mobile: 'https://imgur.com/JyRdmRa.jpg',
    tablet: 'https://imgur.com/hLCXIhL.jpg',
    desktop: 'https://imgur.com/jhwZJ1v.jpg',
  };

  const link = {
    title: 'Get an invite',
    path: 'pricing',
  };
</script>

<svelte:head>
  <title>Photosnap</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} {link} />
  <Descriptions />
  <section class="stories">
    {#each $stories.slice(0, 4) as story}
      <StoryPreview {story} home={true} />
    {/each}
  </section>
  <section class="features">
    <Features features={$features.slice(0, 3)} home={true} />
  </section>
</main>

<style>
  .features {
    padding: 76px 36px;
    text-align: center;
  }

  @media only screen and (min-width: 640px) {
    .stories {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .features {
      padding: 92px 0;
    }
  }

  @media only screen and (min-width: 1280px) {
    .stories {
      grid-template-columns: repeat(4, 1fr);
    }

    .features {
      column-gap: 2.25rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      max-width: 1024px;
      padding: 100px 0 150px;
    }
  }
</style>
