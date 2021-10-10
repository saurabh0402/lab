<script>
  export let list = [];
  export let title = 'TO DO';
  export let fallbackTitle = 'Nothing To Do 🎉';
  export let toggleTask = () => {};
  export let deleteTask = () => {};

  import Item from './Todo-item.svelte';
  import Card from '@smui/card';
</script>

<div class="list-container">
  <Card padded variant="outlined">
    <div class="title">{title}</div>
    {#if list.length}
      {#each list as todo (todo.id)}
        <Item {todo} {toggleTask} {deleteTask} />
      {/each}
    {:else}
      {fallbackTitle}
    {/if}
  </Card>
</div>

<style>
  .list-container {
    margin-bottom: 1.5rem;
  }

  .title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
</style>
