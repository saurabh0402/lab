<script>
  export let todo = {};
  export let toggleTask = () => {};
</script>

<div
  class={todo.done ? 'done' : 'pending'}
  on:click={() => toggleTask(todo.id)}
>
  {todo.text}
</div>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
