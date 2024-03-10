const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src={
              "https://gravatar.com/avatar/302bc17a4c04d211cde42a975b31faec?s=400&d=robohash&r=x"
            }
            alt="Tailwind CSS chat bubble component"
          />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>Hi! What is up?</div>
      <div className={"chat-footer opacity-50 text-xs flex gap-1 items-center"}>12:42</div>
    </div>
  );
};
export default Message;
