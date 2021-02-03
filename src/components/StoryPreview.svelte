<script lang="ts">
  import type { Story } from '../types';

  export let story: Story, home: boolean;
</script>

<article>
  <picture>
    <source srcset="{story.imgDesktop}.jpg" media="(min-width: 640px)" />
    <img src="{story.imgMobile}.jpg" alt={story.title} />
  </picture>
  <div>
    {#if home === false}<span>{story.createdAt}</span>{/if}
    <h3>{story.title}</h3>
    <p>by {story.author}</p>
    <div>
      <button>Read story</button>
      <svg width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </div>
  </div>
</article>

<style>
  article {
    color: white;
    position: relative;
  }

  h3 {
    font-size: 1.8rem;
    margin: 10.5px 0 8px;
  }

  p,
  span {
    font-size: 1.3rem;
  }

  article > div {
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.66) 100%);
    display: flex;
    height: 100%;
    justify-content: flex-end;
    flex-direction: column;
    padding: 44px 36px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  article div div {
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-top: 20px;
  }

  button {
    color: inherit;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }
</style>
