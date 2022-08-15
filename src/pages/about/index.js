import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">About me</h2>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div class={styles.aboutText}>
            <h2>Hello,</h2>
            <p>
             I am a <span className="colorWarning">Game Enthusiast</span> and{" "}
            <span className="colorDanger">cooool</span> passionate about
            solving Meaningful Problems.
            </p>
          </div>
        </div>
        <section className={styles.directory}>
          <div className="container">
            <h3>Continue exploring?</h3>
            <nav className="pagination-nav">
              <div className="pagination-nav__item">
                <Link
                  className="pagination-nav__link"
                >
                  <div className="pagination-nav__sublabel">Check out</div>
                </Link>
              </div>
              <div className="pagination-nav__item pagination-nav__item--next">
              </div>
            </nav>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default About;
