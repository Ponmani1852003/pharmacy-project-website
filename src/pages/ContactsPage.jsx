import Breadcrumb from "../components/Breadcrumb.jsx";
import ContactInfo from "../components/ContactInfo/ContactInfo.jsx";
import DirectionsMap from "../components/DirectionsMap/DirectionsMap.jsx";
import PartnersInfo from "../components/PartnersInfo/PartnersInfo.jsx";

export default function ContactsPage() {
  return (
    <>
      <Breadcrumb trail={["Home", "Contacts"]} />
      <ContactInfo />
      <DirectionsMap />
      <PartnersInfo />
    </>
  );
}
