import Breadcrumb from "../components/Breadcrumb.jsx";
import LicenseSection from "../components/LicenseSection.jsx";

export default function LicensePage() {
  return (
    <>
      <Breadcrumb trail={["Home", "Our License"]} />
      <LicenseSection />
    </>
  );
}
