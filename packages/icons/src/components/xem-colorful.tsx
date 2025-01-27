// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/xem-colorful.svg';

/**![XemColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIGlkPSJhbnQtd2ViMy1pY29uLXhlbS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDkuNSAyMDgiID48cGF0aCBkPSJNMTA0LjggMjA4bC0xLjItLjZDNTYuOCAxODAgMjEuNCAxMzQuOCA3IDgwLjhjLTIuMy04LjUtNC0xNy4yLTUuMi0yNkMuNyA0NiAuMSAzNy4xIDAgMjguMmMwLTEuNS0uMi0xLjMgMS4yLTIgMTcuNi0xMCAzNi4yLTE3LjMgNTUuOS0yMS45IDcuMy0xLjcgMTQuNi0zIDIyLTMuOSAxMC4yLTEuMiAyMC40LTEuNyAzMC43LTEuNSA1LjguMSAxMS41LjUgMTcuMiAxLjEgMjguNyAzLjEgNTUuNiAxMS43IDgwLjggMjUuOC40LjIuNy40IDEuMS42LjQuMi42LjUuNiAxdjEuNWMtLjEgNS4yLS4zIDEwLjMtLjcgMTUuNS0uNiA3LjQtMS42IDE0LjctMyAyMi0zIDE1LjctNy43IDMwLjgtMTQuMiA0NS4zLTEwLjMgMjMuMS0yNC40IDQzLjctNDIuMiA2MS43LTEyLjggMTMtMjcuMSAyNC4yLTQyLjkgMzMuNS0uNi40LTEuMS43LTEuNyAxLjF6TTkuNiAzMy4zdjEuMmMwIDcuMy41IDE0LjcgMS40IDIxLjkuOCA2LjYgMS45IDEzLjEgMy40IDE5LjYuMyAxLjEuNiAyLjIgMS4xIDMuMyA5IDE5LjEgMjkuOCAyOS4zIDUwLjQgMjQuNiAxNS43LTMuNiAyOC41LTE1LjcgMzIuOC0zMS4yIDEuMi00LjMgMS42LTguNyAxLjgtMTMuMS4xLTIuOS40LTUuOC45LTguNyAzLjQtMTcuNiAxNS4xLTMyLjEgMzEuNi0zOSAuOS0uNCAxLjktLjcgMi44LTEuMS4xLS4xLjMtLjEuMy0uMy0yLjYtLjktMTguMS0yLjUtMjcuNC0yLjctMjAtLjQtMzkuNiAyLjItNTguNyA4LTE0LjIgNC4zLTI3LjYgMTAuMS00MC40IDE3LjV6bTE0Ny41IDExOS44Yy41LS4zLjgtLjcgMS0xIDQtNSA3LjgtMTAuMiAxMS4zLTE1LjYgMTIuNS0xOS40IDIxLjMtNDAuMyAyNi4yLTYyLjkgMS43LTcuNyAyLjgtMTUuNCAzLjUtMjMuMi41LTUuMy43LTEwLjYuNy0xNiAwLS40IDAtLjctLjEtMS4xbC0xLjUtLjljLTQuMS0yLjMtOC4zLTQuNS0xMi41LTYuNS02LjItMi45LTEyLjQtNS41LTE4LjktNy42LTcuOS0yLjUtMTUuOS0yLjgtMjMuOS0uOC0yMi45IDUuNS0zNy42IDI4LTMzLjIgNTEuMSAyLjQgMTIuOCA5LjMgMjIuOCAyMC4zIDI5LjguNy41IDEuNS45IDIuMiAxLjQgOC4xIDQuOSAxNC40IDExLjYgMTguOSAxOS45IDQuOCA4LjcgNi45IDE4LjEgNi4zIDI4IC4xIDEuNy0uMSAzLjUtLjMgNS40em0tNTIuMyA0NC43Yy40LS4yLjktLjUgMS4zLS44IDEyLjYtNy40IDI0LjItMTYuMiAzNC44LTI2LjIuNy0uNiAxLjItMS40IDEuNi0yLjIuNy0xLjMgMS40LTIuNyAyLTQgNS0xMC40IDYuMS0yMS4yIDIuOC0zMi40LTYuNS0yMS42LTI3LjMtMzQtNDguMi0zMS40LTYgLjctMTEuNSAyLjYtMTYuNyA1LjYtOS45IDUuNi0yMC41IDcuOS0zMS45IDYuOC01LjYtLjUtMTAuOS0yLTE2LTQuMi00LTEuOC03LjgtNC0xMS4yLTYuNy0uMi0uMi0uNS0uMy0xLS42LjEuNS4yLjguMyAxIDQuNSAxMS40IDEwIDIyLjIgMTYuNSAzMi41IDcuMSAxMS4xIDE1LjIgMjEuNCAyNC40IDMwLjggOS4yIDkuNCAxOS4zIDE3LjggMzAuMiAyNS4xIDUgMy4yIDkuNyA2LjEgMTEuMSA2Ljd6Ii8+PHBhdGggZD0iTTkuNiAzMy4zYzEyLjgtNy40IDI2LjItMTMuMiA0MC4zLTE3LjQgMTkuMi01LjcgMzguNy04LjQgNTguNy04IDkuMy4yIDI0LjggMS43IDI3LjQgMi43LjEuMi0uMS4zLS4zLjMtLjkuNC0xLjkuNy0yLjggMS4xLTE2LjUgNi45LTI4LjIgMjEuNC0zMS42IDM5LS41IDIuOS0uOCA1LjgtLjkgOC43LS4xIDQuNC0uNSA4LjgtMS44IDEzLjEtNC40IDE1LjUtMTcuMSAyNy42LTMyLjggMzEuMi0yMC42IDQuNy00MS40LTUuNS01MC40LTI0LjYtLjUtMS4xLS45LTIuMi0xLjEtMy4zLTEuNS02LjUtMi42LTEzLTMuNC0xOS42LS45LTcuMy0xLjQtMTQuNi0xLjQtMjEuOS4xLS41LjEtLjguMS0xLjN6IiBzdHlsZT0iZmlsbDogI2Y3YTgwMDsiLz48cGF0aCBkPSJNMTU3LjEgMTUzLjFjLjItMS45LjQtMy42LjUtNS40LjUtOS45LTEuNi0xOS4zLTYuMy0yOC00LjUtOC4zLTEwLjgtMTQuOS0xOC45LTE5LjktLjctLjUtMS41LS45LTIuMi0xLjQtMTEuMS03LTE3LjktMTYuOS0yMC4zLTI5LjgtNC4zLTIzLjIgMTAuMy00NS42IDMzLjItNTEuMSA4LjEtMS45IDE2LTEuNyAyMy45LjggNi41IDIgMTIuNyA0LjcgMTguOSA3LjYgNC4zIDIgOC40IDQuMiAxMi41IDYuNS41LjMuOS41IDEuNS45IDAgLjQuMS43LjEgMS4xIDAgNS4zLS4zIDEwLjctLjcgMTYtLjcgNy44LTEuOSAxNS42LTMuNSAyMy4yLTQuOSAyMi42LTEzLjYgNDMuNS0yNi4yIDYyLjktMy41IDUuNC03LjMgMTAuNi0xMS4zIDE1LjYtLjQuMy0uNi43LTEuMiAxeiIgc3R5bGU9ImZpbGw6ICM2N2IyZTg7Ii8+PHBhdGggZD0iTTEwNC44IDE5Ny44Yy0xLjUtLjYtNi4xLTMuNC0xMS02LjctMTAuOS03LjMtMjEtMTUuNy0zMC4yLTI1LjFzLTE3LjQtMTkuNy0yNC40LTMwLjhjLTYuNi0xMC4zLTEyLjEtMjEuMS0xNi41LTMyLjUtLjEtLjMtLjItLjUtLjMtMSAuNS4zLjcuNCAxIC42IDMuNSAyLjcgNy4yIDUgMTEuMiA2LjcgNS4xIDIuMiAxMC40IDMuNyAxNiA0LjIgMTEuMyAxLjEgMjEuOS0xLjIgMzEuOS02LjggNS4yLTIuOSAxMC44LTQuOCAxNi43LTUuNiAyMC45LTIuNiA0MS43IDkuOCA0OC4yIDMxLjQgMy4zIDExLjEgMi4zIDIxLjktMi44IDMyLjQtLjcgMS40LTEuMyAyLjctMiA0LS40LjgtLjkgMS42LTEuNiAyLjItMTAuNiAxMC0yMi4yIDE4LjgtMzQuOCAyNi4yLS41LjMtMSAuNi0xLjQuOHoiIHN0eWxlPSJmaWxsOiAjMDBjNGIzOyIvPjwvc3ZnPg==) */
export const XemColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xem-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

XemColorful.displayName = 'XemColorful';
