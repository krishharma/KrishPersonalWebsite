import { createPortal } from "react-dom";
import PixelTrail from "./PixelTrail/PixelTrail";

const CursorPixelTrail = () =>
  createPortal(
    <PixelTrail
      gridSize={56}
      trailSize={0.06}
      maxAge={180}
      interpolate={4}
      color="#4f7cff"
    />,
    document.body
  );

export default CursorPixelTrail;
