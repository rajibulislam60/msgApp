import React from 'react';
import ProfileSetting from '../components/ProfileSetting';
import AccountSetting from '../components/AccountSetting';

const Setting = () => {
  return (
    <div className="w-full h-screen px-6 py-6">
      <div className="w-full h-full bg-slate-300 flex flex-col">
        <div className='w-full h-full flex'>
          <ProfileSetting/>
          <AccountSetting/>
        </div>
      </div>
    </div>
  );
}

export default Setting