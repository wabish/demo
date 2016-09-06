import React from 'react';

// 从 redux-devtools 中引入 createDevTools
import { createDevTools } from 'redux-devtools';

// 显示包是单独的，需额外指定
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// 创建 DevTools 组件
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

export default DevTools;