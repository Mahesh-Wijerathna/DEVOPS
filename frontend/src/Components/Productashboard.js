import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { UserContext } from "../UserContext";



function ProductDashboard() {
  const { user } = useContext(UserContext);
  const [boardingHouses, setProducts] = useState([]);
  const [newBoardingHouse, setNewProduct] = useState({
    categories: '',
    productname: '',
    discription: '',
    images: [],

  });

  
  const [imageFiles, setImageFiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8070/product/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, []);

  const backgroundStyles = {
    background: '#CFD8DC',
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    minHeight: "1000vh",
    maxHeight:'100%'
  };

  const boardingHouseStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  };
  
  const buttonContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };
  
  const deleteButton = {
    
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    
  };
  const editButton = {
    
    padding: '10px 20px',
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
      border:'none',
      borderRadius: '5px',
      cursor: 'pointer',
  
};
  
  
  
  const imageStyle = {
    maxWidth: '400px',
    maxHeight: '400px',
    margin: '5px',
  };

  const handleEdit = (product) => {
    setEditMode(true);
    setSelectedProduct(product);
    setNewProduct(product);
  };

  const handleUpdate = () => {
    alert("function")
    axios
      .put(`http://localhost:8070/product/update/${selectedProduct._id}`, newBoardingHouse)
      .then(() => {
        alert('Updated');
        const updatedBoardingHouses = boardingHouses.map((house) => {
          if (house._id === selectedProduct._id) {
            return newBoardingHouse;
          }
          return house;
        });
        setProducts(updatedBoardingHouses);

        setEditMode(false);
        setSelectedProduct(null);
        setNewProduct({
            categories: '',
            productname: '',
            discription: '',
            images: [],
        });
      })
      .catch((error) => {
        console.error('Error updating product:', error);
      });
  };

  const addProduct = (e) => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append('categories', newBoardingHouse.categories);
    formData.append('productname', newBoardingHouse.productname);
    formData.append('discription', newBoardingHouse.discription);

    
for (let i = 0; i < imageFiles.images.length; i++) {
  formData.append('images', imageFiles.images[i]);
}



    axios
      .post('http://localhost:8070/product/add', formData)
      .then((response) => {
        alert('Product added');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });
  };

  

  const handleImageChange = (e) => {
    const images = e.target.files;
    setImageFiles({
      ...imageFiles,
      images,
    });
  };

  const deleteBoardingHouse = (boardingHouseId) => {
    axios
      .delete(`http://localhost:8070/product/delete/${boardingHouseId}`)
      .then(() => {
        setProducts(boardingHouses.filter((house) => house._id !== boardingHouseId));
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    
    <div style={{background:"#CDA679",border: "1px solid #000000"}}>
      <header style={backgroundStyles}>
      
      
      {user ?(<h1 style={{ textAlign: 'center',background:"black" ,color:"white"}}>Welcome, {user.username}</h1>):(<h1 style={{ textAlign: 'center' }}>Welcome, owner</h1>)}
      <div style={{ display: 'flex' }}>
      <div style={{ width: '60%' }}>
  <h2 style={{textAlign:"center",color:"black"}}>Your Products</h2>
  {boardingHouses.map((boardingHouse) => (
    <div key={boardingHouse._id} style={boardingHouseStyle}>
      <h2 style={{ color: 'white',background:"black" ,textAlign:"center",borderRadius: '10px',height:"50px" }}>{boardingHouse.productname}</h2>
      <p>
        <strong>Categories :</strong> {boardingHouse.categories}
      </p>
      <p>
        <strong>Productname:</strong> {boardingHouse.productname}
      </p>
      <p>
        <strong>Discription:</strong> {boardingHouse.discription}
      </p>
      <div>
        {boardingHouse.images &&
          boardingHouse.images.map((image, index) => (
            <img
              key={image.filename}
              src={`http://localhost:8070/uploads/${image.filename}`}
              alt={image.filename}
              style={imageStyle}
            />
          ))}
      </div>
      <div style={buttonContainer}>
        <button
          style={deleteButton}
          onClick={() => deleteBoardingHouse(boardingHouse._id)}
        >
          Delete
        </button>
        <button
          style={editButton}
          onClick={() => handleEdit(boardingHouse)}
        >
          Edit
        </button>
      </div>
    </div>
  ))}
</div>

        <div style={{ width: '40%'}}>
          <h2 style={{textAlign:"center",color:"black"}}>{editMode ? 'Edit Product' : 'Add a New Product'}</h2>
          <form encType="multipart/form-data" style={{  padding: '20px' }}>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <strong>Categories:</strong>
    <input
      type="text"
      value={newBoardingHouse.categories}
      onChange={(e) =>
        setNewProduct({
          ...newBoardingHouse,
          categories: e.target.value,
        })
      }
      style={{ width: '100%', padding: '5px',borderRadius: '10px' }}
    />
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <strong>Product Name:</strong>
    <input
      type="text"
      value={newBoardingHouse.productname}
      onChange={(e) =>
        setNewProduct({
          ...newBoardingHouse,
          productname: e.target.value,
        })
      }
      style={{ width: '100%', padding: '5px',borderRadius: '10px'  }}
    />
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <strong>Owner Contact:</strong>
    <input
      type="text"
      value={newBoardingHouse.owner_contact}
      onChange={(e) =>
        setNewProduct({
          ...newBoardingHouse,
          owner_contact: e.target.value,
        })
      }
      style={{ width: '100%', padding: '5px',borderRadius: '10px'  }}
    />
  
  </label>
  <label style={{ display: 'block', marginBottom: '10px' }}>
    <strong>Description:</strong>
    <textarea
      value={newBoardingHouse.discription}
      onChange={(e) =>
        setNewProduct({
          ...newBoardingHouse,
          discription: e.target.value,
        })
      }
      style={{ width: '100%', padding: '5px' ,borderRadius: '10px' }}
    />
  </label>

  <label style={{ display: 'block', marginBottom: '10px' }}>
    <strong>Upload Images:</strong>
    <input
      type="file"
      name="images"
      accept="image/*"
      onChange={handleImageChange}
      multiple
      style={{ width: '100%' }}
    />
  </label>
</form>

{editMode? (
  <button
  type="button"
  onClick={handleUpdate}
  
  style={{
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }}
>

  
    Update Product
  </button>

):(
  <button
    type="button"
    onClick={addProduct}
    style={{
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
    Add Product
  </button>

)}


  


        </div>
      </div>
      </header>
    </div>
    
  );
}

export default ProductDashboard;
