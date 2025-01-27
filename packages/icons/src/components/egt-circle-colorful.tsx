// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/egt-circle-colorful.svg';

/**![EgtCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMwOCAzMDgiIHZpZXdCb3g9IjAgMCAzMDggMzA4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxlbGxpcHNlIGN4PSIxNTQuNSIgY3k9IjE1NC4zIiBmaWxsPSIjZmZmIiByeD0iMTUxLjIiIHJ5PSIxNDAuNyIvPjxwYXRoIGQ9Im0xNTQgMGMtODUuMSAwLTE1NCA2OC45LTE1NCAxNTRzNjguOSAxNTQgMTU0IDE1NCAxNTQtNjguOSAxNTQtMTU0LTY4LjktMTU0LTE1NC0xNTR6bTMuMSAyODYuN2MtNzIuMSAwLTEzMC42LTU4LjUtMTMwLjYtMTMwLjZzNTguNS0xMzAuNiAxMzAuNi0xMzAuNiAxMzAuNiA1OC41IDEzMC42IDEzMC42LTU4LjUgMTMwLjYtMTMwLjYgMTMwLjZ6IiBmaWxsPSIjZjZiZTFkIi8+PGNpcmNsZSBjeD0iMTU3LjIiIGN5PSIxNTYuMiIgZmlsbD0iI2Y2YmUxZCIgcj0iMTIyLjgiLz48cGF0aCBkPSJtNzAuNSAyMjcuM2MtMy42LTIxLjggMi41LTM4LjcgNS41LTQ2LjcgMTAtMjYuNyAyOC44LTQyIDM4LjItNDguNSAxNC4zLTkuOSAyOC4zLTE0LjMgMzcuNS0xNi4zIDEuOC0uNCAzLjctLjkgNS41LTEuNCA2LjgtMiAxNS41LTQuOCAyNS41LTguNSAxMi4xLTQuNSAxOC42LTYuOSAyNi44LTExLjUgMTEuMS02LjIgMTguNS0xMi41IDI1LjUtMTguNSA3LjItNi4yIDE2LjQtMTUgMjUuOC0yNi43LTEuMyA4LjgtNC4xIDIxLjUtMTAuMyAzNS43LTMuOSA4LjctNy40IDE2LjctMTQuNyAyNS4yLTE0LjggMTcuMy0zNC40IDI0LjItNDMgMjcuMi0uNS4yLS4xIDAtMjEuMyA3LTIuNi44LTEzLjggNC41LTE2LjMgNS40LTkuNiAzLjEtMzIgMTEuOC01MCAzNC4xLTI0LjkgMzAuOS0yMy42IDY1LjYtMjMgNzQuMi00LjEtNi4zLTkuNC0xNi44LTExLjctMzAuN3ptODQtNDUuM2MxMi0xLjIgMjMtMS4yIDMyLjUtLjcgNS44LS41IDE2LjYtMi40IDI2LjMtMTAuMyA5LjgtOCAxMy41LTE3LjkgMTYuNS0yNS44IDQtMTAuNyA0LjktMjAuMSA1LTI2LjMtMy4yIDMuMS04LjEgNy4zLTE0LjcgMTEuMy02LjEgMy44LTExLjEgNS44LTE4LjcgOC44LTUuNCAyLjItMTIuNyA0LjktMjEuNyA3LjUtMTcuOCA1LjUtMzEuOCAxMS44LTQxLjggMTctMTEgNS42LTE5LjUgMTEuMS0yNSAyMS4xLTEuNCAyLjYtMi4zIDQuOC0yLjggNi40IDEyLTMuOCAyNy03LjMgNDQuNC05em0tNDQuMiAzM2MzLjYtLjYgOC0xIDI1LjUuOCA0LjYuNSA4LjkgMSAxMi43IDEuNSAxMS42IDEuNSAyMy40LS42IDMzLjYtNi41IDMuNy0yLjEgNy40LTQuOCAxMC45LTguNCA2LjQtNi40IDkuOC0xMy4yIDExLjctMTgtNS44IDEtMTIuNCAxLjktMTkuNyAyLjItNC40LjItOC42LjItMTIuNSAwLTE2LS42LTI4LjggMS44LTM3LjMgNC0xNC4zIDMuNy0zMS41IDguMS00MCAyMi44LTIgMy41LTMuMSA2LjgtMy43IDkgNy41LTQuNiAxNC4xLTYuNiAxOC44LTcuNHptLTE0LjUgMjdjMS40LS4yIDIuOC0uMyA0LS40IDMuOS0uMSA3LjguNCAxMS42IDEuNSA0LjIgMS4yIDguOCAyLjMgMTMuOCAzLjIgMyAuNSA1LjkuOSA4LjcgMS4yIDQuNS41IDkgLjIgMTMuNC0uOCAyLjktLjcgNi0xLjggOS4yLTMuNSAxMi44LTcgMTcuNC0xOSAxOC41LTIyLjItMiAxLjYtNS4xIDMuNy05LjIgNS4zLTUuOCAyLjMtMTAuNyAyLjQtMTUuOCAyLjUtMy42LjEtOC4zLS4xLTEzLjktMS4yLTEuNy0uMy0zLjMtLjgtNC45LTEuMi0xNS40LTQuMy0zMC41LTEuOC0zOS4zIDcuNC0yLjEgMi4yLTQuOCA1LjctNi41IDExLjIgMi42LTEuMSA2LjEtMi40IDEwLjQtM3oiIGZpbGw9IiNmZGZmZmEiLz48L3N2Zz4=) */
export const EgtCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-egt-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

EgtCircleColorful.displayName = 'EgtCircleColorful';
