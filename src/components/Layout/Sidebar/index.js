import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
	ListItemText,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
	return (
		<>
			<Box width={'250px'}>
				<Box>
					<Typography
						variant='h1'
						color='initial'>
						Logo
					</Typography>
				</Box>
				<Divider />
				<Box>
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
							(text, index) => (
								<ListItem
									key={text}
									disablePadding>
									<ListItemButton>
										<ListItemIcon>
											{index % 2 === 0 ? (
												<InboxIcon />
											) : (
												<MailIcon />
											)}
										</ListItemIcon>
										<ListItemText primary={text} />
									</ListItemButton>
								</ListItem>
							)
						)}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem
								key={text}
								disablePadding>
								<ListItemButton>
									<ListItemIcon>
										{index % 2 === 0 ? (
											<InboxIcon />
										) : (
											<MailIcon />
										)}
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Box>
		</>
	);
}

// History
// Chart
// Banned
// Reports
// Settings
