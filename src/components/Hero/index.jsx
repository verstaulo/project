function Hero() {
  return (
    <main className='py-[7rem]'>
      <div
        className={`
          container flex min-h-[40rem] flex-col items-center justify-center text-neutral-600
        `}
      >
        <h1
          className={`
            mb-[9rem] text-center font-montserrat text-[46px] font-bold uppercase leading-snug [text-shadow:_7px_10px_6px_#d4d4d4]
          `}
        >
          Say hello to <span className='inline-block bg-[#76F4EA]'>shopno!</span>
          <br />
          <span className='inline-block bg-[#76F4EA] px-1'>Agency</span> corporate shopno team
        </h1>
        <button
          className={`
            border-[2px] border-neutral-500 px-[3rem] py-[0.8rem] font-montserrat uppercase
            tracking-widest hover:bg-neutral-300
          `}
        >
          contact us
        </button>
      </div>
    </main>
  )
}

export default Hero
