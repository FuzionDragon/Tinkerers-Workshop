import { dividerClasses } from "@suid/material/Divider";
import { createSignal } from "solid-js";

interface Props {
  project: Project;
}

interface Project {
  name: string;
  link: string;
  readme: string;
}

const TaskCard = (props: Props) => {
  return (
    <div class="bg-gray-500 contents-center border-black items-center rounded shadow-md w-96 text-center m-5">
      <h1 class="font-extrabold m-2 text-white text-wl">{props.project.name}</h1>
      <p class="font-sans m-2 text-white text-wl">{props.project.link}</p>
    </div>
  );
};

export default TaskCard;
