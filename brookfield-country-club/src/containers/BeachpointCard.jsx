const BeachpointCard = ({img, date, ex, title}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center mb-5">
        <div className="flex flex-col">
            <img src={img} alt="Beachpoints" className="h-[270px] object-cover"/>
            <p>{date}</p>
            <h4 className="font-Yeseva One">{title}</h4>
            <p className="font-semibold">{ex}</p>
        </div>
    </div>
  )
}

export default BeachpointCard