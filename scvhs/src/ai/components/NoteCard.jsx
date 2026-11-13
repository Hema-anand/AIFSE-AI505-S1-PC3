function NoteCard() {
  const task = {
    priority: 'Medium',
    title: 'Group Project Discussion',
    description: 'Schedule a meeting with team members to discuss the science project.',
    category: 'Project',
    status: 'yet-to-start'
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-8 py-12">
      <h2 className="text-center text-white text-2xl font-semibold mb-12">
        Checklist Chronicles: Conquering Tasks One Tick at a Time
      </h2>
      
      <div className="bg-[#3a3d41] rounded-lg p-6 border border-[#555]">
        <div className="flex items-start mb-4">
          <span 
            style={{ backgroundColor: '#fbbf24' }} 
            className="w-4 h-4 rounded-full flex-shrink-0 mt-1 mr-3"
          ></span>
          <h3 className="text-white text-xl font-bold">{task.title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 pl-7">
          {task.description}
        </p>
        
        <div className="pl-7 mb-4">
          <p className="text-blue-400">Category: {task.category}</p>
        </div>
        
        <div className="pl-7">
          <span className="text-yellow-400 font-semibold">{task.status}</span>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
