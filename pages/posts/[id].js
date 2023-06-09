//this file is used to dynamically route pages
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';


export async function getStaticPaths() {
    const paths = getAllPostIds();
    //returns a list of possible value for id
    //paths contains an array of known paths
    return {
      paths,
      fallback: false, //any paths not returned by getStaticPaths will result in a 404 page error
    };
  }

//renders a post page
export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }
//<Date dateString={postData.date} />
// Fetch necessary data for the blog post using params.id
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    //gets the post data
    const postData = await getPostData(params.id);
    //returns post data as props
    return {
      props: {
        postData,
      },
    };
  }