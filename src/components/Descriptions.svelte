<script>
  let data = [
    {
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
</style>

<section>
  {#each data as { title, description, img }}
    <article>
      <picture>
        <source srcset={img.desktop} media="(min-width: 1024px)" />
        <source srcset={img.tablet} media="(min-width: 640px)" />
        <img src={img.mobile} alt={title} />
      </picture>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="stories">
          View the stories <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fill-rule="evenodd" stroke="#000">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </a>
      </div>
    </article>
  {/each}
</section>
