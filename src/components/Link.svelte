<script lang="ts">
  export let name: string;
  export let to: `http${"s" | ""}://${string}`;
</script>

<button on:click={() => window.open(to)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <slot />
  </svg>
  <p class="font-bold text-2xl">{name}</p>
</button>

<style lang="postcss">
  button {
    @apply border-2 border-slate-400 bg-slate-800 hover:bg-slate-700;
    @apply p-3 transition-all rounded-lg flex flex-row gap-2 cursor-pointer select-none;
  }
</style>
