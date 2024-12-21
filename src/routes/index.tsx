import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase mt-16">David Lun</h1>
      <p class="max-6-xs text-xl text-sky-300 font-sans uppercase my-4">
        Computer Science Student / Programmer
      </p>
      <p class="my-8">
        <span>Home</span>
        {" - "}
        <A href="/projects" class="text-sky-600 hover:underline">
          Projects
        </A>{" "}
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Me
        </A>{" "}
        {" - "}
        <A href="/contacts" class="text-sky-600 hover:underline">
          Contacts
        </A>
      </p>
    </main>
  );
}
