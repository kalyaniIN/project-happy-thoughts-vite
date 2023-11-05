import { formatDistance } from "date-fns";
export const MessageList = ({ loading, messageList, setMessageList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }
  const handleLikeThought = (thoughtId) => {
    // Find the thought with the specified ID in the messageList
    const updatedMessageList = messageList.map((thought) => {
      if (thought._id === thoughtId) {
        // Increase the number of likes (hearts) for the specific thought
        return {
          ...thought,
          hearts: thought.hearts + 1,
        };
      }
      return thought;
    });

    // Update the state to reflect the change
    setMessageList(updatedMessageList);
  };

  // Sort the messageList in reverse chronological order (newest first)
  const sortedMessageList = messageList
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="list-wraper">
      {sortedMessageList.slice(0, 20).map((thought) => (
        <div key={thought._id} className="message">
          <p>{thought.message}</p>

          <div className="info-wraper">
            <div className="info-like">
              <button
                className="like-button"
                onClick={() => handleLikeThought(thought._id)}
              >
                <span className="emoji" aria-label="heart emoji">
                  ❤️
                </span>
              </button>
              <span className="num-likes"> X {thought.hearts}</span>
            </div>
            <div className="info-time">
              {formatDistance(new Date(thought.createdAt), Date.now())} ago
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
