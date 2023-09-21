

const card = (props) => {
  return (
    <div className="border border-black/10 w-[90%] ml-[1rem] p-5 rounded-md shadow shadow/black-90">{props.children}</div>
  )
}

export default card