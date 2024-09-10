import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { accountLogOut } from "../redux/userSlice/userSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

  const handleLogOut = () => {
    dispatch(accountLogOut());
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full flex flex-col gap-5 justify-center items-center">
      <h3 className="font-normal text-2xl">Welcome {currentUser?.name}</h3>
      <h3 className="font-normal text-3xl">
        You have registered as {currentUser?.role == "candidate" ? "a" : "an"}{" "}
        {currentUser?.role}
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
