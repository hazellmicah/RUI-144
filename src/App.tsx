function App() {
  return (
    <>
      
      <div className="mb-10 h-100 bg-[url(https://cdn.wallpapersafari.com/83/5/i5j73A.jpeg)] bg-top bg-cover flex items-center justify-center">
        <h1 className="text-3xl text-white font-bold drop-shadow-lg text-center">
          Explore More
        </h1>
        <h2 className="text-2xl text-white font-bold drop-shadow-lg text-center">
          Your travel destiny, Written in the stars
        </h2>
      </div>

     
      <div className="flex flex-col items-center justify-center">
        {/* Container */}

        <div className="flex gap-6">
          <div className="w-[700px] flex flex-col rounded-l-lg outline outline-black bg-white/5 p-4">
            {/* Left Column */}
            <h1 className="text-4xl font-bold text-violet-300 ">
              Book a trip with us
            </h1>
            <p className="text-wrap p-2 text-purple-200">
              Are you ready to transform your life, achieve your goals and make
              a position change? It all starts with taking action. Embrace the
              opportunity to seize your future now
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-90 space-y-3 p-2 rounded-r-lg outline outline-black">
            {/* Right Column */}
            <p className="font-bold text-2xl text-purple-950">
              Get 40% OFF on your first trip
            </p>
            <h1 className="w-full text-center text-purple-300 text-lg">
              join our community and be the first to know about the latest news,
              offers, exciting content
            </h1>

            <div className="w-full">
              <div className="text-center text-gray-700 p-2 rounded-lg outline outline-2 outline-gray-300 w-full">
                Your email address
              </div>
            </div>

            <button className="w-full h-10 text-lg bg-red-800 rounded-lg text-white font-bold cursor-pointer">
              Claim offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
