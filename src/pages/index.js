import Head from 'next/head';
import { Grid } from '@mui/material';
import LabelCard from '@/components/Home/LabelCard';
import Default from '@/layouts/Default';

export default function Test() {
	const LabelData = [
		{
			label: 'Clean',
			color: 'success',
			amount: '3920',
			status: 'increase',
			percent: '25%',
		},
		{
			label: 'Offensive',
			color: 'warning',
			amount: '21313',
			status: 'decrease',
			percent: '12%',
		},
		{
			label: 'Hate',
			color: 'error',
			amount: '2133',
			status: 'decrease',
			percent: '5%',
		},
		{
			label: 'Total',
			color: 'info',
			amount: '27366',
			status: 'nochange',
			percent: '0%',
		},
	];

	return (
		<>
			<Head>
				<title>Youtube Hate Speech Detection</title>
				<meta
					name='description'
					content='Youtube Hate Speech Detecting Tool'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<Default>
				<Grid
					container
					direction={'column'}
					paddingY={'2%'}
					paddingX={'5%'}>
					{/* Label Card */}
					<Grid
						container
						spacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
						item
						direction={'row'}>
						{LabelData.map((data, key) => (
							<Grid
								item
								key={key}
								xs={12}
								sm={6}
								md={6}
								lg={3}
								xl={3}
								justify='center'
								alignItems='center'
								margin='auto'>
								<LabelCard {...data} />
							</Grid>
						))}
					</Grid>

					{/* Static Card */}
					<Grid
						container
						item
						direction={'row'}>
						<Grid
							item
							xs={12}
							sm={12}
							md={8}
							lg={8}
							xl={8}></Grid>
						<Grid
							item
							xs={12}
							sm={12}
							md={4}
							lg={4}
							xl={4}></Grid>
					</Grid>
				</Grid>
			</Default>
		</>
	);
}
