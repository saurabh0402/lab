<script>
  import 'svelte-material-ui/bare.css';
  import uuid from 'uuid-v4';
  import AddTodo from './components/Todo-form.svelte';
  import TodoList from './components/Item-list.svelte';
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

  function deleteTask(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }
</script>

<div class="container">
  <div class="form">
    <AddTodo addTodo={addToDo} />
  </div>
  <div class="body">
    {#if !todos.length}
      <Fallback />
    {:else}
      <TodoList
        {toggleTask}
        {deleteTask}
        list={todos.filter((todo) => !todo.done)}
      />
      <TodoList
        {toggleTask}
        {deleteTask}
        list={todos.filter((todo) => todo.done)}
        title="DONE"
        fallbackTitle="Nothing Done yet 😢"
      />
    {/if}
  </div>
</div>

<style>
  .container {
    margin: 1rem;
    text-align: center;
    font-family: 'Roboto';
    word-wrap: break-word;
  }

  .form {
    width: 600px;
    margin: 0 auto;
  }

  .body {
    width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
