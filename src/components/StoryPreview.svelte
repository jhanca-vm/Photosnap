<script>
  export let title;
  export let author;
  export let createdAt;
  export let time;
  export let img;
</script>

<style>
  article {
    color: white;
    position: relative;
  }

  h3 {
    margin: 0.65rem 0 0.5rem;
    font-size: 18px;
  }

  p,
  time {
    font-size: 13px;
  }

  article > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2.75rem 2.25rem;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.66) 100%);
    position: absolute;
    top: 0;
  }

  article div div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.25rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }

  button {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: inherit;
  }
</style>

<article>
  <picture>
    <source srcset={img.desktop} media="(min-width: 1024px)" />
    <source srcset={img.tablet} media="(min-width: 640px)" />
    <img src={img.mobile} alt={title} />
  </picture>
  <div>
    <time datatime={time}>{createdAt}</time>
    <h3>{title}</h3>
    <p>by {author}</p>
    <div>
      <button>Read story</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </div>
  </div>
</article>
