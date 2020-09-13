<style>
  section {
    position: relative;
  }

  section > svg {
    position: absolute;
    top: 0;
    left: 1.5rem;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1.5rem;
    color: white;
    position: absolute;
    top: 0;
  }

  div a {
    display: flex;
    align-items: center;
    margin-top: 1.75rem;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }

  div a:hover {
    text-decoration: underline;
  }

  div svg {
    margin-left: 1.25rem;
  }
</style>

<section>
  <picture>
    <source srcset="assets/shared/desktop/bg-beta.jpg" media="(min-width: 1024px)" />
    <source srcset="assets/shared/tablet/bg-beta.jpg" media="(min-width: 640px)" />
    <img src="assets/shared/mobile/bg-beta.jpg" alt="background" />
  </picture>
  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="6" viewBox="0 0 128 6">
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
  <div>
    <h2>We’re in beta. Get your invite today!</h2>
    <a href="pricing">
      Get an invite <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
        <g fill="none" fill-rule="evenodd" stroke="#efefef">
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </a>
  </div>
</section>
