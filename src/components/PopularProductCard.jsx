import { star } from "../assets/icons"

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 w-full flex-col max-sm:w-full">
      <img src={imgURL} alt={name} 
        className="w-[280px] h-[280px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} className="mb-20"/>
        <div>
        <p className="font-montserrat leading-normal  text-xl text-slate-gray ">(4.5)</p>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className=" text-2xl leading-normal font-montserrat text-coral-red">{price}</p>
        </div>
      </div>
    </div>
  )
}

export default PopularProductCard