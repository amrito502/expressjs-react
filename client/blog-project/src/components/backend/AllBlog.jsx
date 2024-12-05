import React from 'react';

function AllBlog() {
  return (
    <div className="">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h6>All Blog</h6>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th style={{width:"30%"}}>Content</th>
                  <th>Img</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lorem ipsum dolor sit amet consectetur.</td>
                  <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis ipsam maxime ad, quibusdam commodi odit saepe voluptatibus recusandae neque!</td>
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

export default AllBlog;
