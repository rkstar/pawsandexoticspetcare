import React from 'react';

const brandIcons = [
  'facebook',
  'twitter',
  'instagram',
  'linkedin',
];
const isBrand = icon => brandIcons.includes(icon);
export default ({ icon, style }) => isBrand(icon)
  ? <i className={`fab fa-${icon}`} style={style} />
  : <i className={`fas fa-${icon}`} style={style} />;
