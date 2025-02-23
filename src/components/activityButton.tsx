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
      className={`flex justify-center items-center md:px-8 md:py-4 px-5 py-3 rounded-[100px] ${
        selected
          ? "text-[#14439f] bg-white border border-white"
          : "bg-[#7380b0]/5 border border-[#191f35] text-[#7380b0]"}`}
      onClick={onClick}
    >
      <p className="text-sm md:text-lg font-semibold text-center whitespace-nowrap">
        {activity}
      </p>
    </button>
  );
}
