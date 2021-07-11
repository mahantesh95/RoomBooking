import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

const Home = () => {
    const [roomCount, setRoomCount] = useState(0);
    const [adultCount, setAdultCount] = useState(0);
    const [childCount, setChildCount] = useState(0);

    const notify = () => toast("Room can be Minimum 1 and Maximum 5 ");

    function numberOfRoom() {

        let temp = adultCount + childCount + 1;
        let temp1 = Math.round(temp / 4);
        if (temp1 >= 5) {
            return (notify())
        }
        return temp1;
    }


    const roomDecrement = () => {
        setRoomCount(roomCount - 1)
    }
    const roomIncrement = () => {
      console.log(roomCount)
       /* setRoomCount(roomCount + 1)*/
    }
    const adultCountDecrement = () => {
        if (adultCount > 0) {
            setAdultCount(adultCount - 1)
        }
    }
    const adultCountIncrement = (prev) => {
        setAdultCount(adultCount + 1)
    }

    const childCountDecrement = () => {
        if (childCount > 0) {
            setChildCount(childCount - 1)
        }
    }
    const childCountIncrement = (prev) => {
        setChildCount(childCount + 1)
    }
    return (
        <div className='wrapper'>


            <div className='row'>
                <Button onClick={roomDecrement}>-</Button>
                <h5>Room Count {numberOfRoom()}</h5>
                <Button onClick={roomIncrement} >+</Button>
            </div>
            <br/>
            <div className='row'>
                <Button className={`${adultCount == 0 ? 'disable' : ''}`} variant="primary"
                        onClick={adultCountDecrement}>-</Button>
                <span> Adult = {adultCount} </span>
                <Button variant="primary" onClick={adultCountIncrement}>+</Button>
            </div>
            <br/>
            <div className='row'>
                <Button className={`${childCount == 0 ? 'disable' : ''}`} variant="primary"
                        onClick={childCountDecrement}>-</Button>
                <span> children = {childCount} </span>
                <Button variant="primary" onClick={childCountIncrement}>+</Button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Home;