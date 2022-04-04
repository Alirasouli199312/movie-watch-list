import React, { useState } from "react";

const MoviePoster = ({ poster, title }) => {
  const [load, setLoad] = useState(false);
  return (
    <div className="w-full">
      {!load && (
        <div className="bg-gray-100 w-[300px] h-[400px] flex flex-wrap">
          <div className="w-full h-full">
            <div className="flex flex-col h-full card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
              <div className="relative group text-primary-500 pt-[70%]">
                <div className="absolute top-0 left-0 h-full w-full">
                  <span className="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <img
        src={poster}
        alt={title}
        className={`w-full ${!load && "hidden"}`}
        onLoad={() => setLoad(true)}
      />
    </div>
  );
};

export default MoviePoster;
