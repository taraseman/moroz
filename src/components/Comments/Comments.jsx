import React from 'react';
import { Comment } from '../Comment';
import { comments } from '../../info-from-server';
import './Comments.scss';

export const Comments = () => (
  <div className="comments">
    <h3 className="comments__title">RECENT COMMENTS</h3>
    <ul className="comments__list">
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment
            text={comment.text}
            buttonText={comment.buttonText}
            buttonColor={comment.buttonColor}
            date={comment.date}
            img={comment.img}
          />
        </li>
      ))}
    </ul>
  </div>
);
