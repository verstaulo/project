function Hero() {
  return (
    <main className="py-[7rem]">
      <div className='container flex min-h-[40rem] flex-col items-center justify-center text-neutral-600'>
        <h1
          className='font-montserrat mb-[9rem] text-center text-[46px] font-bold
        uppercase [text-shadow:_7px_10px_6px_#d4d4d4] leading-snug'
        >
          Say hello to <span className='inline-block bg-[#76F4EA]'>shopno!</span>
          <br />
          <span className='inline-block bg-[#76F4EA] px-1'>Agency</span> corporate shopno team
        </h1>
        <button className='font-montserrat hover:bg-neutral-300 border-[2px] border-neutral-500 px-[3rem] py-[0.8rem] uppercase tracking-widest'>
          contact us
        </button>
      </div>
    </main>
  )
}

export default Hero
