import AddCabin from "../features/cabins/AddCabin";
import CabinTable from "../features/cabins/CabinTable";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
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
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
