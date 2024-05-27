import defaultImg from '@/assets/350x350.png'

function FeaturedWorks() {
  return (
    <section className='bg-secondary'>
      <div className='container'>
        <header className='sectionHeader'>
          <h2 className='sectionTitle'>Наши работы</h2>
          <p className='sectionSubTitle'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos dolor eos
            esse expedita fugiat id, inventore molestias odit officiis omnis quasi quod sed, sunt
            vel velit voluptas voluptates voluptatum.
          </p>
        </header>
        <ul className='grid [grid-template-columns:_repeat(auto-fit,_minmax(350px,_1fr))] gap-4'>
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i}>
              <img src={defaultImg} alt='ourwork' className='w-full object-cover' />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
export default FeaturedWorks
