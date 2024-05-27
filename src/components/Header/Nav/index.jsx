import { useState } from 'react'

function Nav() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  const cn = 'h-1 w-[30px] origin-center bg-slate-700 transition'
  return (
    <div
      className='relative flex size-[1.875rem] cursor-pointer flex-col justify-center gap-1'
      onClick={handleClick}
    >
      <div className={cn + (open ? ' absolute top-1/2 rotate-45' : '')}></div>
      <div className={cn + (open ? ' opacity-0' : '')}></div>
      <div className={cn + (open ? ' absolute top-1/2 -rotate-45' : '')}></div>
    </div>
  )
}

export default Nav
