import React from "react";
import hstyle from "@/app/styles/hero.module.css";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ title, imageUrl }) => {
  return (
    <main className={hstyle.main_hero}>
      <section className={hstyle.container}>
        <div className={hstyle.hero_content}>
          <h1>{title}</h1>
          <p>
            From award Winng Movies to Dramas, Shows, Action, Horror, Comedy
            we've got you the really chilling masala Entertainment
          </p>
          <Link href='/movie'>
            <button>
              Explore <span>Movies</span>
            </button>
          </Link>
        </div>
        <div className={hstyle.hero_image}>
          <Image src={imageUrl} width={500} height={500} alt='Netflix Copy' />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
