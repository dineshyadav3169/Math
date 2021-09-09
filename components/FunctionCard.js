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
          height={32}
          width={32}
          src={`/logos/${imageLogo}`}
          className="rounded-full"
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
