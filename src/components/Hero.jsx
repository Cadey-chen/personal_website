import { styles } from '../styles';

const Hero = () => {
  return (
    <section className={`hero-gradient relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 max-w-7xl
      flex flex-row items-start`}>
        <div className="my-56 ml-4 lg:gap-5 lg:mt-50 lg:ml-28">
          <h1 className={`${styles.heroHeadText} mt-20 inline-block text-blue-white`}>Hi, I&apos;m Cadey</h1>
          <p className={`${styles.heroSubText} lg:mt-8 text-blue-white`}>
          Welcome to my space! I&apos;m a Software Engineer and fourth year Computer Science student at the University of Waterloo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero