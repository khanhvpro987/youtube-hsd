import { Box, Paper, Typography, useTheme } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import BalanceIcon from '@mui/icons-material/Balance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';

export default function LabelCard(props) {
	const status = props.status;
	const theme = useTheme();
	return (
		<Paper
			elevation={12}
			sx={{
				height: 'auto',
				paddingX: '10%',
				paddingY: '5%',
				boxSizing: 'border-box',
				borderRadius: '15px',
				'&:hover': {
					boxShadow: `0px 0px 12px 2px ${
						theme.palette.text.button[props.color]
					}`,
					cursor: 'pointer',
				},
			}}>
			<Box
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}>
				<Box>
					<Typography
						variant={'p'}
						component={'h6'}
						color={'text.button.' + props.color}
						fontSize={{
							xs: '16px',
							sm: '18px',
							md: '20px',
							lg: '22px',
							xl: '24px',
						}}>
						{props.label}
					</Typography>
					<Typography
						variant={'p'}
						component={'h6'}
						color={'text.default'}
						fontSize={{
							xs: '24px',
							sm: '26px',
							md: '28px',
							lg: '30px',
							xl: '32px',
						}}>
						{props.amount}
					</Typography>
				</Box>
				{props.label === 'Clean' ? (
					<Box color={'text.button.success'}>
						<CheckCircleIcon fontSize={'large'} />
					</Box>
				) : props.label === 'Offensive' ? (
					<Box color={'text.button.warning'}>
						{' '}
						<ErrorIcon fontSize={'large'} />
					</Box>
				) : props.label === 'Hate' ? (
					<Box color={'text.button.error'}>
						<CancelIcon fontSize={'large'} />
					</Box>
				) : (
					<Box color={'text.button.info'}>
						<DonutSmallIcon fontSize={'large'} />
					</Box>
				)}
			</Box>
			{status === 'increase' ? (
				<Box
					display={'flex'}
					justifyContent={'flex-start'}
					alignItems={'center'}
					color={'text.button.success'}>
					<Box>
						<KeyboardDoubleArrowUpIcon />
					</Box>
					<Typography paddingX={1}>{props.percent}</Typography>
					<Typography
						paddingX={1}
						color={'text.default'}>
						Since yesterday
					</Typography>
				</Box>
			) : status === 'decrease' ? (
				<Box
					display={'flex'}
					justifyContent={'flex-start'}
					alignItems={'center'}
					color={'text.button.error'}>
					<Box>
						<KeyboardDoubleArrowDownIcon />
					</Box>
					<Typography paddingX={1}>{props.percent}</Typography>
					<Typography
						paddingX={1}
						color={'text.default'}>
						Since yesterday
					</Typography>
				</Box>
			) : (
				<Box
					display={'flex'}
					justifyContent={'flex-start'}
					alignItems={'center'}
					color={'text.button.warning'}>
					<Box>
						<BalanceIcon />
					</Box>
					<Typography paddingX={1}>Nothing change</Typography>
					<Typography
						paddingX={1}
						color={'text.default'}>
						Since yesterday
					</Typography>
				</Box>
			)}
		</Paper>
	);
}
