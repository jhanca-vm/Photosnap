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

<svelte:head>
  <title>Photosnap | Features</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link="none" />
  <Features {features} />
  <CallToAction />
</main>
