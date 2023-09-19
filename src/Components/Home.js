import React, { useState, useEffect } from 'react'
import logo from './h.png'
import { BiLogoTelegram } from 'react-icons/bi';
const Home = () => {
    const [trades, settrades] = useState([])
    const fethData = async () => {
        const res = await fetch('http://localhost:3000/getdata');
        const data = await res.json()
        settrades(data)
    }
    const styles = {
        background: "#191d28"
    }
    const styles2 = {
        backgroundColor: "#2e3241"
    }

    const styles3 = {

        backgroundColor: "#5dc7c2"
    }

    const fontstyle = {
        color: "#5dc7c2"
    }
    const fontstyle2 = {
        color: "#fff"
    }
    const backgroundd = {
        backgroundColor: "#2e3241"
    }
    useEffect(() => {
        fethData();
    }, [])
    return (
        <>
            <div style={styles} className="min-h-screen ">


                <div className="header flex px-2 py-8 justify-between md:flex-row  w-10/12 mx-auto items-center flex-col " >

                    <img src={logo} alt="" className="w-3/6  md:py-1 py-4 md:w-1/6 " />


                    <ul className="flex justify-between text-white  md:py-1 py-4   ">
                        <li className="px-3 py-1  mx-2  cursor-pointer  " style={styles2} >INR</li>
                        <li className="px-3 py-1  mx-2  cursor-pointer  " style={styles2} >BTC</li>
                        <li className="px-3 py-1  mx-2  cursor-pointer  " style={styles2} >BUY BTC</li>

                    </ul>

                    <div>
                        <div className="telegram bg-blue-300   rounded-md px-2 py-1 text-white flex items-center  cursor-pointer mx-6 " style={styles3}>
                            <BiLogoTelegram />  <p className="mx-2 text-sm ">Connect Telegram </p>
                        </div>


                    </div>
                </div>


                <div className="contain items-center  font-mono w-10/12 mx-auto my-8 py-2  md:flex-row flex-col  flex justify-between">
                    <div className="card flex flex-col items-center ">
                        <p className="md:text-4xl  text-xl  " style={fontstyle}> 0.52%</p>
                        <p className="text-gray-400">5mins</p>
                    </div>
                    <div className="card flex flex-col items-center ">
                        <p className="md:text-4xl  text-xl  " style={fontstyle}> 1.56%</p>
                        <p className="text-gray-400">1 Hour</p>
                    </div>
                    <div className="card flex flex-col items-center ">
                        <h2 className="text-gray-400  my-1 ">Best Price to Trade </h2>
                        <p className="text-xl md:text-6xl  text-white  my-1 " >

                            ₹ 24,69,035</p>
                        <p className="text-gray-400  my-1 ">Average BTC/INR net price including commission</p>
                    </div>
                    <div className="card flex flex-col items-center ">
                        <p className="md:text-4xl  text-xl  " style={fontstyle}> 9.05 %</p>
                        <p className="text-gray-400">1 Day</p>
                    </div>
                    <div className="card flex flex-col items-center ">
                        <p className="md:text-4xl  text-xl  " style={fontstyle}>16.86 %</p>
                        <p className="text-gray-400">7 Days</p>
                    </div>
                </div>

                <div className="head flex justify-between text-white w-11/12 mx-auto text-center text-gray-500 font-bold text-xs   font-serif md:text-2xl ">
                    <p className="w-1/12">#</p>
                    <p className="w-2/12">Name  </p>
                    <p className="w-2/12">Last traded Price </p>
                    <p className="w-3/12">Buy/Sell Price </p>
                    <p className="w-2/12">Volume </p>
                    <p className="w-2/12">Base Unit  </p>

                </div>
                {trades.map((e,i) => {
                    return(
                    <div className="bodyy  md:text-2xl  flex text-white w-11/12 mx-auto justify-between  text-center py-3 my-6    text-xs   " style={backgroundd}>
                        <p className="w-1/12">{i+1}</p>
                        <p className="w-2/12" >  {e.name}</p>
                        <p className="w-2/12">₹ {e.last}</p>
                        <p className="w-3/12">₹ {e.buy} / ₹ {e.sell} </p>
                        <p className="w-2/12">{e.volume }</p>
                        <p className="w-2/12 text-green-500 ">{e.baseu} </p>
                    </div>)
                })}




<footer class="shadow mt-4 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Hodlinfo </a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>


            </div>
        </>
    )
}

export default Home