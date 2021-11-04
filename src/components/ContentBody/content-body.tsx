import React from 'react';

function ContentBody(props : any) {
  return (
    <div className="content-body _mt-6 _mb-6 _mt-lg-8 _mb-lg-8 _mr-auto _ml-auto">
      <div className="_ml-4 _mr-4 _ml-sm-6 _mr-sm-6 _ml-lg-8 _mr-lg-8">
        {props.children}
      </div>
    </div>
  );
}

export default ContentBody;
