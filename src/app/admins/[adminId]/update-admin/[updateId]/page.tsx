interface Props {
  params: {
    updateId: number;
  };
}
const UpdateAdmins = (props: Props) => {
  const { updateId } = props.params;
  return <div>Updated admin :{updateId}</div>;
};

export default UpdateAdmins;
