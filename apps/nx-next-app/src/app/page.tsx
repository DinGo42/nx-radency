import { Card } from "../widgets";

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <Card
      title={"Task name"}
      description={"Task description should be unambiguous,accurate, factual"}
      createdAt={new Date()}
      priority={"Medium"}
    />
  );
}
