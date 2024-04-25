import { Tooltip, Typography } from 'antd';
import { TooltipPlacement } from 'antd/es/tooltip';
import style from './CustomTooltip.module.scss';
import { ReactNode } from 'react';
import { TooltipProps } from 'antd/lib';

type ICustomTooltip = TooltipProps & {
  rows?: number;
  title?: ReactNode;
  className?: string;
  rootClassName?: string;
  placement?: TooltipPlacement;
  arrow?: boolean;
  children?: ReactNode;
  width?: number;
};
const CustomTooltip = (props: ICustomTooltip) => {
  const {
    rows = 2,
    title,
    className,
    rootClassName,
    placement,
    arrow = true,
    children,
    width,
    ...rest
  } = props;

  const getTitleValue = () => {
    if (typeof children === 'string' && !title) {
      return children.trim();
    }
    if (Array.isArray(children) && !title) {
      return children.map((item) => item).join('');
    } else {
      return title;
    }
  };

  const getChildrenValue = () => {
    if (typeof children === 'string' && !title) {
      return children.trim();
    }
    if (Array.isArray(children) && !title) {
      return children
        .map((item) => item?.trim())
        .join('')
        .trim();
    } else {
      return children;
    }
  };

  const finalTitle = getTitleValue();
  const finalChildren = getChildrenValue();
  const { Paragraph } = Typography;

  return (
    <Tooltip
      placement={placement}
      title={
        finalChildren && finalTitle ? (
          <div className={style.customTooltip}>{finalTitle} </div>
        ) : (
          ''
        )
      }
      color="#ffffff"
      arrow={arrow}
      className={`${className} ${style.tooltip}`}
      rootClassName={rootClassName}
      {...rest}
    >
      {
        <Paragraph
          className={style.paragraph}
          ellipsis={{ rows, expandable: false }}
          style={{ width }}
        >
          {finalChildren !== '' && finalChildren ? finalChildren : 'N/A'}
        </Paragraph>
      }
    </Tooltip>
  );
};

export default CustomTooltip;
