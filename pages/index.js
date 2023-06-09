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
      <div className="justify-center">
      <section className={utilStyles.headingMd}>
        <p >
          <strong>Thank you for all that you do! Enjoy your new birdhouse and swing.</strong>
        </p>
       
      </section>
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Attributes of Mom:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
          </li>
          ))}
        </ul>
      </section>
      
    </Layout>
  );
}