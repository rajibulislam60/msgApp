import React from 'react'
import Sidebar from '../components/Sidebar'
import Userlist from '../components/Userlist'
import FriendRequest from '../components/FriendRequest'
import FriendList from '../components/FriendList'
import BlogList from '../components/BlogList'

const Home = () => {
  return (
    <div className="w-full h-screen px-6 py-6">
      <div className="w-full h-full bg-slate-300 flex flex-col">
        <Userlist />
        <div className="flex gap-3 h-full flex-grow">
          <FriendRequest />
          <FriendList />
          <BlogList />
        </div>
      </div>
    </div>
  );
}

export default Home