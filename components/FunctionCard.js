import Image from 'next/image';

export default function FunctionCard({
  title,
  description,
  slug,
  hasImage,
  imageLogo,
  ...rest
}) {
  return (
    <a
      href={`/${slug}`}
      className="border shadow border-grey-200 dark:border-gray-900 rounded-md p-4 w-full hover:shadow-md"
      {...rest}
    >
      {hasImage && (
        <Image
          alt={title}
          height={100}
          width={100}
          src={`/logos/${imageLogo}`}
          className=" bg-center self-center text-center items-center origin-center object-center center"
        />
      )}
      <hr className="w-full border-1 border-gray-200 mb-3" />
      <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-1 text-gray-700 mb-4 dark:text-gray-400">
        {description}
      </p>
    </a>
  );
}
