interface CardProps {
  title: string;
  content: string[];
}

export default function Card({ title, content }: CardProps) {
  return (
    <div className="w-80 h-100 font-quicksand">
      <div className="relative w-full h-full text-center">
        {/* Front */}
        <div className="absolute flex flex-col w-full h-full shadow-lg text-grey rounded-lg p-4">
          <p className="text-2xl font-audiowide font-black text-center m-0 p-8">
            {title}
          </p>
          <ul className="list-disc list-inside text-left space-y-1">
            {content.map((item, index) => (
              <li key={index} className="text-l">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}