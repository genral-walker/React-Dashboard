
import React from 'react';

const useIntersection =(entries)=>{
    const show = new IntersectionObserver( entries => {
        entries.forEach(elem => {
           if (elem.isIntersecting) {
               elm.classList.add('show')
           } else {
            elm.classList.remove('show') 
           }
        })
    }
);
profileShow.observe(elm)
};


export default useIntersection;