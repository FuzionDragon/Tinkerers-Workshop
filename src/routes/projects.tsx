import { A } from "@solidjs/router";
import { readFileSync } from "fs";

export default function Projects() {
  interface Project {
    name: string;
    link: string;
    readme: string;
  }

  const json = readFileSync("src/data/projects.json", "utf8")
  const data = JSON.parse(json)

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-16">Projects</h1>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>Projects</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>
      </p>
    </main>
  );
}
