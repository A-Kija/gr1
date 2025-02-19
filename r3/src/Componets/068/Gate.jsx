export default function Gate({isOpen, children}) {

    children.forEach(child => console.log(child.type.name));



  return (
    <>
      {isOpen ? children : 'Closed'}
    </>
  )
}