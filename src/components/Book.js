import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { deleteBookAsync } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const percentageInteger = Math.floor(Math.random() * 100);

  return (
    <article className="books__item">
      <div className="header">
        <h5>Action</h5>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button type="button">Comments</button>
          <button onClick={() => dispatch(deleteBookAsync(id))} type="button">
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <CircularProgressbar
          className="progress__bar"
          value={percentageInteger}
          text=""
          styles={buildStyles({
            pathColor: '#379cf6',
            trailColor: '#f5f6fa',
          })}
        />
        <div className="progress__text">
          <h5>
            {percentageInteger}
            %
          </h5>
          <p>Completed</p>
        </div>
        <hr className="progress__rule" />
      </div>
      <div className="chapter">
        <h6>CURRENT CHAPTER</h6>
        <h4>Chapter 16</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </article>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
