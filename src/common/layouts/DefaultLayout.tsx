import Content from './components/Content';
import Header from './components/Header';
import { ReactNode, HTMLAttributes } from 'react';

type DefaultLayoutProps = {
  children: ReactNode;
}
type DivProps = HTMLAttributes<HTMLDivElement>;

function DefaultLayout(props: DefaultLayoutProps & DivProps) {
  const { children } = props;
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default DefaultLayout;
