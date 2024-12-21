import { A } from "@solidjs/router";

export default function Contacts() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-16">Contacts</h1>
      <p class="font-sans m-5 text-sky-200 text-2xl text-wl">David Lun</p>
      <p class="font-sans m-5 text-sky-200 text-2xl text-wl">davidliu272@gmail.com</p>
      <a class="font-sans m-5 text-sky-300 text-2xl text-wl" href="https://github.com/FuzionDragon" target="_blank">https://github.com/FuzionDragon</a>
      <p class="my-8">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <A href="/projects" class="text-sky-600 hover:underline">
          Projects
        </A>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Me
        </A>
        {" - "}
        <span>Contacts</span>
      </p>
    </main>
  );
}
