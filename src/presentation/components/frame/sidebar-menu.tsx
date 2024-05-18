import { SidebarMenu } from '@ahaui/react'
import { useState } from 'react'

export default function Sidebar() {
  const [current, setCurrent] = useState('+ New Chat');
	return (
		<div
			style={{
				width: 360,
			}}
		>
			<SidebarMenu
				size="small"
				current={current}
				onSelect={setCurrent}
				style={{
					width: 360,
				}}
			>
        <SidebarMenu.Item eventKey="+ New Chat">+ New Chat</SidebarMenu.Item>
				<SidebarMenu.Item eventKey="home">Home</SidebarMenu.Item>
				<SidebarMenu.Item eventKey="payment">Payment</SidebarMenu.Item>
				<SidebarMenu.Item eventKey="privacyCenter">
					Privacy Center
				</SidebarMenu.Item>
			</SidebarMenu>
		</div>
	)
}
