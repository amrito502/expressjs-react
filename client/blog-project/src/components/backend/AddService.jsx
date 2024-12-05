import React from 'react';

function AddService() {
  return (
    <div className="">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h6>Create Service</h6>
          </div>
          <div className="card-body">
            <form>
            <div className="form-group mb-3 mt-3">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' placeholder='name' className='form-control mt-3'/>
              </div>
              <div className="form-group mb-3 mt-3">
                <label htmlFor="title">Title</label>
                <input type="text" name='title' placeholder='Title' className='form-control mt-3'/>
              </div>
              <div className="form-group mb-3 mt-3">
                <label htmlFor="image">Image</label>
                <input type="file" name='image' className='form-control mt-3'/>
              </div>
              <div className="form-group mb-3">
              <input type="submit" value={'Create Service'} className='btn btn-success mt-3'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AddService;
