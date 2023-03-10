// Dashboard
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Box,
	Typography,
} from '@mui/material';

export default function Navbar({ onMenuClicked }) {
	return (
		<>
			<AppBar
				position={'static'}
				sx={{ backgroundColor: 'background.navbar' }}>
				<Toolbar>
					<IconButton onClick={onMenuClicked}>
						<MenuIcon
							size={'large'}
							sx={{ color: 'text.default' }}
						/>
					</IconButton>
					<IconButton
						sx={{ flexGrow: 1, justifyContent: 'flex-start' }}>
						<SearchIcon
							size={'large'}
							sx={{ color: 'text.default' }}
						/>
					</IconButton>
					<IconButton>
						<NotificationsIcon
							size={'large'}
							sx={{ color: 'text.default' }}
						/>
					</IconButton>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}>
						<IconButton>
							<AccountCircleIcon
								size={'large'}
								sx={{ color: 'text.default' }}
							/>
						</IconButton>
						<Typography
							color={'text.button.disable'}
							fontWeight={'bold'}>
							Huỳnh Bảo Khánh
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}
