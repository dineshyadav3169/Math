import { useRouter } from 'next/router';
import { useState } from 'react';
import React from 'react';

/* eslint-disable @next/next/no-html-link-for-pages */
function Nav({ hasData, data }) {
  const [isSlide, setSlide] = useState(false);

  const router = useRouter();
  const pathname = router.pathname.split('/');

  const active = pathname[1];
  const actives = pathname[2];
  const NAVLINKS = [
    { link: 'matrix', name: 'Matrix' },
    { link: 'algebra', name: 'Algebra' }
  ];

  console.log('***', isSlide);

  return (
    <>
      <nav className="z-20 text-lg bg-gray-800 text-white w-full p-0 fixed top-0">
        <a href="#skip" className="skip-nav">
          Skip to content
        </a>
        <div className="overflow-auto">
          <div className=" overflow-hidden w-full h-11 float-left">
            {hasData && (
              <div
                className="float-left w-auto py-2 px-3 hover:bg-black custom-break:hidden block"
                onClick={() => {
                  setSlide((prevState) => {
                    return !prevState;
                  });
                }}
              >
                <svg
                  className="m-1"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#fff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              </div>
            )}
            <a
              className="float-left w-auto py-2 px-3 hover:bg-black"
              title="home"
              href="/"
            >
              <svg
                className="m-1"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#f1f1f1"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
              </svg>
            </a>
            {NAVLINKS.map((element) => (
              <a
                key={element.link}
                className={`float-left w-auto py-2 px-3 hover:bg-black ${
                  element.link === active ? 'bg-green-500' : ''
                }`}
                title="some title"
                href={`/${element.link}`}
              >
                {element.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {hasData && (
        <div
          className={`h-full w-52 bg-gray-200 fixed overflow-auto top-11 z-10 custom-break:block ${
            isSlide ? '' : 'hidden'
          }`}
        >
          <div className="fixed top-0 pt-11 pb-0 h-full w-56 bg-transparent">
            <div className="h-full w-full overflow-x-hidden overflow-y-scroll pt-5">
              {data.map((collection) => (
                <div key={collection.slideNavTitle}>
                  <h2 className="text-2xl pl-2 mb-3">{collection.slideNavTitle}</h2>
                  {data[collection.index].slideNavData.map((document) => (
                    <a
                      target="_top"
                      key={document.link}
                      className={`block p-1 pl-2 hover:bg-gray-100 mr-3 ${
                        document.link === actives ? 'bg-green-500' : ''
                      }`}
                      href={document.link}
                    >
                      {document.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default React.memo(Nav);
