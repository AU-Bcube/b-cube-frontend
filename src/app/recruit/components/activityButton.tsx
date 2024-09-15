interface ActivityButtonProps {
  activity: string;
  selected: boolean;
  onClick: () => void;
}

export default function ActivityButton({
  activity,
  selected,
  onClick,
}: ActivityButtonProps) {
  return (
    <button
      className={`flex justify-center items-center px-12 py-4 sm:px-8 sm:py-3 px-6 py-2 rounded-[100px] ${
        selected
          ? "text-[#14439f] bg-white"
          : "bg-[#7380b0]/5 border-[#191f35] text-[#7380b0]"
      } w-auto min-w-[100px] sm:min-w-[80px] min-w-[60px] whitespace-nowrap`}
      onClick={onClick}
    >
      <p className="text-xl sm:text-lg text-md font-semibold text-center whitespace-nowrap">
        {activity}
      </p>
    </button>
  );
}