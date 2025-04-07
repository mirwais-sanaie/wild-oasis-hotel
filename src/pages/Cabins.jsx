import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabnis } from "../services/apiCabnis";

function Cabins() {
  useEffect(function () {
    async function fetchCabins() {
      const cabins = await getCabnis();
      console.log(cabins);
    }

    fetchCabins();
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>

      <img
        src="https://osfmvsupwczeqnlzjtcv.supabase.co/storage/v1/object/public/cabin-image//cabin-001.jpg"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
