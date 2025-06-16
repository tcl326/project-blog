import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";

import styles from "./homepage.module.css";

async function Home() {
  const blogPostLists = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {/* TODO: Iterate over the data read from the file system! */}
      {blogPostLists.map((blogPost) => {
        return (
          <BlogSummaryCard
            key={blogPost.slug}
            slug={blogPost.slug}
            title={blogPost.title}
            abstract={blogPost.abstract}
            publishedOn={blogPost.publishedOn}
          />
        );
      })}
    </div>
  );
}

export default Home;
