<script>
  import Hero from '../components/Hero.svelte';

  let img = {
    mobile: 'assets/pricing/mobile/hero.jpg',
    tablet: 'assets/pricing/tablet/hero.jpg',
    desktop: 'assets/pricing/desktop/hero.jpg',
  };

  let title = 'Pricing';

  let description =
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.';
</script>

<svelte:head>
  <title>Photosnap | Pricing</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link="none" />
</main>
