import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

// function AddCabin() {
//   return (
//     <div>
//       <Modal>
//         <Modal.Open opens="cabin-form">
//           <Button>Add new cabin</Button>
//         </Modal.Open>
//         <Modal.Window name="cabin-form">
//           <CreateCabinForm />
//         </Modal.Window>
//       </Modal>
//     </div>
//   );
// }

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div style={{ marginTop: "10px" }}>
//       <Button
//         variation="primary"
//         size="small"
//         onClick={() => setIsOpenModal((show) => !show)}
//       >
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((show) => !show)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((show) => !show)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button variation="primary">Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button variation="primary">Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
