import React from 'react'

const Hero = () => {
  return (
    <header class='bg-white dark:bg-gray-800'>
      <div class='container px-6 py-16 mx-auto'>
        <div class='items-center lg:flex'>
          <div class='w-full lg:w-1/2'>
            <div class='lg:max-w-lg'>
              <h1 class='text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl'>
                Best Place To Choose Your Products
              </h1>
              <p class='mt-2 text-gray-600 dark:text-gray-400'>
                Efficiently scale integrated benefits with global innovation.
                Synergistically visualize cross-media collaboration and
                idea-sharing whereas long-term high-impact catalysts for change.
              </p>
              <button class='w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
                Shop Now
              </button>
            </div>
          </div>

          <div class='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
            <img
              class='w-full h-full lg:max-w-2xl'
              src='https://merakiui.com/_nuxt/img/Catalogue-pana.32658f1.svg'
              alt='Catalogue-pana.svg'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
