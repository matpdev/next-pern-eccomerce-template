import { Badge, TableCell } from '@windmill/react-ui'
import {format, parseISO} from "date-fns"
import { formatCurrency } from 'helpers/formatCurrency'
import React from 'react'

const OrderItem = ({order}) => {
  return (
    <>
      <TableCell>#{order.order_id}</TableCell>
      <TableCell>{order.total || "Não disponível"}</TableCell>
      <TableCell><Badge type="success">{order.status}</Badge> </TableCell>
      <TableCell>{formatCurrency(order.amount)}</TableCell>
      <TableCell>{format(parseISO(order.date),'dd/MM/yy')}</TableCell>
    </>
  )
}

export default OrderItem

