export default function TabButton({children, onSelect, active}) {

  const handleClick = () => {
    console.log("TabButton clicked");
    onSelect();
  };

  return (
    <li>
      <button 
        onClick={handleClick}
        className={active ? 'active' : ''}
      >
        {children}
      </button>
    </li>
  );
}

