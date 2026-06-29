import { Link } from "react-router-dom";
import { ChevronRight, House } from "lucide-react";

const FeedbackHeader = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-8 pb-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-3 text-[14px]">

        <Link
          to="/"
          className="flex items-center gap-2 text-[#27C7A8] hover:text-[#1EB89A] transition"
        >
          <House size={15} strokeWidth={2} />
          <span>Home</span>
        </Link>

        <ChevronRight
          size={14}
          className="text-[#C7CED9]"
        />

        <span className="text-[#B3BAC6]">
          Customer Reviews
        </span>

      </div>

      {/* Title */}

      <h1 className="mt-4 text-[52px] leading-[60px] font-bold text-[#2E3A59]">
        Customer Reviews
      </h1>

    </section>
  );
};

export default FeedbackHeader;