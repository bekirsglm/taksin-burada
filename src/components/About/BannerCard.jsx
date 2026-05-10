
const BannerCard = ({icon, title , description}) => {
  return (
    <div className="max-w-87.5 mx-auto">
       <div className="flex items-center gap-4">
        <div>
            <span className="h-15 w-15 rounded-full text-black bg-primary flex items-center justify-center">
                {icon}
            </span>
        </div>
        <div className="space-y-2">
            <h1 className="text-xl uppercase text-primary font-bold">
                {title}
            </h1>
            <p className="text-white">{description}</p>
        </div>
       </div>
    </div>
  )
}

export default BannerCard
