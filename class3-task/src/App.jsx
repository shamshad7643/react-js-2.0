import React from 'react'

import Cards from './components/Card';
const App = () => {

 const users = [
  {
    fullName: "Diana Prince",
    title: "Wonder Woman",
    profile: "https://i.pravatar.cc/150?img=11",
    coverImage: "https://picsum.photos/400/200?random=1",
    likesCount: 18200,
    postCount: 390,
    viewsCount: 1450000,
    followed: true
  },
  {
    fullName: "Logan Howlett",
    title: "Wolverine",
    profile: "https://i.pravatar.cc/150?img=12",
    coverImage: "https://picsum.photos/400/200?random=2",
    likesCount: 13400,
    postCount: 310,
    viewsCount: 870000,
    followed: false
  },
  {
    fullName: "Arthur Curry",
    title: "Aquaman",
    profile: "https://i.pravatar.cc/150?img=13",
    coverImage: "https://picsum.photos/400/200?random=3",
    likesCount: 15600,
    postCount: 275,
    viewsCount: 990000,
    followed: true
  },
  {
    fullName: "Selina Kyle",
    title: "Catwoman",
    profile: "https://i.pravatar.cc/150?img=14",
    coverImage: "https://picsum.photos/400/200?random=4",
    likesCount: 11200,
    postCount: 240,
    viewsCount: 720000,
    followed: false
  },
  {
    fullName: "Stephen Strange",
    title: "Doctor Strange",
    profile: "https://i.pravatar.cc/150?img=15",
    coverImage: "https://picsum.photos/400/200?random=5",
    likesCount: 17800,
    postCount: 410,
    viewsCount: 1320000,
    followed: true
  },
  {
    fullName: "Jean Grey",
    title: "Dark Phoenix",
    profile: "https://i.pravatar.cc/150?img=16",
    coverImage: "https://picsum.photos/400/200?random=6",
    likesCount: 14900,
    postCount: 295,
    viewsCount: 880000,
    followed: false
  },
  {
    fullName: "Scott Lang",
    title: "Ant-Man",
    profile: "https://i.pravatar.cc/150?img=17",
    coverImage: "https://picsum.photos/400/200?random=7",
    likesCount: 9700,
    postCount: 180,
    viewsCount: 540000,
    followed: true
  },
  {
    fullName: "Bruce Banner",
    title: "Hulk",
    profile: "https://i.pravatar.cc/150?img=18",
    coverImage: "https://picsum.photos/400/200?random=8",
    likesCount: 20100,
    postCount: 460,
    viewsCount: 1680000,
    followed: true
  }
];

   return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap gap-6 justify-center p-6">
      {users.map((elem, index) => (
        <Cards key={index} user={elem} />
      ))}
    </div>
  )
}

export default App