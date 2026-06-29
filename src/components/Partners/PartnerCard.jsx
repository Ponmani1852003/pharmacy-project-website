function PartnerCard({ logo, name }) {
  return (
    <div className="flex items-center justify-center h-24">
      <img
        src={logo}
        alt={name}
        className="max-h-14 max-w-[170px] object-contain transition duration-300 hover:scale-105"
      />
    </div>
  );
}

export default PartnerCard;