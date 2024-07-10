import React from 'react'
import Image from "next/image"
import Footer from '@/components/Footer'
import Link from 'next/link'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className='bg-[#EAE8DC]'>
        <div className='object-center'>
          <div className="carousel">
            <div id="slide1" className="carousel-item relative w-full">
              <Link href="/sale">
                <Image
                  src="/img/hom.jpg"
                  alt=""
                  width={2000}
                  height={900}
                  className="w-full"
                />
                <p className="font-bold text-5xl text-red-600 font-sans">
                  Avalaible Now
                </p>
              </Link>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
              <Image
                src="/img/coll.jpg"
                alt=""
                width={2000}
                height={900}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
              <Link href="/sale">
                <Image
                  src="/img/sn.jpg"
                  alt=""
                  width={2000}
                  height={900}
                  className="w-full"
                />
              </Link>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <Image
              src="/img/rec.gif"
              width="100"
              height="100"
              alt="Démarche ESG"
            />
            <p className="text-3xl font-bold text-cyan-600 sm:text-6xl">100 % RECYCLED PLASTIC</p>

          </div>
        </div>

        <div className='font-sans text-5xl font-bold text-center m-1 text-black'>
          CATEGORY
        </div>

        <div className="grid grid-cols-3 divide-x">
          <div className='group relative block bg-black'>
            <Image
              src="/img/piece.jpg"
              alt=""
              width={900}
              height={500}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
              <Link href='/sale'>
                <p className="text-3xl font-bold text-white sm:text-3xl text-center">Sale</p>
              </Link>
            </div>
          </div>

          <div className='group relative block bg-black'>
            <Image
              src="/img/textile.jpg"
              alt=""
              width={900}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <Link href='/apparel'>
                <p className="text-3xl font-bold text-white sm:text-3xl text-center">Apparel</p>
              </Link>
            </div>
          </div>

          <div className='group relative block bg-black'>
            <Image
              src="/img/types.jpg"
              alt=""
              width={900}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <Link href='/accessories'>
                <p className="text-3xl font-bold text-white sm:text-3xl text-center">Accessories</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="mx-2 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Arrivals</h2>
          </header>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-start ">
            <li>
              <a href="#" className="group block overflow-hidden">
                <Image
                  src="/img/s1.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Turles Skate
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900"> 359 € </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <Image
                  src="/img/s2.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Corail Surfboard
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900"> 259 € </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <Image
                  src="/img/S3.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Yellow Skate
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900"> 250 € </span>
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="group block overflow-hidden">
                <Image
                  src="/img/s4.jpg"
                  alt=""
                  width={900}
                  height={900}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    Ice Skate
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900"> 349 € </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <p className='text-gray-700 font-bold text-center font-sans text-4xl'>
          THE ORIGINAL SURFSKATE SINCE 2001
        </p>
        <div className="mx-auto max-w-screen-2xl px-2 py-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <Image
                  alt=""
                  src="/img/tgt.jpg"
                  width={600}
                  height={600}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px] rounded-bl-3xl rounded-tr-3xl"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-[#EAE8DC]">
              <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#EAE8DC]"
              ></span>

              <div className="p-2 sm:p-16 lg:p-18">
                <h2 className="text-2xl font-bold sm:text-6xl text-[#e4644c] font-sans">
                  BORN TO SKATE
                </h2>

                <p className="mt-4 text-black text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                  esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

              </div>
            </div>
            <p className='text-black font-sans text-2xl'>
              <span className="text-2xl font-bold sm:text-6xl text-cyan-600 font-sans">
                RIDE TOGETHER
              </span><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident rem culpa accusantium impedit dolorum alias maiores.
            </p>
          </div>

        </div>

        <footer className="w-full py-2">
          <Footer />
        </footer>
      </div>
    </>
  )
}
