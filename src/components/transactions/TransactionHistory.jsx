import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {

  return (
    <div>
      <table className ={styles.table}>
    <thead className = {styles.mainTitle}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
   
    <tbody>
     {items.map(({ id, type, amount, currency })=>(
 
      
      <tr className = {styles.tableList} key = {id}>
         <td className = {styles.tableItem}>{type}</td>
         <td className = {styles.tableItem}>{amount}</td>
         <td className = {styles.tableItem}>{currency}</td>
       </tr>
      
    

    ))}
    </tbody>     
  </table>
  </div>
  );
};

export default TransactionHistory;