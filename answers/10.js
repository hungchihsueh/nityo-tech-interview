/** Read about the code below, achieving that make input element in “SearchInput” to be
focused while search button on click **/
/** Code block start */
function SearchButton() {
return (
<button> Search </button>
);
}
function SearchInput() {
return (
<input/>
);
}
export default function Page() {
return (
<>
<nav>
<SearchButton />
</nav>
<SearchInput />
</>
);
}
/** Code block end */


// answer: To make the input element in the "SearchInput" component focused when the search button is clicked, we can use the useRef hook to create a reference to the input element and then call the focus method on that reference when the button is clicked. Here’s how we can modify the code:
import { useRef } from 'react';

function SearchButton({ onClick }) {
  return (
    <button onClick={onClick}> Search </button>
  );
}

function SearchInput({ inputRef }) {
  return (
    <input ref={inputRef} />
  );
}

export default function Page() {
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <nav>
        <SearchButton onClick={handleSearchClick} />
      </nav>
      <SearchInput inputRef={inputRef} />
    </>
  );
}

