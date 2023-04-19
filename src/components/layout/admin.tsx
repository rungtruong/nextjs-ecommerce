import type { LayoutProps } from '../../models/common';

function AdminLayout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

export { AdminLayout };
