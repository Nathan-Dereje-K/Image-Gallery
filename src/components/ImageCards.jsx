const ImageCards = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-2xl ">
        <img src={image.webformatURL} alt="Random pic" className="w-full" />

        <div className="px-6 py-4">
          <div className="font-bold text-blue-500 text-xl mb-2">
            Picture by {image.user}
          </div>
          <ul className="py-1">
            <li>
              <strong>Views:</strong> {image.views}
            </li>
            <li>
              <strong>Downloades:</strong> {image.downloads}
            </li>
            <li>
              <strong>Likes:</strong> {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map(tag => (
             <span key={image.id} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
             #{tag} 
           </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
