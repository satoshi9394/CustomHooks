import React, { memo } from 'react'

const Smail = memo(({value}) => {
  console.log('Me volvi a llamar :(')
  return (
    <small>{value}</small>
  )
})

export default Smail
