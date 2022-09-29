import {useState, useEffect} from 'react';
import useWindowSize from './useWindowSize';

export default function useScrollTableConfig(ref, depends) {
  const size = useWindowSize();
  const [scrollConfig, setScrollConfig] = useState({});
  
  useEffect(() => {
    const allEl = ref.current.parentNode.childNodes
    let parentHeight = ref.current.parentElement.parentElement.clientHeight
    let tableHeight = ref.current.getElementsByClassName('ant-table-tbody')
    let siblingHeight = 0
    let scroll = {}

    allEl.forEach(element => {
      if (ref.current !== element) {
        siblingHeight += element.offsetHeight
      }
    })
    
    if (size.width < size.height) {
      parentHeight = parentHeight/2
    }

    if ((siblingHeight + tableHeight[0].clientHeight + 50) > parentHeight) {
      const heightScroll = parentHeight - (siblingHeight + 70);
      scroll = {y: heightScroll, scrollToFirstRowOnChange: false}
    }
    setScrollConfig(scroll)
  }, [size, depends]);

  return scrollConfig;
}