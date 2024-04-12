import { Button } from "@repo/ui-components/button";


export default function Page(): JSX.Element {
  return (
    <main>
      BLOG APP
      <div>
        <h1>Here is the button from UI</h1>
        <Button message={'hello from blog'}>Click me</Button>
      </div>
    </main>
  );
}
