<script>
  import Card from '@smui/card';
  import Fab, { Icon } from '@smui/fab';
  export let todo = {};
  export let toggleTask = () => {};
  export let deleteTask = () => {};
</script>

<div class="item-container">
  <Card padded variant="outlined">
    <div class="item-flex">
      <div
        class={`todo-item ${todo.done ? 'done' : 'pending'}`}
        on:click={() => toggleTask(todo.id)}
      >
        {todo.text}
      </div>
      <Fab mini color="error" on:click={() => deleteTask(todo.id)}>
        <Icon class="material-icons">delete</Icon>
      </Fab>
    </div>
  </Card>
</div>

<style>
  .item-flex {
    display: flex;
    align-items: center;
  }
  .item-container {
    text-align: left;
    margin: 0.2rem 0;
  }

  .todo-item {
    font-size: 1.2rem;
    flex: 1;
  }

  .done {
    text-decoration: line-through;
  }
</style>
