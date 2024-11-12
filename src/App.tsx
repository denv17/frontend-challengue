import Button from "@/components/Button/Button";

function App() {
  return (
    <div>
      <Button
        label="Seleccionar Plan"
        variant="primary"
        onClick={() => console.log("Button clicked")}
      />
      <Button
        label="Cotiza aquí"
        size="lg"
        onClick={() => console.log("Button clicked")}
      />
    </div>
  );
}

export default App;
