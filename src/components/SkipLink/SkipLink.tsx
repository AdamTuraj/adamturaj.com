const SkipLink = () => {
  return (
    <a
      href="#about"
      className="fixed top-0 left-0 z-50 w-screen -translate-y-96 bg-slate-700 py-5 text-center focus:translate-y-0 focus:outline-none"
      tabIndex={1}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
