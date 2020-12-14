import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const NewPost = ({ refreshData }) => {
  const [objNew, setObjNew] = useState({});
  const handleChange = (e) =>
    setObjNew({ ...objNew, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!objNew.hasOwnProperty('title') || objNew.title === '') {
      alert('Please enter title', 'error');
      return;
    }
    if (!objNew.hasOwnProperty('body') || objNew.body === '') {
      alert('Please enter body', 'error');
      return;
    }
    createPost();
  };
  const createPost = async (objNew) => {
    try {
      const res = axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        objNew,
      );
      //if create success => refresh data
      refreshData();
      alert('Add new post success');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='new-post pb-3'>
      <h4 className='h4'>Add new post</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            name='title'
            id='title'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='body'>Body</label>
          <input
            type='text'
            name='body'
            id='body'
            className='form-control'
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

NewPost.propTypes = {
  refreshData: PropTypes.func,
};

export default NewPost;
