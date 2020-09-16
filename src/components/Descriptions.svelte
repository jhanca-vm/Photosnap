<script>
  let data = [
    {
      id: 'first',
      title: 'Beautiful stories every time',
      description:
        'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
      img: {
        desktop: 'assets/home/desktop/beautiful-stories.jpg',
        tablet: 'assets/home/tablet/beautiful-stories.jpg',
        mobile: 'assets/home/mobile/beautiful-stories.jpg',
      },
    },
    {
      id: 'second',
      title: 'Designed for everyone',
      description:
        'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ',
      img: {
        desktop: 'assets/home/desktop/designed-for-everyone.jpg',
        tablet: 'assets/home/tablet/designed-for-everyone.jpg',
        mobile: 'assets/home/mobile/designed-for-everyone.jpg',
      },
    },
  ];
</script>

<style>
  div {
    padding: 4rem 1.5rem 4.5rem;
  }

  div p {
    margin: 1rem 0 1.25rem;
    line-height: 25px;
    opacity: 0.6;
  }

  div a {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: black;
  }

  div a:hover {
    text-decoration: underline;
  }

  div svg {
    margin-left: 1.25rem;
  }

  @media only screen and (min-width: 640px) {
    article {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 2.5rem;
      grid-column: span 2;
    }

    div a {
      margin-top: 3rem;
    }

    .second {
      grid-column: 1 / 3;
      grid-row: 1;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      padding: 0 3.25rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    div {
      padding: 0 4rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    article {
      grid-template-columns: repeat(5, 1fr);
    }

    article div {
      max-width: 390px;
      justify-self: center;
      padding: 0;
    }

    picture {
      grid-column: span 3;
    }
  }
</style>

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
