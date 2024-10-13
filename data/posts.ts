import { Post } from "@/types/posts";

const posts: Post[] = [
    {
      id: '1',
      title: 'Exploring Quantum Computing',
      body: 'Quantum computing represents a significant shift from classical computing, utilizing the principles of quantum mechanics...',
      author: 'Alice Smith',
      date: '2024-06-15',
      comments: [
        { id: '1', text: 'Fascinating subject! Can’t wait to learn more.', username: 'Bob' },
        { id: '2', text: 'This could change the entire tech landscape.', username: 'Charlie' },
      ],
    },
    {
      id: '2',
      title: 'Understanding Blockchain Technology',
      body: 'Blockchain is a decentralized digital ledger that records transactions across multiple computers in a way that is secure and transparent...',
      author: 'David Johnson',
      date: '2024-07-22',
      comments: [
        { id: '1', text: 'Well explained! Blockchain has a lot of potential.', username: 'Eve' },
        { id: '2', text: 'I’m curious to see how blockchain evolves in the coming years.', username: 'Frank' },
      ],
    },
    {
      id: '3',
      title: 'The Future of Renewable Energy',
      body: 'With climate change becoming an increasingly urgent issue, renewable energy sources such as solar and wind power are critical to a sustainable future...',
      author: 'Emily Davis',
      date: '2024-08-10',
      comments: [
        { id: '1', text: 'Renewable energy is the future! Excellent article.', username: 'Grace' },
        { id: '2', text: 'More people need to be aware of the benefits of renewable energy.', username: 'Hank' },
      ],
    },
    {
      id: '4',
      title: 'The Impact of 5G Technology',
      body: '5G networks promise to deliver faster speeds, lower latency, and more reliable connections, revolutionizing industries such as healthcare, automotive, and entertainment...',
      author: 'Sophia Turner',
      date: '2024-03-05',
      comments: [
        { id: '1', text: '5G is going to reshape the world!', username: 'Isaac' },
        { id: '2', text: 'Can’t wait for wider adoption.', username: 'Julia' },
      ],
    },
    {
      id: '5',
      title: 'Augmented Reality: The Next Big Thing',
      body: 'Augmented reality (AR) overlays digital information on the physical world, offering new possibilities in education, gaming, and real estate...',
      author: 'Mark Wilson',
      date: '2024-09-01',
      comments: [
        { id: '1', text: 'AR could be bigger than VR!', username: 'Kevin' },
        { id: '2', text: 'Amazing potential for education.', username: 'Lily' },
      ],
    },
    {
      id: '6',
      title: 'The Role of Big Data in Healthcare',
      body: 'Big data is transforming the healthcare industry by providing valuable insights, improving patient care, and reducing costs...',
      author: 'Natalie Brown',
      date: '2024-04-12',
      comments: [
        { id: '1', text: 'Data is the key to modern healthcare.', username: 'Matt' },
        { id: '2', text: 'Interesting take on how data saves lives.', username: 'Olivia' },
      ],
    },
    {
      id: '7',
      title: 'Cybersecurity in the Age of AI',
      body: 'As AI becomes more integrated into our digital infrastructure, it also introduces new vulnerabilities and threats that need to be addressed...',
      author: 'Robert King',
      date: '2024-02-18',
      comments: [
        { id: '1', text: 'Cybersecurity is more important than ever.', username: 'Nina' },
        { id: '2', text: 'AI brings both opportunities and risks.', username: 'Paul' },
      ],
    },
    {
      id: '8',
      title: 'Space Exploration: What’s Next?',
      body: 'Space exploration has entered a new era with private companies like SpaceX leading the charge, but what’s next in our journey to the stars?',
      author: 'Catherine White',
      date: '2024-10-04',
      comments: [
        { id: '1', text: 'The final frontier is closer than we think!', username: 'Quincy' },
        { id: '2', text: 'Looking forward to Mars missions!', username: 'Riley' },
      ],
    },
    {
      id: '9',
      title: 'The Ethics of Artificial Intelligence',
      body: 'As AI becomes more capable, ethical concerns about privacy, job displacement, and decision-making arise. How do we ensure AI works for everyone?',
      author: 'Emma Green',
      date: '2024-11-01',
      comments: [
        { id: '1', text: 'This is the most important discussion around AI.', username: 'Sam' },
        { id: '2', text: 'We need clear guidelines for AI ethics.', username: 'Tina' },
      ],
    },
    {
      id: '10',
      title: 'The Rise of Electric Vehicles',
      body: 'Electric vehicles (EVs) are becoming increasingly popular as they offer a cleaner and more sustainable alternative to traditional gas-powered cars...',
      author: 'Michael Lee',
      date: '2024-01-10',
      comments: [
        { id: '1', text: 'EVs are the future of transportation.', username: 'Uma' },
        { id: '2', text: 'More charging stations are needed!', username: 'Victor' },
      ],
    },
  ];
  

  export default posts;