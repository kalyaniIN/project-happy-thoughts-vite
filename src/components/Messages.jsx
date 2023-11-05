import { useEffect, useState } from "react";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";
export const Messages = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const thoughtsUrl = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  const fetchThoughts = async () => {
    try {
      const response = await fetch(thoughtsUrl);
      if (response.ok) {
        const data = await response.json();
        setMessageList(data);

        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    // The provided code defines an options object used for configuring and customizing an HTTP request, specifically a POST request.

    const options = {
      method: "POST",
      // Headers provide additional information about the request, such as the data format.
      headers: {
        "Content-Type": "application/json",
      },

      // This property contains the data that will be sent with the request. In this specific case, it's sending an object with a description field
      body: JSON.stringify({
        message: newMessage,
      }),
    };

    try {
      const response = await fetch(thoughtsUrl, options);
      if (response.ok) {
        await fetchThoughts();
      }
    } catch (error) {
      console.error(error);
    } finally {
      // cleanup function, setNewMessage string as empty

      setNewMessage("");
    }
  };

  useEffect(() => {
    fetchThoughts();
    console.log("useeffect rendered");
  }, []);

  return (
    <div className="main-wraper">
      <MessageForm
        newMessage={newMessage}
        onNewMessageChange={handleNewMessageChange}
        onFormSubmit={onFormSubmit}
      />
      <MessageList messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
};
