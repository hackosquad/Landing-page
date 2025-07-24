import  { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase"; 

interface Message {
  id: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
}

const db = getFirestore(app);
const auth = getAuth(app);

const formatDate = (timestamp?: { seconds: number; nanoseconds: number }) => {
  if (!timestamp) return "N/A";
  const date = new Date(timestamp.seconds * 1000);
  return date.toLocaleString();
};

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "contactMessages"));
      const fetchedMessages: Message[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/loginmessages"); 
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500">Messages</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-[#1a1a1a] p-4 rounded-xl shadow-md border border-red-600">
            <p className="text-lg font-semibold text-white">{msg.email}</p>
            <p className="text-sm text-gray-400">🕒 {formatDate(msg.createdAt)}</p>
            <button
              onClick={() => setSelectedMessage(msg)}
              className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              View in detail
            </button>
          </div>
        ))}
      </div>

      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-[#111] p-6 rounded-xl border border-red-600 max-w-md w-full relative">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Message Details</h2>
            <div className="mb-2">
              <h3 className="text-sm text-gray-400">Email</h3>
              <p className="text-white">{selectedMessage.email}</p>
            </div>
            <div className="mb-2">
              <h3 className="text-sm text-gray-400">Subject</h3>
              <p className="text-white">{selectedMessage.subject}</p>
            </div>
            <div className="mb-2">
              <h3 className="text-sm text-gray-400">Message</h3>
              <p className="text-white">{selectedMessage.message}</p>
            </div>
            <div>
              <h3 className="text-sm text-gray-400">Submitted At</h3>
              <p className="text-white">{formatDate(selectedMessage.createdAt)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
