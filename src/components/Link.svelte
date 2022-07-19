<script lang="ts">
  export let name: string = "";
  export let to: `http${"s" | ""}://${string}`;
</script>

<a href={to} target="_blank" rel="noopener" {...$$restProps}>
  <slot />

  {#if name}
    <p class="font-bold text-2xl">{name}</p>
  {/if}
</a>

<style lang="postcss">
  a {
    @apply border-2 border-slate-400 bg-slate-800 hover:bg-slate-700;
    @apply p-3 transition-all rounded-lg flex flex-row gap-2 cursor-pointer select-none;
  }
</style>
