export default function Hero() {
  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-background'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center space-y-4 text-center'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
            HarbinPC
          </h1>
          <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
            Компьютерные комплектующие из Китая с доставкой по всей России
          </p>
        </div>
      </div>
    </section>
  )
}
