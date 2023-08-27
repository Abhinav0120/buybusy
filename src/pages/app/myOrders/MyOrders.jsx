import styles from "./Myorders.module.css"
function MyOrders(){
    return(
        <>
            <div className={styles.ordersContainer}>
                <h1>Your Orders</h1>
                <div className={styles.tableContainer}>
                    <h2>Ordered On:- 2023-08-25</h2>
                    <table className={styles.orderTable}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Fjallraven - Foldsack No...</td>
                                <td>&#x20b9; 1099</td>
                                <td>1</td>
                                <td>&#x20b9; 1099</td>
                            </tr>
                            <tr>
                                <td>Fjallraven - Foldsack No...</td>
                                <td>&#x20b9; 1099</td>
                                <td>1</td>
                                <td>&#x20b9; 1099</td>
                            </tr>
                            <tr>
                                <td>Fjallraven - Foldsack No...</td>
                                <td>&#x20b9; 1099</td>
                                <td>1</td>
                                <td>&#x20b9; 1099</td>
                            </tr>
                        </tbody>
                        <tr className={styles.totalPrice}>
                            <td>&#x20b9; 1798</td>
                        </tr>
                    </table>
                </div>
            </div>

        </>
    )
}
export default MyOrders;