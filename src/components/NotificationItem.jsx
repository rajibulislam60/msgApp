import React from 'react'

const NotificationItem = ({Icon, name}) => {
  return (
    <div className='px-4 py-3'>
      <div className="flex gap-4 items-center shadow-md px-8 py-5">
      {Icon && <Icon className="text-[24px]" />}
      <h3 className="text-[18px] font-semibold leading-[22px]">{name}</h3>
    </div>  
    </div>
    
  );
}

export default NotificationItem