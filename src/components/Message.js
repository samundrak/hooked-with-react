import React from 'react';
import RM from 'react-markdown';

const Message = ({ children }) => {
  return (
    <div className="message">
      <RM source={`${children}`} escapeHtml={false} />
    </div>
  );
};
export default Message;
