import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-html-link-for-pages */
export default function SideNav({ data, isSlide}) {
  const router = useRouter();
  const active = router.route.split('/')[2];
  
  return (
    <div className={`h-full w-52 bg-gray-200 fixed overflow-auto top-11 z-10 custom-break:block ${isSlide? "hidden" : ""}`}>
      <div className="fixed top-0 pt-11 pb-0 h-full w-56 bg-transparent">
        <div className="h-full w-full overflow-x-hidden overflow-y-scroll pt-5">
          {data.map((collection) => (
            <div key={collection.slideNavTitle}>
              <h2 className="text-2xl pl-2">{collection.slideNavTitle}</h2>
              {data[collection.index].slideNavData.map((document) => (
                <a
                  target="_top"
                  key={document.link}
                  className={`block p-1 pl-2 hover:bg-gray-100 ${
                    document.link === active ? 'bg-green-500' : ''
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
  );
}
