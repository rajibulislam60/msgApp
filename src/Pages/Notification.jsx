import React from 'react';
import NotificationItem from '../components/NotificationItem';
import { FaBell } from "react-icons/fa";

const Notification = () => {
  return (
    <div className="w-full h-screen px-6 py-6">
      <div className="w-full h-full bg-slate-300 flex flex-col">
        <div className="h-full px-2 py-2">
          <div className="w-full h-full bg-white rounded-md">
            <NotificationItem
              Icon={FaBell}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod vero quidem optio quas quisquam nulla illo doloribus repellat corrupti."
            />
            <NotificationItem
              Icon={FaBell}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod vero quidem optio quas quisquam nulla illo doloribus repellat corrupti."
            />
            <NotificationItem
              Icon={FaBell}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod vero quidem optio quas quisquam nulla illo doloribus repellat corrupti."
            />
            <NotificationItem
              Icon={FaBell}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod vero quidem optio quas quisquam nulla illo doloribus repellat corrupti."
            />
            <NotificationItem
              Icon={FaBell}
              name="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod vero quidem optio quas quisquam nulla illo doloribus repellat corrupti."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification