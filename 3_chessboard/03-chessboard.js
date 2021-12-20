export function chessBoard(size) {
    let array = [];
    for(let i = 0; i < size; i++) {
        if (i % 2 === 0) {
          array.push(' # # # #');
          console.log(' # # # #');
         } else {
          array.push('# # # #');
          console.log('# # # #');
         }
      }
    return array;
} 