<script>
  export let title;
  export let description;
  export let url;
  export let background;
  const classList =
    "w-full md:w-40 m-4 p-2 md:h-40 outline-1 outline-dashed " + background;
</script>

{#if url}
  <a href={url} class={classList}>
    <p class="text-lg mb-2">{title}</p>
    <p class="text-sm">{description}</p>
  </a>
{:else}
  <div class={classList}>
    <p class="text-lg mb-2">{title}</p>
    <p class="text-sm">{description}</p>
  </div>
{/if}
