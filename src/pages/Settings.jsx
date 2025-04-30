import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading as="h1">Update hotel settings</Heading>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
