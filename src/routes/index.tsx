import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="bg-gray-900 max-6-xs text-sky-100 font-sans text-l text-center mx-auto p-4 items-center justify-center">
      <h1 class="text-6xl text-sky-700 font-semibold uppercase mt-8">David Lun</h1>
      <p class="text-xl text-sky-300 uppercase my-4">
        Computer Science Student | Software Developer | Tinkerer
      </p>
      <p class="my-8">Welcome to my portfolio website, a place to showcase some of my projects.</p>
      <p class="my-8">This includes this very website which is built using Solidstart, Typescript and Tailwindcss</p>

      <div class="bg-gray-500 contents-center border-sky-700 text-l border-solid border-1 rounded shadow-md max-w-96 p-4 m-10 font-sans max-6-xs mx-auto">
        <p class="mb-4 font-semibold text-xl">Here are pages for my... </p>
        <p class="my-4 hover:underline">
          <a href="/projects">Projects</a>
        </p>
        <p class="my-4 hover:underline">
          <a href="/about">About</a>
        </p>
        <p class="mt-4 hover:underline">
          <a href="/contacts">Contacts</a>
        </p>
      </div>
    </main>
  );
}
