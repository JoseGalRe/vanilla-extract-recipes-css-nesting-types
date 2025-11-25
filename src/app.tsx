import { styles } from "./app.css.ts";

function App() {
  return (
    <div className={styles()}>
      <div className="nesting-class">
        <h1>Hello Vanilla Extract Recipes CSS Nesting Types</h1>
        <p>This is a simple React application using Vanilla Extract with Recipes and CSS Nesting.</p>
      </div>
    </div>
  );
}

export default App;
