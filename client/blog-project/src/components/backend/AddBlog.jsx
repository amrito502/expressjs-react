import React from 'react';

function AddBlog() {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h6>Create Blog</h6>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3 mt-3">
                  <label htmlFor="title">Title</label>
                  <input type="text" name='title' placeholder='Title' className='form-control mt-3'/>
                </div>
                <div className="form-group mb-3 mt-3">
                  <label htmlFor="image">Image</label>
                  <input type="file" name='image' className='form-control mt-3'/>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="content">Content</label>
                  <textarea name="content" id="content" className='form-control mt-3' placeholder='Description'></textarea>
                </div>
                <div className="form-group mb-3">
                <input type="submit" value={'Create Blog'} className='btn btn-success mt-3'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
