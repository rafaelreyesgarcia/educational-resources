contract MyContract {
  // dynamic sized array
  uint[] public arr;
  // fixed sized arrays
  uint[] public arr2 = [1, 2, 3];
  // all elements initialized to zero
  uint[10] public myFixedSizeArray;

  struct structName {
    uint typeName1;
    bool typeName2;
    address typeName3;
  }
}

contract Library {
  struct Book {
    string title;
    string author;
    uint bookId;
    address registrant;
  }

  Book[] public books;

  function addBook(string memory _title, string memory _author) public {
    books.push(Book(_title, _author, books.length, msg.sender))
  }

  function getBook(uint _bookId) public view returns (string memory _title, string memory _author) {
    return(books[_bookId].title, books[_bookId].author);
  }

  function updateBook(uint _bookId, string memory _newTitle, string memory _newAuthor) public {
    require(msg.sender == books[_bookId].registrant, 'you must be the registrant to modify the record.');
    books[_bookId].title = _newTitle;
    books[_bookId].author = _newAuthor;
  }

  struct Task {
    string title;
    bool completed;
  }

  Task[] public tasks;

  function addTask(string memory _title) public {
    // key value mapping
    tasks.push(Task({text: _text, completed: false}));
  }

  
}