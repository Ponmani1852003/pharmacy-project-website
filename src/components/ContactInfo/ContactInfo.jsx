import OfficeDetails from "./OfficeDetails";
import SocialLinks from "./SocialLinks";
import Requisites from "./Requisites";
import CallbackForm from "./CallbackForm";

function ContactInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
        Contacts
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr] gap-8 items-start">
        <OfficeDetails />
        <SocialLinks />
        <Requisites />
        <CallbackForm />
      </div>
    </section>
  );
}

export default ContactInfo;
