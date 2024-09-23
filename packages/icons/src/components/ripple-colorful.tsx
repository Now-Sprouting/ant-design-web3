// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/ripple-colorful.svg';

/**![RippleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iLTIgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBhbHQ9IkxpbmsgdG8gSG9tZSwgUmlwcGxl4oCZcyBDb21wYW55IExvZ28iPjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMjUxXzExODU1KSI+PHBhdGggZD0iTTE3LjUwNzggMTQuNjQ4NkMxNi43NTE2IDE0LjIxMDMgMTUuODk4NiAxNC4wODM5IDE1LjA1MzUgMTQuMDU2M0MxNC4zNDQ3IDE0LjAzMjYgMTMuMjg4MyAxMy41Nzg0IDEzLjI4ODMgMTIuMjc5MkMxMy4yOTI0IDExLjgxMTIgMTMuNDc5MyAxMS4zNjM0IDEzLjgwOTEgMTEuMDMxM0MxNC4xMzg5IDEwLjY5OTMgMTQuNTg1NSAxMC41MDk0IDE1LjA1MzUgMTAuNTAyMkMxNS44OTg2IDEwLjQ3MjYgMTYuNzUxNiAxMC4zNDYyIDE3LjUwNzggOS45MDk4M0MxOC4xODY4IDkuNTE2NjQgMTguNzUwNCA4Ljk1MTczIDE5LjE0MjEgOC4yNzE4MkMxOS41MzM3IDcuNTkxOSAxOS43Mzk2IDYuODIwOTIgMTkuNzM5IDYuMDM2MjhDMTkuNzM4NCA1LjI1MTY0IDE5LjUzMTQgNC40ODA5NiAxOS4xMzg3IDMuODAxNjNDMTguNzQ2MSAzLjEyMjMgMTguMTgxNiAyLjU1ODIzIDE3LjUwMiAyLjE2NjA2QzE2LjgyMjQgMS43NzM4OSAxNi4wNTE2IDEuNTY3NDIgMTUuMjY3IDEuNTY3MzhDMTQuNDgyMyAxLjU2NzM1IDEzLjcxMTUgMS43NzM3NSAxMy4wMzE4IDIuMTY1ODZDMTIuMzUyMiAyLjU1Nzk3IDExLjc4NzcgMy4xMjE5OCAxMS4zOTUgMy44MDEyOEMxMS4wMDIzIDQuNDgwNTcgMTAuNzk1MiA1LjI1MTIzIDEwLjc5NDUgNi4wMzU4N0MxMC43OTQ1IDYuOTAyNjcgMTEuMTAyNSA3LjcwMDM3IDExLjQ5NzQgOC40NDA4QzExLjgyNzIgOS4wNjI3NyAxMS45OTUgMTAuMjE3OSAxMC44NTk3IDEwLjg3MTRDMTAuNDQ5MyAxMS4wOTk3IDkuOTY1ODUgMTEuMTU4MiA5LjUxMjkzIDExLjAzNDFDOS4wNjAwMSAxMC45MTAxIDguNjczNzMgMTAuNjEzNSA4LjQzNjk3IDEwLjIwOEM3Ljk5MjcxIDkuNDk3MTYgNy40NDk3MiA4LjgyNTgzIDYuNzA1MzQgOC4zOTczN0M2LjAyNTQ1IDguMDA1MTkgNS4yNTQzMiA3Ljc5ODg2IDQuNDY5NDMgNy43OTkwOUMzLjY4NDU0IDcuNzk5MzMgMi45MTM1MyA4LjAwNjEzIDIuMjMzODggOC4zOTg3MUMxLjU1NDIyIDguNzkxMjkgMC45ODk4NTQgOS4zNTU4MiAwLjU5NzQ3NyAxMC4wMzU2QzAuMjA1MTAxIDEwLjcxNTQgLTAuMDAxNDY0ODQgMTEuNDg2NCAtMC4wMDE0NjQ4NCAxMi4yNzEzQy0wLjAwMTQ2NDg0IDEzLjA1NjIgMC4yMDUxMDEgMTMuODI3MyAwLjU5NzQ3NyAxNC41MDcxQzAuOTg5ODU0IDE1LjE4NjggMS41NTQyMiAxNS43NTE0IDIuMjMzODggMTYuMTQzOUMyLjkxMzUzIDE2LjUzNjUgMy42ODQ1NCAxNi43NDMzIDQuNDY5NDMgMTYuNzQzNkM1LjI1NDMyIDE2Ljc0MzggNi4wMjU0NSAxNi41Mzc1IDYuNzA1MzQgMTYuMTQ1M0M3LjQ1NTY1IDE1LjcxMDkgNy45OTI3MSAxNS4wNDU1IDguNDM2OTcgMTQuMzM0N0M4LjgwMjI1IDEzLjc0MjMgOS43MTI0OSAxMy4wMDc4IDEwLjg1OTcgMTMuNjcxMkMxMS4yNjI2IDEzLjkxMjYgMTEuNTU0OSAxNC4zMDIzIDExLjY3MzggMTQuNzU2OEMxMS43OTI2IDE1LjIxMTIgMTEuNzI4NiAxNS42OTQxIDExLjQ5NTUgMTYuMTAxOEMxMS4xMDA2IDE2Ljg0MjMgMTAuNzk0NSAxNy42NCAxMC43OTQ1IDE4LjUwNjhDMTAuNzk0NiAxOS4yOTIxIDExLjAwMTMgMjAuMDYzNSAxMS4zOTM5IDIwLjc0MzZDMTEuNzg2NiAyMS40MjM2IDEyLjM1MTMgMjEuOTg4NCAxMy4wMzEzIDIyLjM4MTFDMTMuNzExNCAyMi43NzM4IDE0LjQ4MjggMjIuOTgwNiAxNS4yNjgxIDIyLjk4MDdDMTYuMDUzNCAyMi45ODA4IDE2LjgyNDggMjIuNzc0MiAxNy41MDUgMjIuMzgxN0MxOC4xODUxIDIxLjk4OTIgMTguNzUgMjEuNDI0NyAxOS4xNDI5IDIwLjc0NDdDMTkuNTM1NyAyMC4wNjQ3IDE5Ljc0MjYgMTkuMjkzNCAxOS43NDI5IDE4LjUwODFDMTkuNzQzMiAxNy43MjI4IDE5LjUzNjggMTYuOTUxMyAxOS4xNDQ1IDE2LjI3MTFDMTguNzUyMSAxNS41OTA4IDE4LjE4NzcgMTUuMDI1OCAxNy41MDc4IDE0LjYzMjhWMTQuNjQ4NloiIGZpbGw9IiMwMDhDRkYiPjwvcGF0aD48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMF8yMjUxXzExODU1Ij48cmVjdCB3aWR0aD0iOTMuNTkzMSIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiPjwvcmVjdD48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
export const RippleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-ripple-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

RippleColorful.displayName = 'RippleColorful';