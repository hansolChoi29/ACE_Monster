import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen  px-4   text-[#8EA3E3]">
      <div className="text-center ">
        <Link to="/">
          <h1 className="text-4xl font-bold mt-2">ACE_Monster</h1>
        </Link>
        <p className="mb-16 mt-2">로그인</p>
        <div className="flex flex-col gap-2">
          <div>
            <p className="flex text-white font-bold">ID</p>
            <input className="w-full border border-[#8EA3E3]   bg-transparent  text-white placeholder-gray-400  p-1 rounded-md     focus:outline-none focus:ring-0 " />
          </div>
          <div>
            <p className="flex text-white font-bold">PASSWORD</p>
            <input className="border border-[#8EA3E3]   bg-transparent  text-white placeholder-gray-400  p-1 rounded-md  w-full   focus:outline-none focus:ring-0 " />
          </div>
        </div>
      </div>
      <button className="bg-[#8EA3E3] text-white rounded px-2 py-1 mt-4">로그인</button>
    </section>
  );
};

export default Login;
