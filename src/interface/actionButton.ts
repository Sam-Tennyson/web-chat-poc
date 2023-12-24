export interface IActionButton {
  text: string | JSX.Element;
  disabled?: boolean;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  customClass?: string;
  isSubmit?: boolean;
  icon?: any;
  isSidebar?: boolean;
}