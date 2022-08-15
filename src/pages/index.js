import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p>Hi, my name is</p>
          <h1 className="colorSuccess">Nik.</h1>
          <p>
            I am a <span className="colorWarning">Game Enthusiast</span> and{" "}
            <span className="colorDanger">cooool</span> passionate about
            solving Meaningful Problems.
          </p>
          <SocialLinks />
          <p>
            Find out more about me <Link to={useBaseUrl("#main")}>below</Link>!
          </p>
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
        <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">Hello world</h2>
        </div>
        <div className={styles.about}>
          <div>
          </div>
          <div class={styles.aboutText}>
            <h2>Hello, </h2>
            <p>
              I am a Full Stack Game Enthusiast
              based in Slovenia.
            </p>
            <p>
              I love building cool, fun and meaningful things with tech, whether
              that be{" "}
              .
            </p>
            <p>
              You can read more <Link to={useBaseUrl("/about")}>about me</Link>{" "}
              if you are interested.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
                <Link className="pagination-nav__link" to={useBaseUrl("docs/")}>
                  <div className="pagination-nav__sublabel">Read</div>
                  <div className="pagination-nav__label">My docs</div>
                </Link>
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
