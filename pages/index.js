import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export async function getStaticProps(){
  //fetches data from the file system t
  const allPostsData = getSortedPostsData();
  //passes the blog posts to the Home component as a prop
  return {
    props: {
      allPostsData,
    },
  };
}

////access the blog posts and prerender them
export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Tanner</strong>. I'm a computer science student at NJIT looking to pursue a career in Software Engineering. You can contact me on {' '}
          <a href="https://twitter.com">Twitter</a>.
        </p>
        <p>
          (This is a sample blog page {' '}
          <Link href="/posts/first-post">Blog</Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}