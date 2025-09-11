const MobileWarning = () => {
  return (
    <div className="fixed z-[999999999999] h-screen w-screen bg-white md:hidden">
      <div className="flex h-screen items-center">
        <h1 className="text-black text-center">
          This website has not yet been optimized for mobile. Sorry, I'm lazy 😜
        </h1>
      </div>
    </div>
  );
};

export default MobileWarning;
