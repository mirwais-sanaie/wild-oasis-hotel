import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>
          <span>filter</span>/<span>sort</span>
        </p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
      <Row>
        <Button
          onClick={() => setShowForm(!showForm)}
          variation="primary"
          size="small"
        >
          {showForm ? "Hide form" : "Create new cabin"}
        </Button>
      </Row>
      <Row>{showForm && <CreateCabinForm />}</Row>
    </>
  );
}

export default Cabins;
