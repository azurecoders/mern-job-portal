import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  if (!userInfo) {
    return null;
  }

  const handleLogOut = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-5 justify-center items-center">
      <h3 className="font-normal text-2xl">Welcome {userInfo?.name}</h3>
      <h3 className="font-normal text-3xl">
        You have registered as {userInfo?.role == "candidate" ? "a" : "an"}{" "}
        {userInfo?.role}
      </h3>
      <button
        className="py-2 px-4 hover:opacity-90 bg-red-500 text-white rounded-md"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
