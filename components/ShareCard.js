export default function ShareCard({ currentPage, subDirectory }) {
  const DOMAIN = 'https://mathfinding.com';
  const Description = "Online Math Solver for providing step-by-step solution to every math problem"
  return (
    <div className=" text-left m-4">
      <span className="font-medium mb-2">Share</span>
      <div className="flex" id="blank_connect">
        <a
          rel="noopener noreferrer"
          className="p-4 rounded-full border hover:shadow-md cursor-pointer"
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${DOMAIN}`}
        >
          <svg
            title="Facebook"
            width="15"
            height="15"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
              fill="#000"
            ></path>{' '}
          </svg>{' '}
        </a>

        <a
          rel="noopener noreferrer"
          className="p-4 rounded-full border hover:shadow-md cursor-pointer"
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${Description}?&url=${DOMAIN}&via=_thedineshyadav`}
        >
          <svg
            title="Twitter"
            width="15"
            height="15"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"
              fill="#000"
            ></path>{' '}
          </svg>{' '}
        </a>

        <a
          rel="noopener noreferrer"
          className="p-4 rounded-full border hover:shadow-md cursor-pointer"
          target="_blank"
          href={`https://pinterest.com/pin/create/button/?url=${DOMAIN}&amp;media=&amp;description=${Description}?`}
        >
          <svg
            title="Pintrest"
            width="15"
            height="15"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M256 597q0-108 37.5-203.5t103.5-166.5 152-123 185-78 202-26q158 0 294 66.5t221 193.5 85 287q0 96-19 188t-60 177-100 149.5-145 103-189 38.5q-68 0-135-32t-96-88q-10 39-28 112.5t-23.5 95-20.5 71-26 71-32 62.5-46 77.5-62 86.5l-14 5-9-10q-15-157-15-188 0-92 21.5-206.5t66.5-287.5 52-203q-32-65-32-169 0-83 52-156t132-73q61 0 95 40.5t34 102.5q0 66-44 191t-44 187q0 63 45 104.5t109 41.5q55 0 102-25t78.5-68 56-95 38-110.5 20-111 6.5-99.5q0-173-109.5-269.5t-285.5-96.5q-200 0-334 129.5t-134 328.5q0 44 12.5 85t27 65 27 45.5 12.5 30.5q0 28-15 73t-37 45q-2 0-17-3-51-15-90.5-56t-61-94.5-32.5-108-11-106.5z"
              fill="#000"
            ></path>{' '}
          </svg>{' '}
        </a>

        <a
          rel="noopener noreferrer"
          className="p-4 rounded-full border hover:shadow-md cursor-pointer"
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${DOMAIN}&title=${Description}?`}
        >
          <svg
            title="Linkedin"
            width="15"
            height="15"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            {' '}
            <path
              d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
              fill="#000"
            ></path>{' '}
          </svg>{' '}
        </a>
      </div>
    </div>
  );
}
