export function Pagination() {
    return (
<div className="xs:flex-row xs:justify-between flex flex-col items-center p-5">
<div className="flex items-center space-x-2">
  <button
    type="button"
    className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
  >
    <svg
      width="9"
      fill="currentColor"
      height="8"
      className=""
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
    </svg>
  </button>
  <button
    type="button"
    className="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white transition-colors"
  >
    1
  </button>
  <button
    type="button"
    className="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white transition-colors"
  >
    2
  </button>
  <button
    type="button"
    className="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white transition-colors"
  >
    3
  </button>
  <button
    type="button"
    className="px-4 py-2 rounded-lg text-black bg-gray-200 hover:bg-orange-600 hover:text-white transition-colors"
  >
    4
  </button>
  <button
    type="button"
    className="w-full rounded-r-xl border-y border-r bg-white p-4  text-base text-gray-600 hover:bg-gray-100"
  >
    <svg
      width="9"
      fill="currentColor"
      height="8"
      className=""
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
    </svg>
  </button>
</div>
</div>);
}