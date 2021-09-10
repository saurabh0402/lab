<script>
  import Card from '@smui/card';
  export let todo = {};
  export let toggleTask = () => {};
</script>

<Card padded variant="outlined">
  <div
    class={`todo-item ${todo.done ? 'done' : 'pending'}`}
    on:click={() => toggleTask(todo.id)}
  >
    {todo.text}
  </div>
</Card>

<style>
  .todo-item {
    font-size: 1.3rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>
