export default function Step({ number, title }) {
  return (
    <div className="group step flex items-center py-4">
      <div className="group-hover:bg-blue-500 group-hover:text-white flex items-center justify-center border border-gray-200 font-bold dark:border-gray-900 rounded-full h-8 w-8 text-blue-500">
        {number}
      </div>
      <h3 className="ml-3 tracking-tight font-bold">{title}</h3>
    </div>
  );
}
