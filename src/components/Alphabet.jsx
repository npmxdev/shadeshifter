import React from 'react'

const Alphabet = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-4 text-white font-bold text-2xl">
            <div className="h-20 w-20 flex items-center justify-center rounded-lg">
            {String.fromCharCode(65 + index)}
            </div>
        </div>
    </div>
  )
}

export default Alphabet
