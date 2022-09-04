import React, { useState,useRef, useEffect} from 'react';
export default function TypeBtns(){
  const types = ["Nummer", "Zoekterm"]
  const [currentType, setCurrentType] = useState(types[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lay, setLay] = useState();
  const [children, setChildren] = useState([]);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  useEffect(() => {
      setTimeout(() => {
        const sidebarItem = sidebarRef.current.querySelector('.categoriesContainer');
        console.log(sidebarItem)
        indicatorRef.current.style.width = `${Math.min(sidebarItem.clientWidth/3)}px`;
      });
}, []);
    // change active index
    useEffect(() => {
      setActiveIndex(null)
      if(currentType){
        const activeItem = types.findIndex(item => item === currentType);
        setActiveIndex(currentType.length === 0 ? 0 : activeItem);
        }
  }, [currentType]);

    return (
      <div ref={sidebarRef}>
            <div className='categoriesContainer' required data-cy='categorieContainer'>
            <div
            ref={indicatorRef}
            className="highlightCategory"
            style={{
                transform: `translateX(${(activeIndex * (110))}px)`,
                }}></div>
                          {types.map((item,index) => {
            return(<div key={item} className={`CategoryItem ${activeIndex === index ? 'active' : ''}`} style={{"zIndex":"2"}} onClick={() => setCurrentType(item)}>
                <div>
                  <p>{item}</p>
                </div>
              </div>)
              })}
            </div>
            </div>
    )
}