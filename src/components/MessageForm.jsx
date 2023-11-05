export const MessageForm = ({
  newMessage,
  onNewMessageChange,
  onFormSubmit,
}) => {
  return (
    <div>
      <h1 id="project-name">Project Happy Thoughts</h1>
      <h2 id="creator">Made by Kalyani Ramidi</h2>
      <div className="post-wraper">
        <form onSubmit={onFormSubmit}>
          <h2>What is making you happy right now?</h2>
          <textarea
            rows="3"
            placeholder="'If music be the food of love, play on.' – William Shakespeare"
            maxLength="140"
            value={newMessage}
            onChange={onNewMessageChange}
          />
          <div className="post-length">
            <p className="post-count"> {newMessage.length} / 140</p>
          </div>
          <button id="post-wraper-btn" type="submit">
            <span className="emoji" aria-label="heart emoji">
              ❤️
            </span>
            Send Happy Thought
            <span className="emoji" aria-label="heart emoji">
              ❤️
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};
