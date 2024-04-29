"use client";

import React from "react";
import styles from "./style.module.css";

import Image from "next/image";
import { BookInterface } from "@/interfaces/book";

const BookItem: React.FC<BookInterface> = (props) => {
  const { image, title, author, price } = props;
  return (
    <div className={styles.bookItemContainer}>
      <Image
        className={styles.bookImage}
        src={image}
        width={150}
        height={150}
        alt="Book Image"
      />
      <div className="pt-3 text-center">
        <p className="whitespace-nowrap text-ellipsis overflow-hidden text-sm">{title}</p>
        <p className="whitespace-nowrap text-ellipsis overflow-hidden text-base">{author}</p>
        <p className="text-lg font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default BookItem;
