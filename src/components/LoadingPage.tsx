const LoadingPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-3xl mx-auto px-20 pt-40">
        <p className="text-[#8EA3E3] text-5xl font-bold typing">ACE-Monster...</p>
      </div>
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/images/tigersol.png"
          alt="tigersol"
          className="
            absolute inset-0    /* top-0 right-0 bottom-0 left-0 */
            w-full h-full       /* 컨테이너 꽉 채우기 */
            object-cover        /* 비율 유지하며 잘라서 채우기 */
            opacity-20
          "
        />
        {/* test */}
      </div>
    </div>
  );
};

export default LoadingPage;
