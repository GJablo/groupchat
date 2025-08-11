import { useState, useEffect, useRef } from 'react'

const ChatRoom = ({ room, messages, user, socket }) => {

  const [chat, setChat] = useState('')
  const [typingUser, setTypingUser] = useState('')
  const msgRef = useRef()

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      msgRef.current.innerHTML
    })
  })

  return (
    <div>

    </div>
  )
}

export default ChatRoom
