import HomeContainer from '@/components/HomeContainer';
import Step from '@/components/Step';
import { useState } from 'react';
import { MATRIX_TYPES } from '@/data/matrix';

export default function Matrix() {
  const [searchValue, setSearchValue] = useState('');
  const filteredTypes = MATRIX_TYPES.filter((frontMatter) =>
    frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <HomeContainer
      title="Math Mtrix Problems"
      description="All types of Mtrix Math Problems that can be solved step by step"
    >
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        Type of Matrix Problems
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {`There are ${MATRIX_TYPES.length} diffrent type of Matrix Problem's`}
      </p>
      <div className="relative w-full mb-4">
        <input
          aria-label="Search for 'Keyword'"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for 'Keyword'"
          className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="mx-auto w-full max-w-3xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div>
          <h2 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black">
            Simple Problems
          </h2>
          {filteredTypes
            .filter((problemType) => problemType.type === 'simple')
            .map((problemType) => (
              <a
                key={problemType.number}
                href={'matrix/' + problemType.slug.toLowerCase()}
              >
                <Step number={problemType.number} title={problemType.title} />
              </a>
            ))}
          {!filteredTypes.filter((problemType) => problemType.type === 'simple')
            .length && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">Not found.</p>
          )}
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black">
            Advance Problems
          </h2>
          {filteredTypes
            .filter((problemType) => problemType.type === 'advance')
            .map((problemType) => (
              <a
                key={problemType.number + 100}
                href={'matrix/' + problemType.slug.toLowerCase()}
              >
                <Step number={problemType.number} title={problemType.title} />
              </a>
            ))}
          {!filteredTypes.filter(
            (problemType) => problemType.type === 'advance'
          ).length && (
            <p className="text-gray-600 dark:text-gray-400 mb-4">Not found.</p>
          )}
        </div>
      </div>
      <a
        href="matrix/example"
        className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-900 text-center rounded-md text-black dark:text-white"
      >
        Example Problem's
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </a>
    </HomeContainer>
  );
}
