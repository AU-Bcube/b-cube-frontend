import Image from "next/image";

interface ContactItemProps {
  title: string;
  value: string;
  svg: any;
}

export default function ContactItem({
  title,
  value,
  svg,
}: ContactItemProps) {
  return (
    <div className="flex w-full rounded-[20px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] p-px">
      <div className="flex md:flex-col flex-row w-full items-center justify-between bg-[#101C35] gap-2 md:p-10 p-8 px-6 rounded-[20px] h-full">
        <div className="flex md:flex-col flex-row items-center md:gap-6 gap-4">
          <div
            className="md:w-[82px] w-[30px] aspect-square"
          >
            <Image src={svg} alt={`${title} logo`} />
          </div>
          <h6 className="text-[16px] font-bold text-center bg-gradient-to-r from-[#7380B0] to-[#518CFF] bg-clip-text text-transparent">
            {title}
          </h6>
        </div>
        <p className="md:text-lg text-sm font-semibold text-center text-[#f6f6f7]">
          {value}
        </p>
      </div>
    </div>
  );
}
