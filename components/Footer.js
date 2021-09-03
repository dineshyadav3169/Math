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
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 mb-8" />
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

          <a
            href="/newsletter"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Newsletter
          </a>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/something">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/null">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <a
            href="/uses"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Uses
          </a>
          <a
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </a>
          <a
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Snippets
          </a>
          <a
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </a>
        </div>
      </div>
    </footer>
  );
}
