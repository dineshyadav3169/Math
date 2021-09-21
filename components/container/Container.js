/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import Nav from './Nav';
import Ad1 from '../ads/Ad1';
import RightNav from './RightNav';


export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: 'Math - step by step',
    description: `Home page of math web app`,
    image: `${process.env.DOMAIN_NAME}/static/images/banner.png`,
    type: 'website',
    ...customMeta
  };
  console.log("container called")
  return (
    <div className="bg-white">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="nofollow, noindex" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`${process.env.DOMAIN_NAME}/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`${process.env.DOMAIN_NAME}/${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Math" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@math" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Nav data={meta.slideContent} hasData={meta.hasSlideContent} />
      <div className="custom-break:ml-52 m-0 pt-11 text-black bg-white ">
        <div className="text-black bg-white before:content-[''] before:table before:clear-both after:content-[''] after:table after:clear-both">
          <main
            id="skip"
            className="text-center p-2 custom-break:p-7 pt-4 border-gray-200 border-l border-r custom-break:w-10/12 w-full float-left"
          >
            <Ad1 />
            <hr className="w-full border-1 border-gray-200 mt-3" />
            {children}
            <br />
          </main>
          <RightNav/>
        </div>
        <Footer />
      </div>
    </div>
  );
}
