

const card = (props) => {
  return (
    <div className="border border-black/10 w-[90%] lg:w-full ml-[1rem] lg:m-auto p-5 lg:py-8 rounded-md shadow shadow/black-90">{props.children}</div>
  )
}

export default card