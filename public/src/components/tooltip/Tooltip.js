import React from 'react';

import tooltip from './tooltip.scss';

const Tooltip = ({ show, className }) => (
  <div className='hide'>
    <div className={className ? tooltip[className] : tooltip.tooltip}>
      {show}
    </div>
    <div className={tooltip.relative}>
      <i className='fa fa-caret-down'></i>
    </div>
  </div>
)

export default Tooltip;
