import { A } from "@solidjs/router";
import { For, Match, Show, Switch, onMount, createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { readFileSync } from "fs";

import ProjectCard from "../components/ProjectCard";

interface Project {
  name: string;
  desc: string;
  link: string;
  readme: string;
}

const fetchProjects = async () => {
  const res = await fetch('http://localhost:4000/projects');
  return res.json()
};

export default function Projects() {
  const [projects] = createResource(fetchProjects);

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-16">Projects</h1>
      <div class="flex flex-wrap justify-start justify-items-start">
        <Show when={projects.loading}>
          <p>Loading...</p>
        </Show>
        <Switch>
          <Match when={projects.error}>
            <span>Error: {projects.error}</span>
          </Match>
          <Match when={projects()}>
            <For each={projects()}>
              {(project: Project) => <ProjectCard project={project}/>}
            </For>
          </Match>
        </Switch>
      </div>
      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>Projects</span>
        {" - "}
        <A href="/about" class="text-sky-600 hover:underline my-16">
          About Page
        </A>
      </p>
    </main>
  );
}
