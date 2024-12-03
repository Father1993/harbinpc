'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const TypewriterEffect = () => {
  const texts = [
    'Премиальные комплектующие',
    'Прямые поставки из Китая',
    'Профессиональная сборка',
  ]
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentIndex]

        if (!isDeleting) {
          setCurrentText(fullText.slice(0, currentText.length + 1))
          if (currentText.length === fullText.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setCurrentText(fullText.slice(0, currentText.length - 1))
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 150
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  return (
    <h2 className='text-2xl md:text-3xl text-gray-200 mb-8 h-[40px]'>
      {currentText}
      <span className='animate-pulse'>|</span>
    </h2>
  )
}

export default function Hero() {
  return (
    <section className='relative min-h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Фоновое видео/изображение */}
      <div className='absolute inset-0 z-0 w-full'>
        <Image
          src='/images/3.jpg'
          alt='Gaming PC Background'
          fill
          className='object-cover opacity-40'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80' />
      </div>

      {/* 3D Parallax элементы */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='absolute inset-0 z-10 w-full'
      >
        <div className='relative h-full perspective-1000'>
          <motion.div
            animate={{
              transform: [
                'translateZ(0px)',
                'translateZ(50px)',
                'translateZ(0px)',
              ],
            }}
            transition={{
              duration: 6,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            className='absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2'
          >
            <Image
              src='/images/2.jpg'
              width={300}
              height={300}
              alt='Видеокарта'
              className='floating-element'
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Основной контент */}
      <div className='relative z-20 container mx-auto px-4 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='text-5xl md:text-7xl font-bold mb-6'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
              HarbinPC
            </span>
          </h1>

          <TypewriterEffect />

          <p className='text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300'>
            Создайте мощный игровой ПК вашей мечты с компонентами от ведущих
            производителей Китая
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <Link
              href='/configurator'
              className='group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold transform hover:scale-105 transition-all'
            >
              <span className='relative z-10'>Собрать свой ПК</span>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity' />
            </Link>

            <Link
              href='/catalog'
              className='group px-8 py-4 bg-transparent border-2 border-white/30 rounded-full text-lg font-semibold hover:border-white/60 transform hover:scale-105 transition-all'
            >
              Каталог товаров
            </Link>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'
        >
          {[
            { number: '5000+', label: 'Довольных клиентов' },
            { number: '1000+', label: 'Собранных ПК' },
            { number: '2 года', label: 'Гарантии' },
            { number: '24/7', label: 'Поддержка' },
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <div className='text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>
                {stat.number}
              </div>
              <div className='text-sm md:text-base text-gray-400'>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
      >
        <div className='animate-bounce'>
          <svg
            className='w-6 h-6 text-gray-400'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
