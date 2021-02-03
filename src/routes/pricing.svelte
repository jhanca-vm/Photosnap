<script>
  import { plans } from '../stores';
  import Hero from '../components/Hero.svelte';
  import Plans from '../components/Plans.svelte';
  import PlansDescription from '../components/PlansDescription.svelte';
  import CallToAction from '../components/CallToAction.svelte';

  const title = 'Pricing';

  const description =
    'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.';

  const img = {
    mobile: 'https://imgur.com/IAp6Ax1.jpg',
    tablet: 'https://imgur.com/f7YnLP4.jpg',
    desktop: 'https://imgur.com/etMQcOg.jpg',
  };
</script>

<svelte:head>
  <title>Photosnap | Pricing</title>
</svelte:head>

<main>
  <Hero {img} {title} {description} link={null} />
  <Plans />
  <PlansDescription plans={$plans} />
  <CallToAction />
</main>
