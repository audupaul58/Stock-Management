import React from 'react'
import {useSession} from 'next-auth/react'

const Categories = () => {

  const {data: session} = useSession({
    required: true,
  })
  
  if(!session){
    return <></>
  }

  return (
    <div>Na Me Be Category Chairman</div>
  )
}

export default Categories

Categories.auth = true

