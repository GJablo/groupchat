import { useEffect, useState } from 'react'
import { getRooms, socket, getRoomMessages } from '../services/api'
import ChatRoom from '../components/ChatRoom'

const Home = ({ user }) => {

  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchRooms();
    socket.connect();
    return () => socket.disconnect();
  }, []);

  const fetchRooms = async () => {
    const res = await getRooms();
    setRooms(res.data);
  };

  const handleJoinRoom = async (room) => {
    socket.emit('joinRoom', { username: user.username, roomId: room._id });
    setCurrentRoom(room);
    const res = await getRoomMessages(room._id);
    setMessages(res.data);
  }

  return (
    <div className='flex h-screen'>
      <aside className='w-1/4 bg-gray-800 text-white p-4'>
        <h2 className='text-lg mb-2'>Rooms</h2>
        <ul>
          {rooms.map((room) => {
            <li key={room._id} className='mb-2'>
              <button onClick={() => handleJoinRoom(room)} className='w-full bg-gray-700 p-2 rounded hover:bg-gray-600'>{room.name}</button>
            </li>
          })}
        </ul>
      </aside>

      <main className='flex-1 p-4'>
        {currentRoom ? (
          <ChatRoom room={currentRoom} messages={messages} user={user} socket={socket} />
        ) : (
          <p>Select a room to Join</p>
        )}
      </main>
    </div>
  )
}

export default Home
