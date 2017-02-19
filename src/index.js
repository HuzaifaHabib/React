import React from 'react';
import ReactDOM from 'react-dom';


  var headers = [
  "Book", "Author", "Language", "Published", "Sales"];

  var info = [
["The Lord of the Rings", "J. R. R. Tolkien",
"English", "1954–1955", "150 million"],
["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry",
"French", "1943", "140 million"],
["Harry Potter and the Philosopher's Stone", "J. K. Rowling",
"English", "1997", "107 million"],
["And Then There Were None", "Agatha Christie",
"English", "1939", "100 million"],
["Dream of the Red Chamber", "Cao Xueqin",
"Chinese", "1754–1791", "100 million"],
["The Hobbit", "J. R. R. Tolkien",
"English", "1937", "100 million"],
["She: A History of Adventure", "H. Rider Haggard",
"English", "1887", "100 million"],
];

var Table = React.createClass({
  PropTypes:{
  headers:React.PropTypes.arrayOf(
    React.PropTypes.string
  ),
  initialData: React.PropTypes.arrayOf(
    React.PropTypes.arrayOf(
      React.PropTypes.string
    )
  )
  
  },
  _sort: function (e){
    var column = e.target.cellIndex;
    var info = this.state.info.slice();
    info.sort(function(a,b){
      return a[column] >b[column];
    });
    this.setState({
      info:info
    });
  },
  render: function () {
    return( 
    <table>
       <thead onClick={this._sort}>
          <tr>{headers.map(function (title,idx){
            return <th key={idx}>{title}</th>
            
          }
            )}</tr>
       </thead>
       <tbody>
       {info.map(function(row){
         return (
           <tr>{row.map(function(cell){
             return <td>{cell}</td>
           })}</tr>
         )
       })
       }
       </tbody>
    </table>
    
    );
 
  }
}) 




ReactDOM.render(<Table />,
document.getElementById("root")
)