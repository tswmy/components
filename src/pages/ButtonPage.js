import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button success rounded onClick={handleClick}>
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger>Hi there!</Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Do something!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary>Something</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
