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
        <meta name="robots" content="follow, index" />
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
      <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 bg-opacity-60">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div>
          <a href="/dashboard" className="p-1 text-gray-900 sm:p-4">
            Dashboard
          </a>
          <a href="/blog" className="p-1 text-gray-900 sm:p-4">
            Blog
          </a>
          <a href="/about" className="p-1 text-gray-900 sm:p-4">
            About
          </a>
          <a href="/" className="p-1 text-gray-900 sm:p-4">
            Home
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
