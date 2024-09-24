import React, { useState } from 'react'
import TableData from './TableData'

function Table() {
  const [cvalue, setInfo] = useState(TableData);
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
          {cvalue.map((cvalue, ind) => {
            return (
              <tr className='hover:bg-cyan-100 hover:scale-105 bg-cyan-200 duration-300'>
                <th className='py-3 px-6'>{cvalue.id}</th>
                <td className='py-3 px-6'>{cvalue.name}</td>
                <td className='py-3 px-6'>{cvalue.email}</td>
                <td className='py-3 px-6'>{cvalue.city}</td>
                <td className='py-3 px-6'>{cvalue.phone}</td>
              </tr>
            )
          })}
        </thead>
      </table>
    </div>
  )
}

export default Table
