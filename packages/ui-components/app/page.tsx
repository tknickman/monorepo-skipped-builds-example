import { Button } from "../components/button";

export default function Page(): JSX.Element {
  return (
    <main>
      UI COMPONENT APPLICATION
      <div>
        <h1>Here is the button</h1>
        <Button message='Hello from the ui-components library'>Click me</Button>
      </div>
    </main>
  );
}
