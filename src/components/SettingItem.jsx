import React from 'react'

const SettingItem = ({name, Icon}) => {
  return (
    <div className="flex gap-4 px-11 py-2">
      {Icon && <Icon className="text-[24px]" />}
      <h3 className="text-[18px] font-semibold leading-[22px]">{name}</h3>
    </div>
  );
}

export default SettingItem