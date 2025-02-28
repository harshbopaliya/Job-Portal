import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Job Portal</h1>
        <p className="text-gray-600">Find your dream job today!</p>
      </div>
    </div>
  );
};

export default Home;
