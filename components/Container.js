import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';

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

      <nav className="z-20 text-lg bg-gray-800 text-white w-full p-0 fixed top-0">
        <a href="#skip" className="skip-nav">Skip to content</a>
        <div className="overflow-auto">
          <div className=" overflow-hidden w-full h-11 float-left">
            <p className="float-left w-auto py-2 px-3">some</p>
            <p className="float-left w-auto py-2 px-3">somw</p>
          </div>
        </div>
      </nav>
      <div className="h-full w-52 bg-white fixed overflow-auto top-11 z-10 block">
        <div className="fixed top-0 pt-11 pb-0 h-full w-56 bg-transparent">
          <div className="h-full w-full overflow-x-hidden overflow-y-scroll pt-5">
            <h2 className="left">
              React Tutorial
            </h2>
            <a target="_top" href="/">
              React Home
            </a>
            <a target="_top" href="/">
              React Intro
            </a>
          </div>
        </div>
      </div>
      <div className="ml-52 pt-11 text-black bg-white">
        <div className="text-black bg-white before:content-[''] before:table before:clear-both after:content-[''] after:table after:clear-both">
          <main id="skip" className="text-center p-8 pt-4 border-gray-200 border-l-2 border-r-2 w-10/12 float-left ">
            <div className="leaderboard-ads-space">
              <div id="adngin-main_leaderboard-0"></div>
            </div>
            <hr />
            {children}
            <br />
          </main>
          <div className="py-4 px-2 text-center w-2/12 float-left">
            <div id="right-add-space"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
