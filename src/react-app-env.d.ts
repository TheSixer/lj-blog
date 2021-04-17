/// <reference types="react-scripts" />
/* 允许在ts中使用import styles from '*.less' */
declare global {
  module '*.less' {
    const styles: unknown;
    export = styles;
  }
}

declare module 'highlight.js/lib/core';
declare module 'highlight.js/lib/languages/go';
declare module 'highlight.js/lib/languages/css';
declare module 'highlight.js/lib/languages/sql';
declare module 'highlight.js/lib/languages/php';
declare module 'highlight.js/lib/languages/xml';
declare module 'highlight.js/lib/languages/yaml';
declare module 'highlight.js/lib/languages/json';
declare module 'highlight.js/lib/languages/bash';
declare module 'highlight.js/lib/languages/less';
declare module 'highlight.js/lib/languages/scss';
declare module 'highlight.js/lib/languages/rust';
declare module 'highlight.js/lib/languages/java';
declare module 'highlight.js/lib/languages/shell';
declare module 'highlight.js/lib/languages/nginx';
declare module 'highlight.js/lib/languages/stylus';
declare module 'highlight.js/lib/languages/python';
declare module 'highlight.js/lib/languages/javascript';
declare module 'highlight.js/lib/languages/typescript';
