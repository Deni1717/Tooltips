import classes from './Tooltips.module.css';
import { TooltipBox } from '../TooltipBox/TooltipBox';
import { ReactComponent as InfoIcon } from '../../img/ui/info_icon.svg';

export const TooltipQuestion = ({ content, className, placement }) => {
  return (
    <TooltipBox text={content} placement={placement}>
      <div
        className={`${classes.iconContainer} ${className ? className : ''}}`}
      >
        ?
      </div>
    </TooltipBox>
  );
};

export const TooltipInfo = ({ text, className = '', placement, align }) => {
  return (
    <TooltipBox text={text} placement={placement}>
      <InfoIcon className={`${classes.infoIcon} ${className}`} />
    </TooltipBox>
  );
};
