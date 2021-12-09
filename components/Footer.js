/* eslint-disable @next/next/no-html-link-for-pages */
const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start mt-8 max-w-2xl mx-auto w-full">
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <a href="/" className="text-gray-500 hover:text-gray-600 transition">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            About
          </a>

        </div>
        <div className="flex flex-col space-y-4">
          {/* <ExternalLink href="https://twitter.com/something">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://pinterset.com">
            Pinterset
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
        <a
            href="/terms"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Terms and Conditions
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
