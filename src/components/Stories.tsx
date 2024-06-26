import Image from 'next/image'
import React from 'react'

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-auto text-xs">
      <div className="flex gap-8 w-max">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col shrink-0 items-center gap-2 cursor-pointer"
            >
              <Image
                src="https://images.pexels.com/photos/26146666/pexels-photo-26146666/free-photo-of-a-small-bird-is-standing-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="avatar"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full ring-2"
              />
              <span className="font-medium">Ricky</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Stories
