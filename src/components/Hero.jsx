const Hero = () => {
  return (
    <div className="min-h-screen bg-primary-color">
      <div className="gap-[50px] text-center pt-[200px] pb-[30px] px-[50px] md:px-0 flex flex-col-reverse md:flex-row md:items-center text-white-color my-0 mx-auto max-w-[1300px] ">
        <div className="md:flex md:flex-col md:justify-center md:items-start ">
          <h2 className=" text-4xl text-secondary-color font-['Miniver']">
            Best Coffee
          </h2>
          <h3 className="text-[25px] mt-2  md:text-[32px] font-semibold">
            Make your day great with our special coffee!
          </h3>
          <p className="mt-6 mb-10 md:mx-0  md:text-[17.92px]">
            Welcome to our coffee paradise,where every bean tells a story and
            every cup sparks joy.
          </p>
          <div className="flex justify-center gap-[20px] md:flex md:gap-[30px] ">
            <button className="md:px-[26px] px-[10px] py-[10px] border-transparent rounded-[30px] bg-secondary-color font-medium duration-300 ease-in">
              Order Now
            </button>
            <button className=" md:px-[26px] px-[10px] py-[10px] border-transparent rounded-[30px] bg-secondary-color font-medium duration-300 ease-in">
              Contact Us
            </button>
          </div>
        </div>
        <div className="max-w-[300px] md:max-w-[500px] md:mr-[30px]">
          <img src="../../images/coffee-hero-section.png" alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
