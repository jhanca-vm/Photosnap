<script>
  export let img;
  export let title;
  export let description;
  export let link;
</script>

<style>
  div {
    padding: 4.75rem 1.5rem 4.5rem;
    background-color: black;
    color: white;
    position: relative;
  }

  div > img {
    position: absolute;
    top: 0;
  }

  div h1 {
    margin-bottom: 1.25rem;
  }

  div p {
    line-height: 25px;
    opacity: 0.6;
  }

  div a {
    display: flex;
    align-items: center;
    margin-top: 3.25rem;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }

  div a img {
    margin-left: 1.25rem;
  }
</style>

<section>
  <picture>
    <source srcset={img.desktop} media="(min-width: 1024px)" />
    <source srcset={img.tablet} media="(min-width: 640px)" />
    <img src={img.mobile} alt="create and share" />
  </picture>
  <div>
    <img src="assets/bar.png" alt="decoration" />
    <h1>{title}</h1>
    <p>{description}</p>
    {#if link != 'none'}
      <a href={link.path}>{link.title}<img src="assets/arrow.png" alt="get" /></a>
    {/if}
  </div>
</section>
