export type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  active?: boolean;
  disabled?: boolean;
  onClickCallback?: () => void;
};
