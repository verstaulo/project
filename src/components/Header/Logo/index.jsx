import logo from "@/assets/logo.png"
function Logo() {
  return (
    <div className="max-w-[7rem] max-h-[3rem]">
      <img src={logo} alt='logo' className="h-full object-fill" />
    </div>
  )
}

export default Logo
