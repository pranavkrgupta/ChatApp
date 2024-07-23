const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "asdewq123321",
    chatName: "John Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Alice",
        email: "alice@example.com",
      },
      {
        name: "Bob",
        email: "bob@example.com",
      },
      {
        name: "Eve",
        email: "eve@example.com",
      },
    ],
    _id: "zxcvb987654",
    chatName: "Group Chat",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Smith",
        email: "jane@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
    ],
    _id: "qazwsx456789",
    chatName: "Jane Smith",
  },
];

module.exports = chats;
