<script lang="ts">
  const data = [
    {
      id: 'first',
      title: 'Beautiful stories every time',
      description:
        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      img: {
        desktop: 'https://imgur.com/lQ7MxIV.jpg',
        tablet: 'https://imgur.com/TtAjtfw.jpg',
        mobile: 'https://imgur.com/xzb46xr.jpg',
      },
    },
    {
      id: 'second',
      title: 'Designed for everyone',
      description:
        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
      img: {
        desktop: 'https://imgur.com/yvVCMFi.jpg',
        tablet: 'https://imgur.com/5lqNWCI.jpg',
        mobile: 'https://imgur.com/6tSvkIL.jpg',
      },
    },
  ];
</script>

<section>
  {#each data as { id, title, description, img }}
    <article>
      <picture>
        <source srcset={img.desktop} media="(min-width: 1280px)" />
        <source srcset={img.tablet} media="(min-width: 640px)" />
        <img src={img.mobile} alt={title} />
      </picture>
      <div class={id}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="stories">
          View the stories <svg width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#000">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </a>
      </div>
    </article>
  {/each}
</section>

<style>
  div {
    padding: 64px 24px 72px;
  }

  div p {
    line-height: 2.5rem;
    margin: 16px 0 20px;
    opacity: 0.6;
  }

  div a {
    align-items: center;
    color: black;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  div a:hover {
    text-decoration: underline;
  }

  div svg {
    margin-left: 20px;
  }

  @media only screen and (min-width: 640px) {
    article {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      grid-column: span 2;
      justify-content: center;
      padding: 0 40px;
    }

    div a {
      margin-top: 48px;
    }

    .second {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      padding: 0 52px;
    }
  }

  @media only screen and (min-width: 1024px) {
    div {
      padding: 0 64px;
    }
  }

  @media only screen and (min-width: 1280px) {
    article {
      grid-template-columns: repeat(5, 1fr);
    }

    article div {
      justify-self: center;
      max-width: 390px;
      padding: 0;
    }

    picture {
      grid-column: span 3;
    }
  }
</style>
