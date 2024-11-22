import unnamed from '../assets/unnamed.jpg'
import noti from '../assets/Noti.png'
const Microsoft = () => {
    return (
      <div className=" rounded-sm h-[550px] w-[800px] bg-white shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-end items-center py-5 bg-white h-[25px]">
            <div className="flex h-full">
            <button className=" px-5 h-full flex items-center justify-center transition-colors">
              <div className="w-4 h-[2px] bg-gray-600"></div>
            </button>
            
            <button className=" px-5 h-full flex items-center justify-center transition-colors">
              <div className="w-3.5 h-3.5 border-2 border-gray-600"></div>
            </button>
            
            <button className=" px-5 h-full flex items-center justify-center transition-colors">
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>
        </div>
        
        <div className="p-4 flex gap-2 border-b  justify-between shadow-lg ">
          <div className='flex gap-2'>
          <img src={unnamed} alt="Microsoft image" className="h-[24px] w-[24px]"/>
          <p className="text-black text-lg font-bold">Microsoft</p>
          </div>
          <div className='flex gap-2'>
            <button className="text-blue-500  font-geologica border-2 text-xl p-2 rounded-lg"> License</button>
            <img src={noti} alt="" className="h-[40px] w-[100px]" />
          </div>
          
          
        </div>
      </div>
    );
  };

  export default Microsoft