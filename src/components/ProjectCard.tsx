import { dividerClasses } from "@suid/material/Divider";
import { createSignal } from "solid-js";

interface Props {
  project: Project;
}

interface Project {
  name: string;
  desc: string;
  link: string;
  readme: string;
}

const TaskCard = (props: Props) => {
  return (
    <div class="bg-gray-500 contents-center border-sky-700 border-solid border-4 items-center rounded shadow-md w-96 text-center p-4 m-10">
      <h1 class="font-extrabold text-2xl my-5 text-white text-wl">{props.project.name}</h1>
      <p class="font-sans my-5 text-white text-wl">{props.project.desc}</p>
      <a class="font-sans my-10 text-sky-300 hover:underline text-wl" href={props.project.link} target="_blank">{props.project.link}</a>
    </div>
  );
};

export default TaskCard;
