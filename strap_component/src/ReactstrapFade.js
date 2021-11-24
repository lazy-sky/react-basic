import { useState } from "react";
import { Button, Fade } from "reactstrap";

const ReactstrapFade = () => {
  const [fadeInout, setFadeInout] = useState(false);

  const toggle = (e) => {
    setFadeInout(!fadeInout);
  };

  return (
    <div>
      <Button color="success" onClick={toggle}>
        In / Out
      </Button>
      <Fade in={fadeInout} tag="h1">
        Fade In ...
      </Fade>
    </div>
  );
};

export default ReactstrapFade;