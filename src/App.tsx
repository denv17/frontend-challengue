import Button from '@/components/Button/Button';

function App() {

  return (
    <div>
      <h1>React TypeScript Template</h1>
      <Button label="Click me" onClick={() => console.log('Button clicked')} />
    </div>
  )
}

export default App