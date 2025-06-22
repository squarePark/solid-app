import { createSignal, createEffect } from 'solid-js';
import './App.css';

function App() {
  const [count, setCount] = createSignal(0);

  const [name, setName] = createSignal('진주');

  createEffect(() => {
    console.log("이름이 바뀌었어요:", name());
  });

  return (
    <>
      <main>
        <h1>Hello World!!</h1>
        <h1>카운터: {count()}</h1>
        <button onClick={() => setCount(count() + 1)}>➕ 증가</button>
        <button onClick={() => setCount(count() - 1)}>➖ 감소</button>
      </main>
      <div>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onInput={(e) => setName(e.target.value)}
        />
        <h2>안녕하세요, {name()}님!</h2>
      </div>
    </>
  )
}

export default App
