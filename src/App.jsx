
// // // import { useState } from 'react'
// // // import heroImg from './assets/hero.png'
// // // import reactLogo from './assets/react.svg'
// // // import viteLogo from './assets/vite.svg'
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <section id="center">
// // //         <div className="hero">
// // //           <img src={heroImg} className="base" width="170" height="179" alt="" />
// // //           <img src={reactLogo} className="framework" alt="React logo" />
// // //           <img src={viteLogo} className="vite" alt="Vite logo" />
// // //         </div>
// // //         <div>
// // //           <h1>Get started</h1>
// // //           <p>
// // //             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
// // //           </p>
// // //         </div>
// // //         <button
// // //           type="button"
// // //           className="counter"
// // //           onClick={() => setCount((count) => count + 1)}
// // //         >
// // //           Count is {count}
// // //         </button>
// // //       </section>

// // //       <div className="ticks"></div>

// // //       <section id="next-steps">
// // //         <div id="docs">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#documentation-icon"></use>
// // //           </svg>
// // //           <h2>Documentation</h2>
// // //           <p>Your questions, answered</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://vite.dev/" target="_blank">
// // //                 <img className="logo" src={viteLogo} alt="" />
// // //                 Explore Vite
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://react.dev/" target="_blank">
// // //                 <img className="button-icon" src={reactLogo} alt="" />
// // //                 Learn more
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //         <div id="social">
// // //           <svg className="icon" role="presentation" aria-hidden="true">
// // //             <use href="/icons.svg#social-icon"></use>
// // //           </svg>
// // //           <h2>Connect with us</h2>
// // //           <p>Join the Vite community</p>
// // //           <ul>
// // //             <li>
// // //               <a href="https://github.com/vitejs/vite" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#github-icon"></use>
// // //                 </svg>
// // //                 GitHub
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://chat.vite.dev/" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#discord-icon"></use>
// // //                 </svg>
// // //                 Discord
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://x.com/vite_js" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#x-icon"></use>
// // //                 </svg>
// // //                 X.com
// // //               </a>
// // //             </li>
// // //             <li>
// // //               <a href="https://bsky.app/profile/vite.dev" target="_blank">
// // //                 <svg
// // //                   className="button-icon"
// // //                   role="presentation"
// // //                   aria-hidden="true"
// // //                 >
// // //                   <use href="/icons.svg#bluesky-icon"></use>
// // //                 </svg>
// // //                 Bluesky
// // //               </a>
// // //             </li>
// // //           </ul>
// // //         </div>
// // //       </section>

// // //       <div className="ticks"></div>
// // //       <section id="spacer"></section>
// // //     </>
// // //   )
// // // }

// // // export default App 

// api calling
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [currentProduct, setCurrentProduct] = useState(0);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [notFound, setNotFound] = useState(false);

//   function getProducts(url) {
//     setLoading(true);
//     setError("");
//     setNotFound(false);

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to load products");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data.products);
//         setCurrentProduct(0);
//         setLoading(false);

//         if (data.products.length === 0) {
//           setNotFound(true);
//         }
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }

//   useEffect(() => {
//     getProducts("https://dummyjson.com/products");
//   }, []);

//   function findProduct() {
//     if (!search.trim()) {
//       getProducts("https://dummyjson.com/products");
//       return;
//     }

//     const url = `https://dummyjson.com/products/search?q=${search}`;

//     getProducts(url);
//   }

//   function nextProduct() {
//     if (currentProduct < products.length - 1) {
//       setCurrentProduct(currentProduct + 1);
//     }
//   }

//   function previousProduct() {
//     if (currentProduct > 0) {
//       setCurrentProduct(currentProduct - 1);
//     }
//   }

//   if (loading) {
//     return (
//       <div style={styles.message}>
//         <h2>Loading...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div style={styles.message}>
//         <h2>Error</h2>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (notFound) {
//     return (
//       <div style={styles.page}>
//         <div style={styles.container}>
//           <h1 style={styles.heading}>Products</h1>

//           <div style={styles.searchBox}>
//             <input
//               type="text"
//               placeholder="Search products"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               style={styles.input}
//             />

//             <button onClick={findProduct} style={styles.searchButton}>
//               Find
//             </button>
//           </div>

//           <div style={styles.notFound}>
//             <h2>Product not found</h2>
//             <p>Try searching for something else.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const product = products[currentProduct];

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         <h1 style={styles.heading}>Products</h1>

//         <p style={styles.subtitle}>
//           Search and explore products
//         </p>

//         <div style={styles.searchBox}>
//           <input
//             type="text"
//             placeholder="Search products"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 findProduct();
//               }
//             }}
//             style={styles.input}
//           />

//           <button onClick={findProduct} style={styles.searchButton}>
//             Find
//           </button>
//         </div>

//         <p style={styles.postNumber}>
//           Product {currentProduct + 1} of {products.length}
//         </p>

//         <div style={styles.card}>
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             style={styles.image}
//           />

//           <div style={styles.content}>
//             <p style={styles.category}>
//               {product.category}
//             </p>

//             <h2 style={styles.title}>
//               {product.title}
//             </h2>

//             <p style={styles.description}>
//               {product.description}
//             </p>

//             <p style={styles.price}>
//               ${product.price}
//             </p>
//           </div>
//         </div>

//         <div style={styles.buttons}>
//           <button
//             onClick={previousProduct}
//             disabled={currentProduct === 0}
//             style={styles.button}
//           >
//             Previous
//           </button>

//           <button
//             onClick={() => window.print()}
//             style={styles.button}
//           >
//             Print
//           </button>

//           <button
//             onClick={nextProduct}
//             disabled={currentProduct === products.length - 1}
//             style={styles.button}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     backgroundColor: "#f5f5f5",
//     padding: "40px 20px",
//     fontFamily: "Arial, sans-serif",
//   },

//   container: {
//     maxWidth: "700px",
//     margin: "0 auto",
//   },

//   heading: {
//     marginBottom: "5px",
//     color: "#222",
//   },

//   subtitle: {
//     marginTop: "0",
//     color: "#777",
//   },

//   searchBox: {
//     display: "flex",
//     gap: "10px",
//     margin: "25px 0 20px",
//   },

//   input: {
//     flex: "1",
//     padding: "12px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     fontSize: "15px",
//   },

//   searchButton: {
//     padding: "12px 20px",
//     border: "none",
//     borderRadius: "6px",
//     backgroundColor: "#333",
//     color: "white",
//     cursor: "pointer",
//   },

//   postNumber: {
//     color: "#777",
//     fontSize: "14px",
//   },

//   card: {
//     backgroundColor: "white",
//     borderRadius: "10px",
//     overflow: "hidden",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
//   },

//   image: {
//     width: "100%",
//     height: "300px",
//     objectFit: "cover",
//     display: "block",
//   },

//   content: {
//     padding: "25px",
//   },

//   category: {
//     color: "#777",
//     fontSize: "14px",
//     textTransform: "capitalize",
//   },

//   title: {
//     color: "#222",
//   },

//   description: {
//     color: "#555",
//     lineHeight: "1.6",
//   },

//   price: {
//     fontSize: "22px",
//     fontWeight: "bold",
//     color: "#222",
//   },

//   buttons: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },

//   button: {
//     padding: "10px 18px",
//     border: "1px solid #ccc",
//     borderRadius: "6px",
//     backgroundColor: "white",
//     cursor: "pointer",
//   },

//   notFound: {
//     backgroundColor: "white",
//     padding: "40px",
//     textAlign: "center",
//     borderRadius: "8px",
//   },

//   message: {
//     textAlign: "center",
//     marginTop: "100px",
//     fontFamily: "Arial, sans-serif",
//   },
// };

// export default App;






// import { useState } from "react";
// import Title from "./Title";

// function App() {
//   const [name, setName] = useState("Roselin");

//   return (
//     <div>
//       <h1>Parent Component</h1>

//       <button onClick={() => setName("John")}>
//         Change Name
//       </button>

//       <Title name={name} />
//     </div>
//   );
// }

// export default App;


import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="text"
          name="age"
          placeholder="Enter your age"
          value={form.age}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;