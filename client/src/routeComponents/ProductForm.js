function ProductForm(props) {
    return (
      <form className="mb-5" onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="productFormName">Room Name</label>
          <input
            type="text"
            className="form-control"
            id="productFormName"
            name="name"
            onChange={props.handleChange}
            value={props.state.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="productFormTagline"
            name="description"
            onChange={props.handleChange}
            value={props.state.description}
          />
        </div>
  
  
        <div className="form-group">
          <label htmlFor="productFormImage">Room Picture</label>
         
          <input
            type="text"
            className="form-control"
            id="productFormImage"
            name="productFormImage"
            onChange={props.handleChange}
            value={props.state.imageUrl}
          />
        </div>
  
  

  
        <hr />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
  
  export default ProductForm;
  