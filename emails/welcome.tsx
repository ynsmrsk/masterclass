import {
	Body,
	Button,
	Container,
	Head,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import * as React from 'react';

interface Props {
	name?: string;
	link?: string;
}

const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: '';

export default function WelcomeEmail({
	name = 'Yunus Emre',
	link = 'https://immersiveimages.co',
}: Props) {
	return (
		<Html>
			<Head />
			<Preview>Immersive Images&apos;a Hoşgeldin</Preview>
			<Body style={main}>
				<Container style={container}>
					<Img
						src={`${baseUrl}/static/logo.png`}
						width="160"
						height="32"
						alt="Immersive Images"
					/>
					<Section>
						<Text style={text}>Selam {name},</Text>
						<Text style={text}>
							Teşekkürler! bekleme listesine
							<Link style={anchor} href="https://immersiveimages.co">
								{' '}
								alındınız!
							</Link>
						</Text>
						<Button style={button} href={link}>
							Siteye Git
						</Button>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

const main = {
	backgroundColor: '#f6f9fc',
	padding: '10px 0',
};

const container = {
	backgroundColor: '#ffffff',
	border: '1px solid #f0f0f0',
	padding: '45px',
};

const text = {
	fontSize: '16px',
	fontFamily:
		"'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
	fontWeight: '300',
	color: '#404040',
	lineHeight: '26px',
};

const button = {
	backgroundColor: '#007ee6',
	borderRadius: '4px',
	color: '#fff',
	fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
	fontSize: '15px',
	textDecoration: 'none',
	textAlign: 'center' as const,
	display: 'block',
	width: '210px',
	padding: '14px 7px',
};

const anchor = {
	textDecoration: 'underline',
};

