const ImageCards = () => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-2xl ">
        <img
          src="https://source.unsplash.com/random"
          alt="Random pic"
          className="w-full"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-blue-500 text-xl mb-2">
            Picture by Nate
          </div>
          <ul className="py-1">
            <li>
              <strong>Views:</strong> 6040
            </li>
            <li>
              <strong>Downloades:</strong> 1200
            </li>
            <li>
              <strong>Likes:</strong> 3245
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tag 1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tag 2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tag 3
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
