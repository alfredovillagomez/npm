/** @jsx jsx */
import React from 'react';
import { Global, jsx } from '@emotion/react';
import styles from './index.styles';
const Site = ({ children }) => (jsx("main", { css: styles.main, role: "main" },
    jsx(Global, { styles: styles.global }),
    children));
export default React.memo(Site);
//# sourceMappingURL=index.js.map