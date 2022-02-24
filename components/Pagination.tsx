import { FaChevronLeft, FaChevronRight, FaEllipsisH } from "react-icons/fa";

const Pagination = () => {
    return (
      <div className="flex justify-start items-center">
          <button className="hover:bg-blue-500 hover:text-white text- mr-3 text-xs rounded-md border text-neutral-400 border-neutral-400 w-10 h-10 p-3"><FaChevronLeft/></button>
          <button className="hover:bg-blue-500 hover:text-white mr-3 text-xs rounded-md border text-neutral-400 border-neutral-400 w-10 h-10">1</button>
          <p className="mr-3 text-xs"><FaEllipsisH/></p>
          <button className="hover:bg-blue-500 hover:text-white mr-3 text-xs rounded-md border text-neutral-400 border-neutral-400 w-10 h-10">16</button>
          <button className="hover:bg-blue-500 hover:text-white text-xs rounded-md border text-neutral-400 border-neutral-400 w-10 h-10 p-3"><FaChevronRight/></button>
      </div>
    )
}
  
export default Pagination;