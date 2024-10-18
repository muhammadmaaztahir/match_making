import React from 'react'

const DescriptionWithIcon = (props) => {
  return (
    <div>
      <div className='mx-auto gap-7 flex flex-col items-center justify-center'>
            <img className='w-fit' src={props.image} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        </div>
    </div>
  )
}

export default DescriptionWithIcon
