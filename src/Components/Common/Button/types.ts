export type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  onClickCallback?: () => void;
};
