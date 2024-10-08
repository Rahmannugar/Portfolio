interface Props {
  setOpen: any;
}

const ToggleButton: React.FC<Props> = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev: any) => !prev)}>ToggleButton</button>
  );
};
export default ToggleButton;
