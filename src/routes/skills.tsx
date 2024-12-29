import { A } from "@solidjs/router";

export default function Skills() {
  return (
    <main class="bg-gray-900 text-center mx-auto text-sky-100 p-4 items-center text-l">
      <h1 class="max-6-xs text-6xl text-sky-700 font-semibold uppercase my-8">Skills</h1>
      <div class="flex flex-wrap justify-center justify-items-center">
        <div class="bg-gray-500 text-sky-100 text-l contents-center border-sky-700 border-solid border-1 items-center rounded shadow-md w-96 text-center p-4 m-10 font-sans mx-auto">
          <h1 class="font-extrabold text-xl my-5 text-wl">Web Development</h1>
          <p class="my-3">Solidjs</p>
          <p class="my-3">HTML</p>
          <p class="my-3">CSS + TailwindCss</p>
          <p class="my-3">Typescript / Javascript (JSON)</p>
          <p class="my-3">Netlify</p>
        </div>
        <div class="bg-gray-500 text-sky-100 text-l contents-center border-sky-700 border-solid border-1 items-center rounded shadow-md w-96 text-center p-4 m-10 font-sans mx-auto">
          <h1 class="font-extrabold text-xl my-5 text-wl">Programming</h1>
          <p class="my-3">Lua</p>
          <p class="my-3">Rust</p>
          <p class="my-3">Python</p>
          <p class="my-3">Bash</p>
          <p class="my-3">Sqlite3 (SQL)</p>
          <p class="my-3">Tauri</p>
        </div>
        <div class="bg-gray-500 text-sky-100 text-l contents-center border-sky-700 border-solid border-1 items-center rounded shadow-md w-96 text-center p-4 m-10 font-sans mx-auto">
          <h1 class="font-extrabold text-xl my-5 text-wl">Software and Tools</h1>
          <p class="my-3">Linux</p>
          <p class="my-3">Neovim</p>
          <p class="my-3">Zsh</p>
          <p class="my-3">Git</p>
        </div>
      </div>
    </main>
  );
}
