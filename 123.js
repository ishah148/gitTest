function nbDig(n, d) {
    let res = 0;
    let arr = [];
    for(let i = 0;i <= n; i++){
      arr[i] = i**2;
    }
    let tmp = arr.toString();
    // n = arr.toString().length;
    // console.log(n)
    for(let i = 0; i < 26537536;i++){
      if(tmp[i] == d){
        res++;
      }
    }
    return res
  }
// function nbDig(n, d) {
//     let count = 0;
//     for(let i = 0; i <= n; i++) {
//       (i**2).toString().split('').forEach((item) => +item === d ? count++ : count);
//     }
//     return count;
// }
// console.log('nbD ===',nbDig(2000000, 1))
let commentList = [
  {
    id: '#com1',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Cool!',
    postId: '#post1',
  },
  {
    id: '#com2',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Cool!',
    postId: '#post2',
  },
  {
    id: '#com3',
    author: { id: '#aut2', name: 'Anthony Hopkins'},
    text: 'Nice comment, John! :)',
    postId: '#post1',
  },
  {
    id: '#com4',
    author: { id: '#aut1', name: 'John Doe'},
    text: 'Thanks!',
    postId: '#post1',
  },
];

  function getCommentsByPostId(commentList, postId) {
    console.log(`\nGet all comments for post with id = ${postId}:`);
    
    let comments = commentList
    .filter( comment => comment.postId === postId )
    .map( comment => comment.text );
  
    console.log('  comments:', comments);
  }
  
  function getAuthorNames(commentList) {
    // console.log('\nGet author names:');
  
    let authors = commentList
      .map( comment => comment.author )
      .filter( (author, index, currentList) =>
        currentList.findIndex( item => item.id === author.id ) === index
      )
      .map( author => author.name );
  
    // console.log('  authors:', authors);
  }
  
  function getAuthorsStatistics(commentList) {
    console.log('\nGet authors statistics: <AuthorID, CommentCount>');
  
    let statistics = commentList
      .map( comment => comment.author.id )
      .reduce( (dict, item) => {
        dict[item] = (dict[item] || 0) + 1;
        return dict;
      }, {});
  
    // console.log('  statistics:', statistics);
  }
  
  
  console.log('s01e07 - Array Bypass');
  
  
  // console.log('\n[commentList]:');
  // commentList.forEach( comment => console.log(comment) );
  
  // getCommentsByPostId(commentList, '#post1');
  // getAuthorNames(commentList);
  // getAuthorsStatistics(commentList);