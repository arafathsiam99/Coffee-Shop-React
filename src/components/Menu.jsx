const Menu = () => {
  return (
    <div className="text-white-color bg-dark-color pt-[50px] pb-[100px] px-0">
      <h2 className="text-center pt-[60px] pb-[100px] px-0 uppercase text-xl font-bold">
        Our Menu
      </h2>
      <div className="my-0 mx-auto py-0 px-[20px] max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[30px] md:gap-[110px] justify-between">
          <div className="flex items-center text-center flex-col justify-between w-[calc(100% / 2 - 30px) md:w-[calc(100% / 3 - 110px)]]">
            <img
              src="../../images/hot-beverages.png"
              alt="Hot Beverages"
              className="max-w-[45%] md:max-w-[83%]  aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">Hot Beverages</h3>
            <p className="text-lg">
              Wide range of Steaming hot coffee to make you fresh and divght.
            </p>
          </div>
          <div className="flex items-center text-center flex-col justify-between ">
            <img
              src="../../images/cold-beverages.png"
              alt="Cold Beverages"
              className="max-w-[45%]  md:max-w-[83%] aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">Cold Beverages</h3>
            <p className="text-lg">
              Creamy and frothy cold coffee to make you cool.
            </p>
          </div>
          <div className="flex items-center text-center flex-col justify-between ">
            <img
              src="../../images/refreshment.png"
              alt="Refreshment"
              className="max-w-[45%]  md:max-w-[83%] aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">Refreshment</h3>
            <p className="text-lg">
              Fruit and icy refreshing drink to make feel refresh.
            </p>
          </div>
          <div className="flex items-center text-center flex-col justify-between ">
            <img
              src="../../images/special-combo.png"
              alt="Special Combo"
              className="max-w-[45%]  md:max-w-[83%] aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">Special Combo</h3>
            <p className="text-lg">
              Your favoutie eating and drinking combations.
            </p>
          </div>
          <div className="flex items-center text-center flex-col justify-between ">
            <img
              src="../../images/desserts.png"
              alt="Dessert"
              className="max-w-[45%]  md:max-w-[83%] aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">Dessert</h3>
            <p className="text-lg">
              Satiate your palate and take you on a cudivnary treat.
            </p>
          </div>
          <div className="flex items-center text-center flex-col justify-between ">
            <img
              src="../../images/burger-frenchfries.png"
              alt="burger & French Fries"
              className="max-w-[45%]  md:max-w-[83%] aspect-square mb-4 object-contain"
            />
            <h3 className="my-3 mx-0 text-2xl font-semibold">
              Burger & French Fries
            </h3>
            <p className="text-lg">
              Quick bites to satisfy your small size hunger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
