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
      <nav className="flex bg-blue-200 rounded-md shadow items-center justify-between w-full max-w-4xl px-8 py-5 mx-auto my-0 text-gray-900 md:my-8 bg-opacity-60">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div>
          <a
            href="/"
            className="py-2 px-2 mx-1 rounded-md text-white bg-black sm:py-2 sm:px-2 hover:bg-gray-100 hover:text-black"
          >
            Home
          </a>
          <a
            href="/solution"
            className="py-2 px-2 mx-1 text-gray-900 rounded-md sm:py-2 sm:px-2 hover:bg-gray-100"
          >
            Solution's
          </a>
          <a
            href="/feedback"
            className="py-2 px-2 mx-1 text-gray-900 rounded-md sm:py-2 sm:px-2 hover:bg-gray-100"
          >
            Feedback
          </a>
          <a
            href="/about"
            className="py-2 px-2 mx-1 text-gray-900 rounded-md sm:py-2 sm:px-2 hover:bg-gray-100"
          >
            About
          </a>
        </div>
      </nav>
      <main id="skip" className="flex flex-col justify-center px-8 bg-white">
        {children}
        <Footer />
      </main>
    </div>
  );
}
