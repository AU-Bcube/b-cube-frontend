interface CardProps {
  title: string;
  content: JSX.Element[];
}

export default function BigCard({ title, content }: CardProps) {
  return (
    <div className="flex w-full rounded-[20px] bg-gradient-to-r from-[#7380B0] to-[#518CFF] p-px">
      <div className="flex flex-col md:flex-row w-full justify-start items-start bg-[#101C35] md:gap-6 gap-4 md:p-10 p-8 rounded-[20px] h-full">
        <h3 className="text-[20px] md:text-[22px] font-bold text-left text-[#f6f6f7] md:min-w-[317px]">{title}</h3>
        <ol className="flex flex-col gap-3">
          {content.map((item, index) => (
            <li className='md:text-base text-sm md:leading-7 leading-6' key={index}>{item}</li>
          )
          )}
        </ol>
      </div>
    </div>
  );
}
