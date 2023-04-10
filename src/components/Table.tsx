'use client'
import { useState } from 'react'
import dataJSON from '../../public/data.json'
export default function Table() {
  const [data, setData] = useState(dataJSON.slice(0, 10))
  return (
    <table>
      <Thead>
        <Tr>
          <Th>Company name</Th>
          <Th>Total company revenue</Th>
          <Th>Market Capitalization</Th>
          <Th>Women (PER 100)</Th>
          <Th>CO2 SCOPE 1 & 2</Th>
          <Th>CO2 SCOPE 3</Th>
        </Tr>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
          <Th>Total</Th>
          <Th>REV ADJ</Th>
          <Th>Total</Th>
          <Th>REV ADJ</Th>
          <Th>ESH SCORE</Th>
          <Th></Th>
        </Tr>
      </Thead>

      <tbody>
        {data.map(item => {
          return (
            <Tr>
              <Th>{item['Company Name']}</Th>
              <Th>{item['Total Revenue']}</Th>
              <Th>{item['Company Market Cap']}</Th>
              <Th>{item['Women Managers']}</Th>
              <Th>{item['Women Employees']}</Th>
              <Th>{item['ESG Score']}</Th>
              <Th>{item['CO2 Scope 1 & 2 Adjusted']}</Th>
              <Th>{item['CO2 Scope 1 & 2 Revenue Adjusted']}</Th>
              <Th>{item['CO2 Scope 3 Adjusted']}</Th>
              <Th>{item['CO2 Scope 3 Revenue Adjusted']}</Th>
            </Tr>
          )
        })}
      </tbody>
    </table>
  )
}

function Thead({ children }: { children: React.ReactNode }) {
  return <thead className="font-bold text-lg ">{children}</thead>
}

function Tr({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>
}
function Th({ children }: { children: React.ReactNode }) {
  return <th>{children}</th>
}
