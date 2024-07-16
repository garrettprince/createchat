import { useRive } from "@rive-app/react-canvas-lite";

export default function RiveTest() {
  const { rive, RiveComponent } = useRive({
    src: "circle2.riv",
    // stateMachines: "bumpy",
    autoplay: true,
  });

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}
