import Ad2 from '../ads/Ad2';
import React from 'react';

function RightNav() {
  console.log('right nav called');
  return (
    <div className="py-4 px-2 text-center custom-break:w-1/5 w-full float-left">
      <Ad2 />
    </div>
  );
}
export default React.memo(RightNav);
