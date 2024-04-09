import React from 'react'

function Table() {
  return (
    <div className='bg-cyan-900 flex justify-center items-center h-screen'>
      <table className='shadow-2xl font-[poppins] border-2 border-cyan-200 w-auto overflow-hidden'>
        <thead className='text-white'>
            <tr>
                <th className='py-3 bg-cyan-800'>ID</th>
                <th className='py-3 bg-cyan-800'>Name</th>
                <th className='py-3 bg-cyan-800'>Email</th>
                <th className='py-3 bg-cyan-800'>City</th>
                <th className='py-3 bg-cyan-800'>Phone-Number</th>
            </tr>
        </thead>
        <thead className='text-cyan-900 text-center'>
            <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-200 duration-300'>
                <th className='py-3 px-6'># 1</th>
                <td className='py-3 px-6'>Nikhil Ahir</td>
                <td className='py-3 px-6'>Nikhilahir@gmail.com</td>
                <td className='py-3 px-6'>Varacha,Surat</td>
                <td className='py-3 px-6'>88979-85674</td>
            </tr>
            <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-300 duration-300'>
                <th className='py-3 px-6'># 2</th>
                <td className='py-3 px-6'>Jayan Gajjar</td>
                <td className='py-3 px-6'>Jayandudakiya@gmail.com</td>
                <td className='py-3 px-6'>NaNa-varacha,Surat</td>
                <td className='py-3 px-6'>97869-85674</td>
            </tr>
            <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-400 duration-300'>
                <th className='py-3 px-6'># 3</th>
                <td className='py-3 px-6'>Akshay Patel</td>
                <td className='py-3 px-6'>Akshaygoti@gmail.com</td>
                <td className='py-3 px-6'>Pasodra,Surat</td>
                <td className='py-3 px-6'>75759-85674</td>
            </tr>
            <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-500 duration-300'>
                <th className='py-3 px-6'># 4</th>
                <td className='py-3 px-6'>Smit Patel</td>
                <td className='py-3 px-6'>Smitpatel@gmail.com</td>
                <td className='py-3 px-6'>Sarthana,Surat</td>
                <td className='py-3 px-6'>98979-85674</td>
            </tr>
            <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-600 duration-300'>
                <th className='py-3 px-6'># 5</th>
                <td className='py-3 px-6'>Piyush Patel</td>
                <td className='py-3 px-6'>Piyushpatel@gmail.com</td>
                <td className='py-3 px-6'>Yogi-Chok,Surat</td>
                <td className='py-3 px-6'>98249-85674</td>
            </tr>
        </thead>
      </table>
    </div>
  )
}

export default Table
