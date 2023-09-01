import styles from "./Myorders.module.css"
import {useState, useEffect} from "react";
import { onSnapshot, doc, } from "firebase/firestore";
import { db } from "../../../firebaseInit";
import useAuthContext from "../../../context/AuthContext";
function MyOrders(){
    const [orders, setOrders] = useState([]);
    const {currentUser} = useAuthContext();

    useEffect(()=>{
        if(currentUser!==null){
            const unsub = onSnapshot(doc(db, "orders", currentUser.uid), (snapshot) => {
                const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
                const data = snapshot.data();
                console.log(data);
                if(data){
                    // if(data.items.length!==0){
                    console.log(data.orderList);
                    setOrders(data.orderList);
                    // }
                }else{
                  setOrders([]);
                }
               
            });
            return () => unsub();
        };
        

    },[])
    return(
        <>
            
                <div className={styles.ordersContainer}>
                {orders.length>0&& <h1>Your Orders</h1>}
                {orders.length>0?
                    orders.map((order)=>(
                    <div className={styles.tableContainer} key={order.createdAt.toMillis()}>
                        {/* <h2>{order.createdAt}</h2> */}
                        <h2>{new Date(order.createdAt.seconds * 1000).toLocaleDateString()}</h2>
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
                                {
                                    order.items.map((item)=>(
                                    <tr key={item.docId}>
                                        <td>{item.title}</td>
                                        <td>&#x20b9; {item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>&#x20b9; {item.totalCartPrice}</td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                            <tr className={styles.totalPrice}>
                                <td>&#x20b9; {order.totalOrderAmount}</td>
                            </tr>
                        </table>
                    </div>
                   )) : <h1 className={styles.noOrderFound}>No orders found</h1>
                }
            </div>
         

        </>
    )
}
export default MyOrders;