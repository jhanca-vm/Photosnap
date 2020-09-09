<script>
  import Hero from '../components/Hero.svelte';

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

<svelte:head>
  <title>Photosnap</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} {link} />
</main>
