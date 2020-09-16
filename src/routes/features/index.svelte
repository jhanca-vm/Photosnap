<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`features.json`)
      .then(r => r.json())
      .then(features => {
        return { features };
      });
  }
</script>

<script>
  import Hero from '../../components/Hero.svelte';
  import Features from '../../components/Features.svelte';
  import CallToAction from '../../components/CallToAction.svelte';

  export let features;

  let img = {
    mobile: 'assets/features/mobile/hero.jpg',
    tablet: 'assets/features/tablet/hero.jpg',
    desktop: 'assets/features/desktop/hero.jpg',
  };

  let title = 'Features';

  let description =
    'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their features.';
</script>

<style>
  section {
    padding: 4.75rem 2.25rem;
    text-align: center;
  }

  @media only screen and (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 4rem;
      padding: 5.75rem 1.5rem 6rem;
    }
  }

  @media only screen and (min-width: 768px) {
    section {
      padding: 5.75rem 2rem 6rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      max-width: 1024px;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 2.25rem;
      row-gap: 5rem;
      margin: 0 auto;
      padding: 6rem 0rem 7.5rem;
    }
  }
</style>

<svelte:head>
  <title>Photosnap | Features</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link="none" />
  <section>
    <Features {features} home={false} />
  </section>
  <CallToAction />
</main>
