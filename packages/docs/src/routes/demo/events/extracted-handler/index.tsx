import { component$, useSignal, $ } from '@builder.io/qwik';

export default component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>Increment</button>
      <div>Count: {count.value}</div>
    </>
  );
});
