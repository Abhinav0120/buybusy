import styles from "./Myorders.module.css"
import {useState, useEffect} from "react";
import { onSnapshot, doc, } from "firebase/firestore";
import { db } from "../../../firebaseInit";
import useAuthContext from "../../../context/AuthContext";
import Spinner from 'react-spinner-material';
import React, { Component } from 'react';

function MyOrders(){
    const [orders, setOrders] = useState([]);
    const {currentUser} = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        if(currentUser!==null){
            const unsub = onSnapshot(doc(db, "orders", currentUser.uid), (snapshot) => {
                const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
                const data = snapshot.data();
                console.log(data);
                if(data){
                    setIsLoading(false);
                    console.log(data.orderList);
                    setOrders(data.orderList);
                }else{
                    setIsLoading(false);

                    setOrders([]);
                }
               
            });
            return () => unsub();
        };

    },[])
    
    return(
        <>
            {
                isLoading?
                <div className={styles.snipperStyle}>
                    <Spinner radius={100} color={"#333"} stroke={4} visible={true} />
                </div>:

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
                                <tr className={styles.totalPrice}>
                                    <td>&#x20b9; {order.totalOrderAmount}</td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>
                )) : <h1 className={styles.noOrderFound}>No orders found</h1>
                }
                </div>
            }   

        </>
    )
}
export default MyOrders;