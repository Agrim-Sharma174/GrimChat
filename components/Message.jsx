import React from 'react'

const Message = ({ msg }) => {
    const message = msg?.data()?.message;
  return (
    <div className='max-w-[200px] md:max-w-[300px] bg-[#6c0303cd] p-2 rounded-b-xl rounded-tr-xl'>{message}</div>
  )
}

export default Message