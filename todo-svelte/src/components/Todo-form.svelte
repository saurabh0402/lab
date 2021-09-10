<script>
  export let addTodo = () => {};
  let newTodo = '';

  function handleTodo() {
    if (!newTodo) {
      return;
    }

    addTodo(newTodo);
    newTodo = '';
  }
</script>

<div>
  <input type="text" bind:value={newTodo} placeholder="I want to do this" />
  <button on:click|preventDefault={handleTodo}>Add To Do</button>
</div>
