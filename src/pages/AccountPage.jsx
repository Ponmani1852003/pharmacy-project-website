import Breadcrumb from "../components/Breadcrumb.jsx";
import AccountSidebar from "../components/AccountSidebar/AccountSidebar.jsx";
import PersonalDataForm from "../components/PersonalDataForm/PersonalDataForm.jsx";
import OrdersList from "../components/OrdersList/OrdersList.jsx";
import FeedbackForm from "../components/FeedbackForm/FeedbackForm.jsx";

export default function AccountPage() {
  return (
    <>
      <Breadcrumb trail={["Home", "My Account"]} />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">My Account</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <AccountSidebar />

          <div className="flex-1 min-w-0 space-y-14">
            <PersonalDataForm />
            <OrdersList />
            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
