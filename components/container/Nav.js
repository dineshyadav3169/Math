import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-html-link-for-pages */
export default function Nav({ setSlide }) {
  const router = useRouter();
  const active = router.route.split('/')[1];
  const NAVLINKS = [
    { link: 'matrix', name: 'Matrix' },
    { link: 'algebra', name: 'Algebra' }
  ];

  return (
    <nav className="z-20 text-lg bg-gray-800 text-white w-full p-0 fixed top-0">
      <a href="#skip" className="skip-nav">
        Skip to content
      </a>
      <div className="overflow-auto">
        <div className=" overflow-hidden w-full h-11 float-left">
          <div 
            className="float-left w-auto py-2 px-3 hover:bg-black custom-break:hidden block"
            onClick={()=>{setSlide((prevState)=> {return !prevState})}}
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
  );
}
