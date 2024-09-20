import { Card, CardBody } from "@nextui-org/react";

export default function Guestbook() {
  return (
    <Card className="max-w-d mx-auto mt-4">
      <CardBody>
        <h1>Guestbook</h1>
        <p>Leave a message for the owner of this guestbook.</p>
      </CardBody>
    </Card>
  );
}
