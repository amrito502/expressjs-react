import React from 'react';

function AddTeam() {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h6>Create Team Member</h6>
            </div>
            <div className="card-body">
              <form>
              <div className="form-group mb-3 mt-3">
                  <label htmlFor="name">Name</label>
                  <input type="text" name='name' placeholder='name' className='form-control mt-3'/>
                </div>
                <div className="form-group mb-3 mt-3">
                  <label htmlFor="designation">Designation</label>
                  <input type="text" name='designation' placeholder='designation' className='form-control mt-3'/>
                </div>
                <div className="form-group mb-3 mt-3">
                  <label htmlFor="image">Image</label>
                  <input type="file" name='image' className='form-control mt-3'/>
                </div>
                <div className="form-group mb-3">
                <input type="submit" value={'Create Team'} className='btn btn-success mt-3'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeam;
