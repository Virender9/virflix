import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const MovieCard = (Elem) => {
  const { id, synposis, type, title } = Elem.jawSummary;
  return (
    <>
      <section className={styles.card}>
        <div className={styles.image}>
          <Image
            src={Elem.jawSummary.backgroundImage.id}
            alt={title}
            width={250}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title}</h2>
          <p>{synposis}</p>
        </div>
      </section>
    </>
  );
};

export default MovieCard;
