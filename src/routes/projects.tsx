import { A } from "@solidjs/router";
import { For, Match, Show, Switch, createResource } from "solid-js";

import projects from '../data/data.json';
import ProjectCard from "../components/ProjectCard";

interface Project {
  name: string;
  desc: string;
  link: string;
  active: boolean;
}

const fetchProjects = async () => {
  return projects;
};

export default function Projects() {
  const [projects] = createResource(fetchProjects);

  return (
    <main class="bg-gray-900 text-center mx-auto text-sky-100 text-l p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-8">Projects</h1>
      <a class="font-sans m-5 text-sky-300 text-l text-wl hover:underline" href="https://github.com/FuzionDragon" target="_blank">Code hosted on Github</a>
      <p class="mt-8 mb-2 text-xl font-semibold">Currently developing / maintaining</p>
      <div class="flex flex-wrap justify-center justify-items-center">
        <Show when={projects.loading}>
          <p>Loading...</p>
        </Show>
        <Switch>
          <Match when={projects.error}>
            <span>Error: {projects.error}</span>
          </Match>
          <Match when={projects()}>
            <For each={projects()}>
              {(project: Project) => 
                <Show when={project.active == true}>
                  <ProjectCard project={project}/>
                </Show>
              }
            </For>
          </Match>
        </Switch>
      </div>
      <p class="mt-8 mb-2 text-xl font-semibold">All projects</p>
      <div class="flex flex-wrap justify-center justify-items-center">
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
      <p class="mt-8 mb-2 text-xl font-semibold">Other</p>
      <div class="bg-gray-500 text-sky-100 text-l contents-center border-sky-700 border-solid border-1 items-center rounded shadow-md w-1/2 text-center p-4 m-10 font-sans mx-auto">
        <h1 class="font-extrabold text-2xl my-5 text-wl">Personal Linux Desktop Configurations</h1>
        <p class="my-5">
          While not a project, I feel like this should be included somewhere on here.
        </p>
        <p class="my-5">
          After using Linux for at least 3 years as a personal desktop, I have gained lots of experience and knowledge regarding most things Linux. 
        </p>
        <p class="my-5">
          Linked below are my personal configurations and scripts to software used on my Arch Linux desktop.
        </p>
        <a class="my-10 text-sky-300 hover:underline text-wl" href="https://github.com/FuzionDragon/archdots" target="_blank">https://github.com/FuzionDragon/archdots</a>
      </div>
    </main>
  );
}
