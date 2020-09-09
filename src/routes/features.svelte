<script>
  import Hero from '../components/Hero.svelte';

  let img = {
    mobile: 'assets/features/mobile/hero.jpg',
    tablet: 'assets/features/tablet/hero.jpg',
    desktop: 'assets/features/desktop/hero.jpg',
  };

  let title = 'Features';

  let description =
    'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.';
</script>

<svelte:head>
  <title>Photosnap | Features</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link="none" />
</main>
