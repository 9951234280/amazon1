export const initialstate = {
    basket: [],
    
    
    
}
 export const reducer=(state,action)=>{ 
  
  switch(action.type){
    case 'add':
        
        return {
        ...state,
        basket:[action.item]
       
        
        }
        default:
            return{
                state
            }
            
  }
 
}
export default reducer