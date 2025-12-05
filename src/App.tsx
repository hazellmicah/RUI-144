function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        {/* Container */}
        <div className="flex">
    

          <div className="w-[700px] flex flex-col items-center">
            {" "}
            {/* Left Column */}
            <h1 className="text-4xl font-bold text-violet-300">
              Book a trip with us
            </h1>
            <p className="text-wrap w-150 p-2 text-purple-200">
              Are you ready to transform your life, achieve your goals and make
              a position change? It all starts with taking action. Embrace the
              opportunity to seize your future now
            </p>
          </div>

          <div className="text-center">
            {" "}
            {/*  Right Column*/}
            <p className="font-bold text-2xl text-purple-950 p-2">
              Get 40% OFF on your first trip
            </p>
            <h1 className="  w-80 text-purple-300 text-lg">
              join our community and be the first to know about the latest news,
              offers, exciting content
            </h1>
            <h2 className="text-2xl rounded-lg outline-2 outline-gray-300 w-78 ml-9">
              Your email address
            </h2>
            <button className="p-1 w-78 h-10 text-2xl bg-red-800 rounded-lg mr-15 text-lg text-white font-bold">
              Claim offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
