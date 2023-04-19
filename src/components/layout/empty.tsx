import type { LayoutProps } from '../../models';

function EmptyLayout(props: LayoutProps) {
  return <div>{props.children}</div>;
}

export { EmptyLayout };
