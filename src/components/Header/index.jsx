import Logo from '@/components/Header/Logo/index.jsx'
import Nav from '@/components/Header/Nav/index.jsx'

function Header() {
  return (
    <header className='py-14'>
      <div className='container flex justify-between items-center'>
        <Logo />
        <Nav/>
      </div>
    </header>
  )
}

export default Header
