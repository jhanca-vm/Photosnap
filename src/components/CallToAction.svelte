<section>
  <picture>
    <source srcset="https://imgur.com/m1DuXFo.jpg" media="(min-width: 1280px)" />
    <source srcset="https://imgur.com/SbLqdwX.jpg" media="(min-width: 640px)" />
    <img src="https://imgur.com/832B69M.jpg" alt="background" />
  </picture>
  <svg width="128" height="6" viewBox="0 0 128 6">
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
  <svg class="vertical" width="6" height="100%">
    <defs>
      <linearGradient id="ubcja" x1="0" x2="3" y1="304" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ffc593" />
        <stop offset=".52" stop-color="#bc7198" />
        <stop offset="1" stop-color="#5a77ff" />
      </linearGradient>
    </defs>
    <g>
      <g>
        <path fill="url(#ubcja)" d="M0 0h6v800H0z" />
      </g>
    </g>
  </svg>
  <div>
    <h2>We’re in beta. Get your invite today!</h2>
    <a href="pricing">
      Get an invite <svg width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </a>
  </div>
</section>

<style>
  section {
    position: relative;
  }

  section > svg {
    left: 24px;
    position: absolute;
    top: 0;
  }

  div {
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 24px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  div a {
    align-items: center;
    color: white;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    margin-top: 28px;
    text-transform: uppercase;
  }

  div a:hover {
    text-decoration: underline;
  }

  div svg {
    margin-left: 20px;
  }

  @media only screen and (min-width: 640px) {
    section > svg {
      left: 0;
    }

    h2 {
      max-width: 412px;
    }

    div {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      padding: 0 40px;
    }
  }

  @media only screen and (min-width: 1280px) {
    div {
      left: 0;
      margin: 0 auto;
      max-width: 1024px;
      padding: 0;
      right: 0;
    }
  }
</style>
