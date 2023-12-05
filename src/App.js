import React, { useState, useEffect } from "react";
import ImageCards from "./components/ImageCards";
function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=41090347-2859c7942b71cf4844cab3f19&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {image.map((image) => (
          <ImageCards key={image.id} image={image}/>
        ))}
      </div>
    </div>
  );
}

export default App;
