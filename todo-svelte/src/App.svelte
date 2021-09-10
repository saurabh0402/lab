<script>
  import uuid from 'uuid-v4';
  import AddTodo from './components/Todo-form.svelte';
  import Item from './components/Todo-item.svelte';
  import Fallback from './components/Fallback.svelte';

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

  function addToDo(newTodo) {
    todos = [
      ...todos,
      {
        id: uuid(),
        text: newTodo,
        done: false,
      },
    ];
  }
</script>

<div class="container">
  <AddTodo addTodo={addToDo} />
  {#if !todos.length}
    <Fallback />
  {:else}
    {#each todos as todo}
      <Item {todo} {toggleTask} />
    {/each}
  {/if}
</div>
