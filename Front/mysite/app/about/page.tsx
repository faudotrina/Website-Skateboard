import React from 'react'
import Image from "next/image"
import Header from '@/components/Header'


export default function About() {
  return (
    <section
      className="overflow-hidden bg-[url(/img/sk.avif)] bg-cover bg-top bg-no-repeat font-sans"
    >
      <header>
        <Header />
      </header>
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-5xl text-[#E85A50] font-sans">Born to Skate</h2>

          <p className="hidden max-w-lg md:mt-6 md:block md:text-lg md:leading-relaxed text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus quo fugit
            asperiores quasi explicabo quia vitae ullam perferendis doloremque maiores commodi, repudiandae
            placeat maxime magni, deserunt libero quisquam sint.
          </p>

          <p className="hidden max-w-lg text-white md:mt-6 md:block md:text-lg md:leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
            doloribus iure architecto quae voluptatum beatae excepturi dolores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur doloribus quo fugit
            asperiores quasi explicabo quia vitae ullam perferendis doloremque maiores commodi, repudiandae
            placeat maxime magni, deserunt libero quisquam sint.
          </p>

        </div>
      </div>
    </section>
  )
}
