import advImg1 from '@/assets/advantages/icon_1.png'
import advImg2 from '@/assets/advantages/icon_2.png'
import advImg3 from '@/assets/advantages/icon_3.png'
import advImg4 from '@/assets/advantages/icon_4.png'

const advantages = [
  {
    description: 'Доставка во все регионы России',
    img: advImg1
  },
  {
    description: 'Собственное производство',
    img: advImg2
  },
  {
    description: 'Вся продукция сертифицирована',
    img: advImg3
  },
  {
    description: 'Гарантия от производителя',
    img: advImg4
  }
]

function Advantages() {
  return (
    <section className='bg-secondary'>
      <div className='container min-h-[20rem] text-center'>
        <header className='sectionHeader'>
          <h2 className='sectionTitle mb-8'>Наши преимущества</h2>
        </header>
        <ul className='flex flex-wrap justify-center p-5'>
          {advantages.map((advantage, i) => (
            <li className='advantagesCard' key={i}>
              <img src={advantage.img} alt='advantages' className='advantagesImg' />
              <span>{advantage.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Advantages
