import { A } from "@solidjs/router";
import { For, Match, Show, Switch, createResource } from "solid-js";

import projects from '../data/data.json';
import ProjectCard from "../components/ProjectCard";

interface Project {
  name: string;
  desc: string;
  link: string;
  readme: string;
}

const fetchProjects = async () => {
  return projects;
};

export default function Projects() {
  const [projects] = createResource(fetchProjects);

  return (
    <main class="bg-gray-900 text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-8">Projects</h1>
      <a class="font-sans m-5 text-sky-300 text-l text-wl hover:underline" href="https://github.com/FuzionDragon" target="_blank">Code hosted on Github</a>
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
    </main>
  );
}
