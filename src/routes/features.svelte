<script lang="ts">
  import { features } from '../stores';
  import Hero from '../components/Hero.svelte';
  import Features from '../components/Features.svelte';
  import CallToAction from '../components/CallToAction.svelte';

  const title = 'Features';

  const description =
    'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their features.';

  const img = {
    mobile: 'https://imgur.com/pKtN8J1.jpg',
    tablet: 'https://imgur.com/u5WE0p9.jpg',
    desktop: 'https://imgur.com/CrDKFrS.jpg',
  };
</script>

<svelte:head>
  <title>Photosnap | Features</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link={null} />
  <section>
    <Features features={$features} home={false} />
  </section>
  <CallToAction />
</main>

<style>
  section {
    padding: 76px 36px;
    text-align: center;
  }

  @media only screen and (min-width: 640px) {
    section {
      column-gap: 16px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 92px 24px 96px;
      row-gap: 64px;
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      padding: 92px 32px 96px;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      column-gap: 36px;
      grid-template-columns: repeat(3, 1fr);
      margin: 0 auto;
      max-width: 1024px;
      padding: 96px 0 120px;
      row-gap: 80px;
    }
  }
</style>
