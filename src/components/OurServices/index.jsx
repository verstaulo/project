// import defaultImg from '@/assets/350x350.png'
import arrowBtn from '@/assets/arrow_btn.svg'
import { useState } from 'react'

function OurServices() {
  return (
    <section className='py-[7rem]'>
      <div className='container'>
        <header className='sectionHeader'>
          <h2 className='sectionTitle'>Наши услуги</h2>
          <p className='sectionSubTitle'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolor eos
            esse expedita fugiat id, inventore molestias odit officiis omnis quasi quod sed, sunt
            vel velit voluptas voluptates voluptatum.
          </p>
        </header>
        <div className='flex flex-wrap justify-between gap-2'>
          <ServiceCard size={'big'} />
          <ServiceCard />
          <ServiceCard size={'big'} />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard size={'big'} />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ size }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  return (
    <div
      className={`
        min-w-[21.875rem] basis-[450px] bg-[url(@/assets/350x350.png)] bg-cover bg-center
        bg-no-repeat font-merriweather

        max-[969px]:flex-grow
      `}
    >
      <div
        className={`
          relative flex h-full flex-col justify-end overflow-hidden bg-neutral-800/50 px-[70px]
          py-[55px] text-white

          ${size === 'big' ? 'min-[969px]:flex-grow' : 'min-[969px]:flex-shrink'}
        `}
      >
        <h3 className='pb-5 font-bold uppercase'>Lorem ipsum dolor sit amet</h3>
        <p className='pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iste laborum quidem?
          Accusamus ad architecto atque consequuntur dicta dignissimos dolorum esse, hic in maiores,
          neque nihil obcaecati odit rem, sed?
        </p>
        <button className='flex items-center gap-2.5 uppercase' onClick={handleClick}>
          know more <img src={arrowBtn} alt='btn' />
        </button>
        {open && (
          <div
            className={`
              absolute left-0 top-0 flex h-full w-full flex-col bg-emerald-300 px-[70px] py-[55px]
              text-black
            `}
          >
            <h3 className='pb-5 font-bold uppercase'>Lorem ipsum dolor sit amet</h3>
            <p className='flex-grow pb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deleniti
              eveniet inventore laborum placeat velit veritatis vero voluptas. Aperiam assumenda
              aut, commodi eos eveniet fuga nesciunt? Aperiam saepe, voluptate?{' '}
            </p>
            <button className='self-start text-xl' onClick={handleClick}>
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default OurServices
