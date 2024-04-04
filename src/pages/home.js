import Navbar from "../components/navbar";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="bg-purple-300 p-5 text-center rounded-2xl">
        <h1 className="font-bold">Homepage</h1>
      </div>
    </>
  );
}

export default Homepage;