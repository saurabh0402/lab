<script>
  import Button from '@smui/button';
  import TextField from '@smui/textfield';
  import Card from '@smui/card';

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

<div class="form-container">
  <Card padded variant="outlined">
    <div class="input">
      <TextField
        variant="outlined"
        bind:value={newTodo}
        label="I want to"
        color="secondary"
        style="width: 100%"
      />
    </div>
    <Button on:click={handleTodo} color="secondary" variant="unelevated"
      >Add To Do</Button
    >
  </Card>
</div>

<style>
  .input {
    margin-bottom: 1rem;
  }
</style>
