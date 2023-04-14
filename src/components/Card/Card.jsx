


const Card = ({data}) => {
  return (
    <div className={data.status}>
        <div className="">
            <h1 className="  mb-3 font-bold ">{data.status}</h1>
        </div>
        <div>
            <h2 className="text-3xl mb-3 ">{data.value.toLocaleString()}</h2>
            <h2 className='font-bold mb-3'>last updated at: <br /><span className=' text-slate-500 font-extralight'>{ data.date }</span></h2>
            <h2 className=''>Number of active cases of COVID-19 <br /> <span>{ data.code }</span></h2>
        </div>
    </div> 
  )
}

export default Card

