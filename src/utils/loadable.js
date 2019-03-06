import loadable from '@loadable/component'
import {Spin} from 'antd';
import React from 'react';

 
export default (str) => loadable(() => import(`pages/${str}`), {
  fallback:  <div className="page-loading"><Spin /></div>,
})

