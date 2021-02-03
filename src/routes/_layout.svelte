<script lang="ts">
  import { onMount } from 'svelte';
  import { stories, features, plans } from '../stores';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment: string;

  onMount(() => {
    Promise.all([
      fetch('https://photosnap.fly.dev/stories').then(res => res.json()),
      fetch('https://photosnap.fly.dev/features').then(res => res.json()),
      fetch('https://photosnap.fly.dev/plans').then(res => res.json()),
    ]).then(results => {
      stories.setData(results[0]);
      features.setData(results[1]);
      plans.setData(results[2]);
    });
  });
</script>

<Header {segment} />
<slot />
<Footer {segment} />
