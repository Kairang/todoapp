import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import RenderTasks from "../components/Main";
import { getCurrentItems } from "../redux/actions";

function PaginatedItems({ itemsPerPage, status }) {
    const dispatch = useDispatch()
    const tasksCurrent = useSelector( state => state.todoList)
    const tasksFilterByStatus = tasksCurrent.filter(task => task.status === status)
    const items = status ? tasksFilterByStatus : tasksCurrent
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);
    
    dispatch(getCurrentItems(currentItems))
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className="item-group">
            <RenderTasks />
        </div>
        <div className="pagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
      </>
    );
}

export default PaginatedItems;