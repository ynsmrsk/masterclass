'use client'
import Image from "next/image"
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile"
import { Background, Container, Left, Right } from './tile-item'

export default function Benefits() {
	return (
		<TileWrapper numOfSlides={4}>
			<TileBackground>
				<Background />
			</TileBackground>
			<TileContent>
				{benefits.map((benefit, i) =>
					<Tile key={i} slide={i} renderContent={({ progress }) => (
						<Container>
							<Left progress={progress}>
								<div className="2xl:max-w-[70%]">
									<h2 className="text-[24px] leading-[28px] lg:text-[40px] lg:leading-none mb-[2px] lg:mb-1 font-medium font-display text-dark">
										{benefit.title}
									</h2>
									<p className="text-xl leading-6 lg:text-4xl text-primary-500 ">
										{benefit.description}
									</p>
								</div>
							</Left>
							<Right progress={progress}>
								<Image className="max-h-[60vh] lg:max-h-[70vh] aspect-[9/16] object-cover rounded-lg"
									src={benefit.image} width={540} height={960} alt=""
								/>
							</Right>
						</Container>
					)} />
				)}
			</TileContent>
		</TileWrapper>
	)
}

const benefits = [
	{
		title: 'Deneyimli 3D Sanatçısından Bilgiler',
		description: 'Fotogerçekçi renderlar oluşturmak için en kullanışlı tekniklerin anlatımları. Farklı oda tiplerinde aydınlatma ve malzeme kurulumunun önemli nüansları hakkında bilgiler.',
		image: '/benefits/3d-sanatcisindan-bilgiler.jpg',
	},
	{
		title: 'Tüm Sorulara Destek',
		description: 'Eğitim konusuna göre soru sormanın, meslektaşlarla iletişim kurmanın ve deneyim alışverişinde bulunmanın mümkün olduğu bir platforma erişim.',
		image: '/benefits/tum-sorulara-destek.jpg',
	},
	{
		title: 'Zamandan Tasarruf',
		description: 'Kısa ve en değerli bilgileri içeren 15 saatlik canlı ders. En yararlı yöntem ve tekniklerin kısa ve öz olarak anlatımı.',
		image: '/benefits/zamandan-tasarruf.jpg',
	},
	{
		title: 'Hataların düzeltilmesi',
		description: 'Eğitimin bir parçası olarak ödevlerinizin analizi. Tüm yorumlar ve analizlerin özel sohbet platformunda yayınlanması.',
		image: '/benefits/hatalarin-duzeltilmesi.jpg',
	},
]