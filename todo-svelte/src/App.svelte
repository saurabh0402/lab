<script>
  import uuid from 'uuid-v4';

  let newTodo = '';
  $: todos = [];

  function toggleTask(id) {
    todos = todos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        done: !todo.done,
      };
    });
  }

  function addToDo() {
    todos = [
      ...todos,
      {
        id: uuid(),
        text: newTodo,
        done: false,
      },
    ];

    newTodo = '';
  }
</script>

<div>
  <input type="text" bind:value={newTodo} placeholder="I want to do this" />
  <button on:click|preventDefault={addToDo}>Add To Do</button>
</div>
{#if !todos.length}
  <h3>Let's do something awesome!</h3>
{:else}
  {#each todos as todo}
    <div
      class={todo.done ? 'done' : 'pending'}
      on:click={() => toggleTask(todo.id)}
    >
      {todo.text}
    </div>
  {/each}
{/if}

<style>
  .done {
    text-decoration: line-through;
  }
</style>
