const InfoCard = ({ data }) => {
  const { label, value, icon, bgColor, color } = data;
  return (
    <div className="flex sm:justify-center items-center gap-x-8 px-8 py-4 sm:p-4 rounded-lg bg-white">
      <div className={`${bgColor} ${color} p-3 text-lg rounded-full`}>
        {icon}
      </div>
      <div className="flex sm:block w-full justify-between items-center font-content">
        <h2 className="text-lg md:text-2xl font-bold tracking-wider">
          {value}
        </h2>
        <h3 className="text-base text-gray-500 tracking-wider">{label}</h3>
      </div>
    </div>
  );
};
export default InfoCard;
