export interface SectionProps {
  type?: TypeProps;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export type TypeStyledProps = {
  $type?: TypeProps;
};

export type TypeProps = TypeString[];

export type TypeString = 'LayoutContent' | 'LayoutMain' | 'LayoutHeader';
