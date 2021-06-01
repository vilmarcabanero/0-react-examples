import React, { useState } from 'react';
import {
	Grid,
	Typography,
	Button,
	Paper,
	CssBaseline,
	Switch,
} from '@material-ui/core';
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';

const MUIDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false);
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: '#4398ff',
				contrastText: '#fff',
			},
			type: darkMode ? 'dark' : 'light',
		},
	}); 

  const lightTheme = createMuiTheme({
		palette: {
			primary: {
				main: '#4398ff',
				contrastText: '#fff',
			},
			type: 'light',
		},
	}); 

  const darkTheme = createMuiTheme({
		palette: {
			primary: {
				main: '#4398ff',
				contrastText: '#fff',
			},
			type: 'light',
		},
	}); 
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline /> {/*Needed if kahit walang  paper.*/}
			<div>
				<Grid container direction='column'>
					<Typography variant='h1'>This is my App!</Typography>
					<Button variant='contained' color='primary'>
						This is a primary button
					</Button>
					<Button variant='contained' color='secondary'>
						This is a secondary button
					</Button>
					<Switch
						color='primary'
						checked={darkMode}
						onChange={() => setDarkMode(!darkMode)}
					/>
				</Grid>
			</div>
		</ThemeProvider>
	);
};

export default MUIDarkMode;
