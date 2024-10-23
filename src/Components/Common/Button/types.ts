export type ButtonProps = {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  active?: boolean;
  onClickCallback?: () => void;
};
