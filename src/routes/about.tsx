import { A } from "@solidjs/router";

export default function About() {
  return (
    <main class="bg-gray-900 text-center mx-auto text-sky-100 p-4 items-center text-l">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-8">About Me</h1>
      <p class="mb-4">My name is David Lun.</p>
      <p class="mb-2">I appreciate honesty and thoughtfulness.</p>
      <p class="mb-4">In my spare time I like to work on little projects and tinker my desktop.</p>
      <a class="text-sky-300 hover:underline" href="https://github.com/FuzionDragon/archdots" target="_blank">Here are my configurations.</a>
    </main>
  );
}
