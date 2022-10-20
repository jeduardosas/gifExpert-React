import{ useState } from 'react';
import {AddCategory,GifGrid} from './Components';


const GifExpertApp = () => {
    const [categories, setCategories] = useState([])
    

    const onAddCategory = (newCategory)=>{
       
        /* if(newCategory.includes(categories)){
            return
        } */
        setCategories([newCategory,...categories])
    }


   

  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory
            onAddCategory={onAddCategory} />
        
            
            {categories.map( category =>(
                    <GifGrid 
                        key={category}
                        category={category}/>
                )
                    ) 
            }
    </>
  )
}

export default GifExpertApp