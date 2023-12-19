const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookID: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  average_rating: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  isbn: {
    type: Number,
  },
  language_code: {
    type: String,
  },
  ratings_count: {
    type: mongoose.Schema.Types.Mixed,
  },
  price: {
    type: Number,
  },
  isbn: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//   kind: String,
//   totalItems: Number,
//   items: [
//     {
//       kind: String,
//       id: {
//         type: String, 
//         required: true
//       },
//       etag: String,
//       selfLink: String,
//       volumeInfo: {
//         title: String,
//         authors: [String],
//         publisher: String,
//         publishedDate: String,
//         description: String,
//         industryIdentifiers: [
//           {
//             type: String,
//             identifier: String,
//           },
//         ],
//         readingModes: {
//           text: Boolean,
//           image: Boolean,
//         },
//         pageCount: Number,
//         printType: String,
//         categories: [String],
//         maturityRating: String,
//         allowAnonLogging: Boolean,
//         contentVersion: String,
//         panelizationSummary: {
//           containsEpubBubbles: Boolean,
//           containsImageBubbles: Boolean,
//         },
//         imageLinks: {
//           smallThumbnail: String,
//           thumbnail: String,
//         },
//         language: String,
//         previewLink: String,
//         infoLink: String,
//         canonicalVolumeLink: String,
//       },
//       saleInfo: {
//         country: String,
//         saleability: String,
//         isEbook: Boolean,
//         listPrice: {
//           amount: Number,
//           currencyCode: String,
//         },
//         retailPrice: {
//           amount: Number,
//           currencyCode: String,
//         },
//         buyLink: String,
//         offers: [
//           {
//             finskyOfferType: Number,
//             listPrice: {
//               amountInMicros: Number,
//               currencyCode: String,
//             },
//             retailPrice: {
//               amountInMicros: Number,
//               currencyCode: String,
//             },
//           },
//         ],
//       },
//       accessInfo: {
//         country: String,
//         viewability: String,
//         embeddable: Boolean,
//         publicDomain: Boolean,
//         textToSpeechPermission: String,
//         epub: {
//           isAvailable: Boolean,
//         },
//         pdf: {
//           isAvailable: Boolean,
//         },
//         webReaderLink: String,
//         accessViewStatus: String,
//         quoteSharingAllowed: Boolean,
//       },
//       searchInfo: {
//         textSnippet: String,
//       },
//     },
//   ],
// });

// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;
