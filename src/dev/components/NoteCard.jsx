function NoteCard() {
  const priorityStyle = {
    backgroundColor: "#ffd43b",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    display: "inline-block",
  };

  const noteTitle = "Group Project Discussion";
  const description =
    "Schedule a meeting with team members to discuss the science project.";
  const category = "Project";
  const status = "yet-to-start";

  return (
    <div className="w-full max-w-2xl mx-auto px-8 py-12">
      <h2 className="text-center text-white text-xl font-semibold mb-12">
        Checklist Chronicles: Conquering Tasks One Tick at a Time
      </h2>
      <div className="mx-auto w-full max-w-sm bg-[#242629] border border-[#303238] rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <span style={{ ...priorityStyle }}></span>
          <h3 className="text-base font-semibold">{noteTitle}</h3>
        </div>

        <p className="text-sm text-gray-300 mb-4">{description}</p>

        <p className="text-sm text-[#4f7da5] mb-6">Category: {category}</p>

        <p className="text-sm font-semibold text-[#ffd43b]">{status}</p>
      </div>
    </div>
  );
}

export default NoteCard;
