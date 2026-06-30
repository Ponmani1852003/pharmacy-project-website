function PartnerCard({ logo, name }) {
  return (
    <div className="flex items-center justify-center w-full md:basis-full md:shrink-0 h-20 sm:h-24">
      <img
        src={logo}
        alt={name}
        className="max-h-10 sm:max-h-14 max-w-[120px] sm:max-w-[170px] object-contain mx-auto transition duration-300 hover:scale-105"
      />
    </div>
  );
}

export default PartnerCard;