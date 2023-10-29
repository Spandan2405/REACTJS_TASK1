import React from "react";

function WordCounter() {
    const [state, setState] = React.useState({
      wordCount: 0, 
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
      });
    }
    
    return(
      <div className='container'>
      <table>
        <th><h3>Responsive Paragraph Word <br/>Counter</h3></th>
        <tr>
          <td><textarea placeholder="Write something" onChange={handleKeyPress}></textarea></td>
        </tr>
        <tr>
          <td class="a"><label>Word Count:</label><span className='num'> {state.wordCount}</span> </td>
        </tr>
      </table>
    </div>
    )
  }
  export default WordCounter;