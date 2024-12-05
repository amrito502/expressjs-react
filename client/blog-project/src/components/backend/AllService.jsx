import React from 'react';

function AllService() {
  return (
    <div className="">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h6>All Services</h6>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Img</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Web Development</td>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td><img src="" alt="img" /></td>
                  <td>
                    <button className='btn btn-sm btn-success'>Edit</button>
                    <button className='btn btn-sm btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AllService;
