import React from 'react'

function Title({작명, 서브}) {
  return (
    <>
        <h3 className='font-bold text-center text-base md:text-lg lg:text-3xl my-24'>{작명} 타이틀 </h3>
        <p className='text-center text-base md:text-lg lg:text-1xl my-24'>{서브} 이름</p>
    </>
  )
}

export default Title