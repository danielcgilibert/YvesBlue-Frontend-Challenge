'use client'
import { useState } from 'react'
import dataJSON from '../../public/data.json'

export default function Table() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState(dataJSON.slice(0, page * 10))

  const handlePage = e => {
    if (page === 1 && e.target.textContent === 'Prev') return

    e.target.textContent === 'Prev'
      ? setPage(prev => prev - 1)
      : setPage(prev => prev + 1)
    setData(dataJSON.slice(page * 10, (page + 1) * 10))
  }
  return (
    <div className="flex flex-col gap-5 min-w-full  ">
      <table>
        <Thead>
          <Tr className="border-b-2">
            <Th rowSpan="2">Company name</Th>
            <Th rowSpan="2">Total company revenue</Th>
            <Th rowSpan="2">Market Capitalization</Th>
            <Th colSpan="2" className="px-8">
              Women (PER 100)
            </Th>
            <Th colSpan="2" className="px-8">
              CO2 SCOPE 1 & 2
            </Th>
            <Th colSpan="2" className="px-8">
              CO2 SCOPE 3
            </Th>
          </Tr>
          <Tr className="border-b-2">
            <Th>Managers</Th>
            <Th>Employees</Th>
            <Th>Total</Th>
            <Th>REV ADJ</Th>
            <Th>Total</Th>
            <Th>REV ADJ</Th>
            <Th>ESH SCORE</Th>
          </Tr>
        </Thead>

        <tbody>
          {data.map(item => {
            const progressBar = item['ESG Score'].toFixed(2)
            return (
              <Tr>
                <Th>{item['Company Name']}</Th>
                <Th>{item['Total Revenue']}</Th>
                <Th>{item['Company Market Cap']}</Th>
                <Th>{item['Women Managers']}</Th>
                <Th>{item['Women Employees']}</Th>
                <Th>{item['CO2 Scope 1 & 2 Adjusted']}</Th>
                <Th>{item['CO2 Scope 1 & 2 Revenue Adjusted']}</Th>
                <Th>{item['CO2 Scope 3 Adjusted']}</Th>
                <Th className="text-right pr-4">
                  {item['CO2 Scope 3 Revenue Adjusted']}
                </Th>
                <Th className="text-right pr-4">
                  {item['ESG Score'].toFixed(2)}
                </Th>
                <Th className="py-2 border-l-2 w-36">
                  <div className="w-full bg-gray-200  h-2.5 ">
                    <div
                      className={`bg-blue-600  h-2.5`}
                      style={{ width: `${progressBar}%` }}></div>
                  </div>
                </Th>
              </Tr>
            )
          })}
        </tbody>
      </table>

      <div className="flex justify-end gap-4 ">
        <button
          className="bg-white text-black px-2 rounded-sm"
          onClick={handlePage}>
          Prev
        </button>
        <span>Page</span>
        <span className="border-b-2 px-2">{page}</span>
        <button
          className="bg-white text-black px-2 rounded-sm"
          onClick={handlePage}>
          Next
        </button>
      </div>
    </div>
  )
}

function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="font-bold text-lg ">{children}</thead>
}

function Tr(props: { children: React.ReactNode }) {
  return <tr {...props}>{props.children}</tr>
}
function Th(props: { children: React.ReactNode }) {
  return <th {...props}>{props.children}</th>
}
