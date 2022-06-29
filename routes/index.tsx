/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <div class={tw`mt-6`}>
        <button class={tw`mr-4 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}>
          JSON to PHP array
        </button>
        <button class={tw`hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow`}>
          PHP array to JSON
        </button>
      </div>
      <p class={tw`my-6`}>
        Salut
      </p>
      <Counter start={3} />
    </div>
  );
}
