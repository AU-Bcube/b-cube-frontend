interface CardProps {
  title: string;
  content: string | JSX.Element;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="flex w-full rounded-[20px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] p-px">
      <div className="flex flex-col w-full justify-start items-start bg-[#101C35] md:gap-6 gap-4 md:p-9 p-8 rounded-[20px] h-full">
        <h3 className="text-[20px] md:text-[22px] font-bold text-left text-[#f6f6f7]">{title}</h3>
        <p className="md:text-base text-sm font-medium text-left text-[#f6f6f7] leading-[30px]">
          {content}
        </p>
      </div>
    </div>
  );
}
