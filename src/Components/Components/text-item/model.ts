declare type A = any;

export interface IProps {
  label?: string;
  children?: A;
  textItemProps?: ITextItemProps;
  className?: string;
}

export interface ITextItemProps {
  isCol?: boolean;
  spanNumber?: number;
  spanMobNumber?: number;
}
