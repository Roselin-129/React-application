
// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App 






import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Posts Dashboard</h1>

        <p style={styles.subtitle}>
          Explore and read all your posts in one place.
        </p>

        <div style={styles.summary}>
          <span>Total Posts</span>
          <h2>{posts.length}</h2>
        </div>

        {loading && <p style={styles.message}>Loading posts...</p>}

        {error && <p style={styles.error}>{error}</p>}

        {!loading && !error && (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.header}>User ID</th>
                  <th style={styles.header}>Post ID</th>
                  <th style={styles.header}>Title</th>
                  <th style={styles.header}>Description</th>
                </tr>
              </thead>

              <tbody>
                {posts.map((post, index) => (
                  <tr
                    key={post.id}
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? '#ffffff' : '#f5f5f5'
                    }}
                  >
                    <td style={styles.cell}>
                      <span style={styles.badge}>{post.userId}</span>
                    </td>

                    <td style={styles.cell}>{post.id}</td>

                    <td style={styles.titleCell}>{post.title}</td>

                    <td style={styles.cell}>{post.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#ffffff',
    color: '#000000'
  },

  container: {
    width: '100%',
    margin: '0 auto'
  },

  heading: {
    fontSize: '28px',
    color: '#000000'
  },

  subtitle: {
    color: '#333333',
    marginBottom: '20px'
  },

  summary: {
    backgroundColor: '#eeeeee',
    color: '#000000',
    padding: '10px',
    marginBottom: '20px',
    width: '150px',
    border: '1px solid #cccccc'
  },

  tableContainer: {
    overflowX: 'auto'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left'
  },

  header: {
    backgroundColor: '#eeeeee',
    color: '#000000',
    padding: '10px',
    border: '1px solid #000000'
  },

  cell: {
    padding: '10px',
    color: '#000000',
    border: '1px solid #cccccc'
  },

  titleCell: {
    padding: '10px',
    color: '#000000',
    border: '1px solid #cccccc',
    fontWeight: 'bold'
  },

  badge: {
    backgroundColor: '#eeeeee',
    color: '#000000',
    padding: '3px 6px'
  },

  message: {
    color: '#000000'
  },

  error: {
    color: '#000000',
    padding: '10px',
    border: '1px solid #cccccc'
  }
};

export default App;