const Error = ({children}) => {
  return (
    <div className='text-center bg-red-800 rounded-lg p-3 text-white font-bold uppercase mb-3'>
        {children}
    </div>
  )
}

export default Error
