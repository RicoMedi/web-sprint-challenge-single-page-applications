import React from 'react'

// We'll need a Link from 'react-router-dom'


   

  

export default function Pizza(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props



 const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


  return (
    <form id='pizza-form' onSubmit={onSubmit}>
       
              
              <h2> Create your order </h2>
         <div className='errors'>
          
              <div>{errors.name}</div>
              <div>{errors.size}</div>
              <div>{errors.toppings}</div>
              </div>
    

    <div >
      <h4>Order Information</h4>

      <label > Name:&nbsp;
        <input id='name-input'
          value={values.name}
          onChange={onChange}
          name='name'
          type='text'
        />
      </label>
    
     </div>
        <div>
                <h4>Size</h4>
                <label>Choose One: &nbsp;  
                
                <select 
                id='size-dropdown'
                  onChange={onChange}
                  value={values.size}
                  name='size'
                >
                  <option value=''>- Select an option -</option>
                  <option value='small'>small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                  <option value='xl'> Extra Large</option>
                  <option value='none'>None</option>
                
                </select>
              </label>
              </div>
    
    
    <div className='form-checkboxes'>
      <h4>Toppings</h4>

      <label>Peperoni &nbsp;
        <input
          type='checkbox'
          name='peperoni'
          checked={values.peperoni}
          onChange={onChange}
        />
      </label>

      <label> Cheese &nbsp;
        <input
          type='checkbox'
          name='cheese'
          checked={values.cheese}
          onChange={onChange}
        />
      </label>

      <label> Olives &nbsp;
        
        <input
          type='checkbox'
          name='olives'
          checked={values.olives}
          onChange={onChange}
        />
      </label> 
      <label> Onions &nbsp;
          <input
          type='checkbox'
          name='onions'
          checked={values.onions}
          onChange={onChange}
          />
      </label>
      
     
      <div>
        <label id="special-text"> Special Instructions:
        <input 
          value={values.specialInstructions}
          onChange={onChange}
          name='specialInstructions'
          type='text'
        />

      </label>
      </div>
      
      
      
      </div>
      <div className='form-button' >
        <button  id='order-button' className='md-button'disabled={disabled}> Submit </button>
      </div>
        
    </form>
  )
  }