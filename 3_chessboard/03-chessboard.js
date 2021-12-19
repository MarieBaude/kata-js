module.exports = function chessBoard(size) {
    for(let i = 0; i < size; i++) {
        if (i % 2 === 0) {
           console.log(' ' + '# # # #');
         } else {
           console.log('' + '# # # #');
         }
      }
      return chessBoard(8);
   }