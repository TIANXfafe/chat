import {
	IconHome,
} from '@douyinfe/semi-icons'

export interface MenuItem {
	itemKey: string
	text: string
	icon?: React.ReactNode | any
	path?: string
	items?: MenuItem[]
	component?: React.ComponentType<any>
}

const MENU_CONFIG: MenuItem[] = [
	{
		itemKey: '1',
		text: 'app.menu.dashboard',
		icon: IconHome,
		items: [
			{
				itemKey: '1-1',
				text: 'app.menu.dashboard.workbeach',
				path: '/dashboard/workbeach'
			},
		]
	},
]

export default MENU_CONFIG
