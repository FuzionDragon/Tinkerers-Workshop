import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-16">Tinkerer's Workshop</h1>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <A href="/projects" class="text-sky-600 hover:underline">
          Projects
        </A>{" "}
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{" "}
      </p>
    </main>
  );
}
