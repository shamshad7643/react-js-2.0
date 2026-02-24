import React from "react";

const Cards = ({ user }) => {
  return (
    <div className="bg-white w-80 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">

      {/* Cover Image */}
      <div className="h-32 w-full">
        <img
          src={user.coverImage}
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center -mt-12 p-4">
        <img
          src={user.profile}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />

        <h2 className="mt-3 text-xl font-bold">{user.fullName}</h2>
        <p className="text-gray-500 text-sm">{user.title}</p>

        {/* Stats */}
        <div className="flex justify-between w-full mt-4 text-center">
          <div>
            <h3 className="font-bold">{user.likesCount}</h3>
            <p className="text-xs text-gray-500">Likes</p>
          </div>
          <div>
            <h3 className="font-bold">{user.postCount}</h3>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div>
            <h3 className="font-bold">{user.viewsCount}</h3>
            <p className="text-xs text-gray-500">Views</p>
          </div>
        </div>

        {/* Follow Button */}
        <button
          className={`mt-4 px-6 py-2 rounded-full text-white font-semibold ${
            user.followed ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {user.followed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Cards;