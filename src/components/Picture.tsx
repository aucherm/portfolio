export default function Picture () {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="bg-white p-3 pb-12 shadow-xl -rotate-3 hover:rotate-0 transition-transform duration-300">
        <img 
          src="/me.jpg" 
          alt="Photo" 
          className="w-64 h-64 object-cover"
        />
      </div>
    </div>
  );
};

