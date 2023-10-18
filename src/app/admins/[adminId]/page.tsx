interface Props {
  params: {
    adminId: number;
  };
}
const Admins = (props: Props) => {
  const { adminId } = props.params;
  return <div> {adminId}</div>;
};

export default Admins;
