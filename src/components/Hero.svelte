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

  div h1 {
    margin-bottom: 1.5rem;
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

  div a:hover {
    text-decoration: underline;
  }

  div a svg {
    margin-left: 1.25rem;
  }

  .horizontal {
    position: absolute;
    top: 0;
  }

  .vertical {
    display: none;
  }

  @media only screen and (min-width: 640px) {
    section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4.75rem 2.5rem 4.5rem;
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    .vertical {
      display: block;
      position: absolute;
      left: 0;
    }

    .horizontal {
      display: none;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      padding: 4.75rem 3rem 4.5rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    div {
      padding: 4.75rem 3.25rem 4.5rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    section {
      grid-template-columns: repeat(5, 1fr);
    }

    picture {
      grid-column: span 3;
    }

    div {
      padding: 4.75rem 4rem 4.5rem;
    }
  }
</style>

<section>
  <picture>
    <source srcset={img.desktop} media="(min-width: 1280px)" />
    <source srcset={img.tablet} media="(min-width: 640px)" />
    <img src={img.mobile} alt="create and share" />
  </picture>
  <div>
    <svg class="horizontal" width="128" height="6" viewBox="0 0 128 6">
      <defs>
        <linearGradient id="4gb3a" x1="0" x2="64" y1="6" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffc593" />
          <stop offset=".52" stop-color="#bc7198" />
          <stop offset="1" stop-color="#5a77ff" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <path fill="url(#4gb3a)" d="M0 0h128v6H0z" />
        </g>
      </g>
    </svg>
    <svg class="vertical" width="6" height={link != 'none' ? 304 : 144}>
      <defs>
        <linearGradient id="ubcja" x1="0" x2="3" y1="304" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffc593" />
          <stop offset=".52" stop-color="#bc7198" />
          <stop offset="1" stop-color="#5a77ff" />
        </linearGradient>
      </defs>
      <g>
        <g>
          <path fill="url(#ubcja)" d="M0 0h6v304H0z" />
        </g>
      </g>
    </svg>
    <h1>{title}</h1>
    <p>{description}</p>
    {#if link != 'none'}
      <a href={link.path}>
        {link.title}
        <svg width="43" height="14">
          <g fill="none" fill-rule="evenodd" stroke="#efefef">
            <path d="M0 7h41.864M35.428 1l6 6-6 6" />
          </g>
        </svg>
      </a>
    {/if}
  </div>
</section>
