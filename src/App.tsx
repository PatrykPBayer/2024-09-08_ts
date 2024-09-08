import { Button } from "./components/Button/Button";
import { EmailInput } from "./components/Button/EmailInput/EmailInput";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  const showEmail = (email: string) => {
    console.log(email);
  };

  return (
    <main>
      <Button
        label="button primary"
        variant="primary"
        onButtonClick={handleClick}
      />
      <Button
        label="button secondary"
        variant="secondary"
        onButtonClick={handleClick}
      />
      <Button
        label="button ghost"
        variant="ghost"
        onButtonClick={handleClick}
      />
      <br />
      <EmailInput placeholder="E-Mail" onEmailChange={showEmail} />
    </main>
  );
}

export default App;
