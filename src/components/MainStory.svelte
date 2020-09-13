<style>
  div {
    padding: 2.75rem 1.5rem 3.25rem;
    background-color: black;
    color: white;
  }

  div h1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 3.5rem;
  }

  div h1 small {
    margin-bottom: 0.5rem;
    font-size: 12px;
    letter-spacing: 2px;
  }

  div > p {
    margin: 1.75rem 0;
    line-height: 25px;
    opacity: 0.6;
  }

  span {
    display: flex;
    font-size: 13px;
  }

  span time {
    opacity: 0.75;
    margin-right: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }

  button:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  button svg {
    margin-left: 1.25rem;
  }
</style>

<section>
  <picture>
    <source srcset="assets/stories/desktop/moon-of-appalacia.jpg" media="(min-width: 1024px)" />
    <source srcset="assets/stories/tablet/moon-of-appalacia.jpg" media="(min-width: 640px)" />
    <img src="assets/stories/mobile/moon-of-appalacia.jpg" alt="moon of appalachia" />
  </picture>
  <div>
    <h1><small>Last month's featured story</small>Hazy full moon of appalachia</h1>
    <span>
      <time datetime="2020-03-02">March 2nd 2020</time>
      <p>by John Appleseed</p>
    </span>
    <p>
      The dissected plateau area, while not actually made up of geological mountains, is popularly
      called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are
      not high, the terrain is extremely rugged.
    </p>
    <button>
      Read the story <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  </div>
</section>
