import React, {useState} from 'react';


const BookCard = ({book	}) =>{

	const [isColorChanged, setIsColorChanged] = useState(false);

  	const handleClick = () => {
    	setIsColorChanged(!isColorChanged);
  	};
	const buttonStyle = {
		backgroundColor: isColorChanged ? 'red' : 'blue',
		color: 'white',
		padding: '10px',
		borderRadius: '5px',
		cursor: 'pointer',
	  };
	return(
		<div className="book-list-item">
			<p>{book.title.toString().substring(0, 80)}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Author(s): {book.authors.toString().substring(0, 80)}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> ISBN: {book.isbn}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Language: {book.language_code ? 'English':''}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Rating: {book.average_rating}</p>
			<p className="book-details"><i className="fas fa-rupee-sign"></i> Rating Count: {book.ratings_count}</p>
			<p className="book-price"><i className="fas fa-rupee-sign"></i> Price: {book.price}</p>
			

			<button style={buttonStyle} onClick={handleClick}>
      			{isColorChanged ? 'Already Rated' : 'Give Rating'}
    		</button>
			
		</div>
	);
	

}

export default BookCard;


{/* <button 
				// onClick={()=>
				// 	addBookToCart(book)
				// } 
				className={`cart-button`}
			>
				<span>give rating</span>
				{doesBookExistInCart? <span><i className="fas fa-check"></i> Rated</span>: <span>Give Ratings</span>}
			</button> */}