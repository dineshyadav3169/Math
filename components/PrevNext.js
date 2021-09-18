export default function PrevNext({ prevoiusLink, nextLink }) {
  return (
    <>
      <div className="before:content-[''] before:table before:clear-both after:content-[''] after:table after:clear-both">
        <a className="text-lg rounded bg-gray-200 text-black float-left inline-block py-2 px-4 align-middle overscroll-hidden text-center cursor-pointer" href={prevoiusLink}>
          ❮ Previous
        </a>
        <a className="text-lg rounded bg-gray-200 text-black float-right inline-block py-2 px-4 align-middle overscroll-hidden text-center cursor-pointer" href={nextLink}>
          Next ❯
        </a>
      </div>
    </>
  );
}
