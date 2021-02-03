<section>
  <picture>
    <source srcset="https://imgur.com/2QG0Qg9.jpg" media="(min-width: 1280px)" />
    <source srcset="https://imgur.com/O2beHrv.jpg" media="(min-width: 640px)" />
    <img src="https://imgur.com/DtObyxn.jpg" alt="moon of appalachia" />
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
      Read the story <svg width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </button>
  </div>
</section>

<style>
  div {
    background-color: black;
    color: white;
    padding: 44px 24px 52px;
  }

  div h1 {
    display: flex;
    flex-direction: column;
    margin-bottom: 56px;
  }

  div h1 small {
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    margin-bottom: 8px;
  }

  div > p {
    line-height: 2.5rem;
    margin: 28px 0;
    opacity: 0.6;
  }

  span {
    display: flex;
  }

  span p,
  time {
    font-size: 1.3rem;
  }

  span time {
    margin-right: 20px;
    opacity: 0.75;
  }

  button {
    align-items: center;
    color: white;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  button svg {
    margin-left: 20px;
  }

  @media only screen and (min-width: 640px) {
    section {
      position: relative;
    }

    div {
      display: flex;
      background-color: initial;
      bottom: 0;
      flex-direction: column;
      justify-content: center;
      max-width: 435px;
      position: absolute;
      top: 0;
    }

    div h1 {
      margin-bottom: 16px;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      max-width: 445px;
      padding: 0 32px 8px;
    }
  }

  @media only screen and (min-width: 1280px) {
    div {
      margin-left: 64px;
    }
  }
</style>
