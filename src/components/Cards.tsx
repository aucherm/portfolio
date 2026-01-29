interface CardProps {
  title: string;
  content: string;
}

export default function Cards({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb- font-audiowide">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {content}
      </p>
    </div>
  );
}