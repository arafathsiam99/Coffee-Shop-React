const Gallery = () => {
  return (
    <div className="pt-[50px] pb-[100px] px-0">
      <h2 className="text-center pt-[60px] pb-[100px] px-0 uppercase text-xl font-bold">
        Gallery
      </h2>
      <div className="my-0 mx-auto py-0 px-[20px] max-w-[1300px]">
        <div className="flex flex-wrap gap-[32px]">
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-1.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-2.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-3.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-4.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-5.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
          <div className="overflow-hidden rounded-lg md:w-[calc(100%/3-32px)] w-[100%]">
            <img
              src="../../images/gallery-6.jpg"
              alt="Gallery"
              className="w-[100%] h-[100%] cursor-zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
