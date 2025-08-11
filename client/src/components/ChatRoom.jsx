import { useState, useEffect, useRef } from 'react'

const ChatRoom = ({ room, messages, user, socket }) => {

  const [chat, setChat] = useState('')
  const [typingUser, setTypingUser] = useState('')
  const msgRef = useRef()

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      msgRef.current.innerHTML += <p><strong>${msg.sender.username}</strong>: ${msg.content}</p>
    });
    socket.on('typing', (username) => {
      setTypingUser(username)
    });
    socket.on('stopTyping', () => {
      setTypingUser('')
    });
    return () => {
      socket.off('newMessage')
      socket.off('typing')
      socket.off('stopTyping')
    }
  }, []);

  const handleTyping = () => {
    socket.emit('typing');
    setTimeout(() => socket.emit('stopTyping'), 1000);
  }
  const handleSend = () => {
    socket.emit('sendMessage', chat);
    setChat('')
  }

  return (
    <div>
      <h2 className='text-2xl mb-2'>{room.name}</h2>
      <div className='h-64 overflow-y-auto border mb-2 bg-gray-50' ref={msgRef}>
        {messages.map((msg) => (
          <p key={msg._id}>
            <strong>{msg.sender.username}:</strong> {msg.content}
          </p>
        ))}
      </div>

      <div className='text-sm text-gray-600 mb-2'>
        {typingUser && `${typingUser} is typing...`}
      </div>

      <div className='flex gap-2'>
        <input
          className='flex-l p-2 border rounded'
          value={chat}
          onChange={(e) => setChat(e.target.value)}
          onKeyDown={handleTyping}
          placeholder='Type a message...'
         />

         <button className='bg-green-500 text-white px-4 rounded' onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom
