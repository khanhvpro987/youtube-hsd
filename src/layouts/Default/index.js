import Navbar from '@/components/Layout/Navbar';
import Sidebar from '@/components/Layout/Sidebar';
import { useCallback, useState } from 'react';
import { Drawer } from '@mui/material';

export default function Default({ children }) {
	const [activeSidebar, setActiveSidebar] = useState(false);

	const handleMenuClicked = useCallback(() => {
		setActiveSidebar((prevState) => !prevState);
	}, []);

	return (
		<>
			<Navbar onMenuClicked={handleMenuClicked} />
			<Drawer
				sx={{ position: 'absolute' }}
				variant='persistent'
				anchor='left'
				open={activeSidebar}>
				<Sidebar />
			</Drawer>
			{children}
		</>
	);
}
