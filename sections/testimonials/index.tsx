import Carousel from './carousel'
import CarouselItem from './carousel-item'
import Review from './review'

export default function Testimonials() {
	return (
		<section className='py-24'>
			<h2 className='font-display text-2xl lg:text-3xl font-medium mb-5 lg:mb-10 text-center'>Öğrenci Yorumları</h2>
			<Carousel>
				{reviews.map((item, i) =>
					<CarouselItem key={i} index={i}>
						<Review item={item} />
					</CarouselItem>
				)}
			</Carousel>
		</section>
	)
}

const reviews = [
	{
		by: 'Tuğçe Geyik',
		quote: "Vray’den Corona’ya bu kurs ile geçtim. Çok kısa sürede render kalitemde büyük değişiklikler oldu. Bilmediğim çoğu bilgiyi bu eğitim sayesinde edindim.",
		image: '/testimonial-people/tugce-geyik.jpg',
		igUsername: 'tugcegeyik_',
	},
	{
		by: 'Fatih Özkaya',
		quote: "Ben de Vray kullanıcısıydım. Kurs ile Corona’ya geçmiş oldum. Pratik yaklaşımlar ve özellikle materyal düzenlemenin mantığına dair öğretici içerikler paylaşıldı ki en özel kısım bu değildi ayrıca. Kamera konusunda öğretilen detayları çok daha önemli buldum. En temelden profesyonel düzeye doğru giden bir çizgisi var. Günün sonunda kişinin bireysel çabasıyla da sizi önemli noktaya getiren bir kurs oldu. Tekrar teşekkürler.",
		image: '/testimonial-people/fatih-ozkaya.jpg',
		igUsername: 'dostooyevski',
	},
	{
		by: 'Yusuf Gümüşsoy',
		quote: "İyi bir anlatım ve anlamak için yapılabilecek her şey… Selman bey ile çalışmak hem eğlenceli hem kaliteli. Çok fazla soru işaretleriyle derse başladım ama ilk haftadan bütün ön yargılarım kırılmıştı. Gerçek bir eğitimci olduğunu kısa bir sürede kanıtladı. Şu an bir mesleğim var ve bunu Selman beye borçluyum.",
		image: '/testimonial-people/yusuf-gumussoy.jpg',
		igUsername: 'ygmsoy0',
	},
	{
		by: 'Sena Kaşıkçı Berk',
		quote: "Hiç Corona bilmeyen bugüne kadar sadece Vray kullanan biri olarak söyleyebilirim ki uzun zamandır Vrayde çok zaman kaybetmişim. Gerçekçi materyal hazırlama, doğru kamera açıları, aydınlatma konusunda hiçbir bilgiye sahip olmadığımı farkettim bu eğitimden sonra. Selman hoca bütün bildiklerini en basit haliyle size kolayca aktarıyor. İyi ki almışım dediğim bir eğitim oldu.Çok teşekkür ediyorum aktardığı bütün bilgiler için.",
		image: '/testimonial-people/sena-kasikci-berk.jpg',
		igUsername: 'fsenakskc',
	},
	{
		by: 'Resul Ali Koçyiğit',
		quote: "3ds Max sonsuz bir program. Her gün birşey öğreniyorsunuz. Bununla birlikte render motorlarına hakim olmanız gerek. İşte bu noktada Selman hoca Corona Render motoruna hakim olmuş bir isim. Selman hocamızdan öğrendiğimiz her bilgi çok kıymetli. Seviyenizin arttığının farkına varabiliyorsunuz.",
		image: '/testimonial-people/resul-ali-kocyigit.jpg',
		igUsername: 'resulalikocyigittt',
	},
	{
		by: 'Emre Bayraktar',
		quote: "Kalitesini Türkiye'de ilk 5’te gördüğüm sevgili dostum, eğitimde de farkını gösterdi. Kesinlikle memnun kalacağınız bir seviye.",
		image: '/testimonial-people/emre-bayraktar.jpg',
		igUsername: 'emre.bayraktr',
	},
	{
		by: 'Cansu İlhan',
		quote: "Aldığım eğitimden çok memnunum. Selman Hoca “standart başı sonu belli” bir ders yerine modele, fotoğraf açılarına bakışını, bir sorunla karşılaştığında çözüme nasıl gittiğini ve elimizdekini (ışık,material vs.) değerlendirerek nasıl farklı etkiler yaratabileceğimizi anlatıyor. Bunun yanında render aldığımız ders sahnesinin de tasarımsal açıdan değerli olması öğrendiklerimizin yanında elde ettiğimiz büyük bir artı.",
		image: '/testimonial-people/cansu-ilhan.jpg',
		igUsername: 'cansualpilhan',
	},
	{
		by: 'Gizem Gürsoy',
		quote: "Selman hoca titizlikle hazırlamıştı dersleri, sıkılmadan yorulmadan tüm sorularımızı yanıtladı. Sadece teknik olarak değil mesleki anlamda da ufkumuzu genişletti diyebilirim.",
		image: '/testimonial-people/gizem-gursoy.jpg',
		igUsername: 'gursoygiz',
	},
	{
		by: 'Gökberk Taşkesen',
		quote: "Birçok defa eğitim almaya yeltenmiş ve çekinerek vazgeçmiş biri olarak söylüyorum çekinmenin bir çözüm olmadığını anladım ve Selman hocanın kendine güvenen, güvenmeyi öğreten anlatımıyla tekrar mesleğimi sevmeye başladım. Dolu dolu bir eğitimin ardından mesleki açıdan gelişmiş ve projelerime olan güvenim fazlasıyla artmış şekilde ilerleyeceğim. Herşey için Selman hocaya ve immersive.images ailesine teşekkürlerimi sunarım.",
		image: '/testimonial-people/gokberk-taskesen.jpg',
		igUsername: 'gkbrktsksn',
	},
	{
		by: 'Burçak Atak',
		quote: "Selman hocamız, tüm samimiyetiyle bu zamana kadar kendine kattığı tüm bilgi birikimlerini bize en ince ayrıntısına kadar aktardı. Fazlasıyla memnun kaldım. Kendini geliştirmek isteyen yeni öğrencilere hiç düşünmeden bu eğitimi almalarını tavsiye ederim.",
		image: '/testimonial-people/burcak-atak.jpg',
		igUsername: 'icmimarburcakatak',
	},
	{
		by: 'Tuğba Acar',
		quote: "Selman Bey bildiklerini açık yüreklilik ile paylaşan biri ve yaptığı işi hep bir adım ilerisine taşıyor. Eğitim sonucunda dahil olunan sosyal toplulukta herkesin birbiri ile iletişim ve yardımlaşma halinde olması çok büyük bir avantaj. Eğitim beklentimin üzerindeydi ve kaliteli render almanın püf noktalarını anladığım bir ders oldu.",
		image: '/testimonial-people/tugba-acar.jpg',
		igUsername: 'tugbacarr',
	},
	{
		by: 'Leman Rahimli',
		quote: "Önceden bir çok eğitime katılmış olsam da, ilk dersten farkını görebildiğim yegane eğitim oldu. Eğitim süreci bittikten sonra bile iletişimin kesilmemesi ve gerektiğinde yardım edilmesi ise, güzel ve farklı bir boyut katıyor.",
		image: '/testimonial-people/leman-rahimli.jpg',
		igUsername: 'r.lamann',
	},
	{
		by: 'Buse Toptaş',
		quote: "Çok kaliteli bir eğitim serüveniydi benim için. Renderlarımın kötü olduğunu düşünmüyordum, derslere başlarken daha ne olacak diye düşünürken, dersler sonrasında ki geldiğim duruma ben de inanamadım. Selman hocam ders dışında da sorularımızı hiç yanıtsız bırakmadı, yönlendirdi. Çok çok teşekkür ediyorum.",
		image: '/testimonial-people/buse-toptas.jpg',
		igUsername: 'busettoptas',
	},
	{
		by: 'Ertuğrul Koşdemir',
		quote: "Eğitim, Selman hocanın hiç bir konuyu atlamayıp, titizlikle her şeyin üstünde durmasıyla ezberci bir eğitim yerine daha detaylı bir şekilde programın içeriğine hakim olmama olanak sağladı.",
		image: '/testimonial-people/ertugrul-kosdemir.jpg',
		igUsername: 'ertcreativeworks',
	},
	{
		by: 'Şule Çalışkan',
		quote: "Dersler hem çok akıcı hemde çok öğreticiydi. Bana belirli kalıpların olmadığını öğretti ve farklı açıdan bakmaya başladım. Açıkcası daha cesur olmayı öğretti diyebilirim. Ben kendisini çok sevdim. İyi niyeti ve samimiyeti daha ilk dersten geçiyor insana. Sizi tanıdığım için mutluyum Selman hocam değerli bilgileriniz için çok teşekkür ederim.",
		image: '/testimonial-people/sule-caliskan.jpg',
		igUsername: 'scinterior_',
	},
	{
		by: 'Esra Yılmaz',
		quote: "İsteklerimi yüzde yüz karşılayan bir eğitim oldu. Bundan sonraki süreçte kaliteli render alabilmek için kısa bir süreçte çok şey öğretildiğini düşünüyorum.",
		image: '/testimonial-people/esra-yilmaz.jpg',
		igUsername: 'esssylmzz',
	},
	{
		by: 'Zeynep Altıntuğ',
		quote: "Eğitim alt yapısı olan, bu işte ilerlemek, seviyesini yükseltmek isteyenler için gerçekten bir numara... Selman hocam'dan çok fazla bilgi öğrendim. Render seviyemin kurs bitiminden sonra daha üst seviyelere çıktığını rahatlıkla söyleyebilirim. Selman hocamın düzenleyeceği yeni kursları da takipteyim! Eğitim içeriği özenle hazırlanmış, derse katıldığınız ilk günden anlayabiliyorsunuz. Kendisine buradan da teşekkür ederim... Yolumuz kesiştiği için çok mutluyum.",
		image: '/testimonial-people/zeynep-altintug.jpg',
		igUsername: 'zeynepaltintug',
	},
	{
		by: 'Aybegüm Savaş',
		quote: "Kaliteli ve öğretme odaklı eğitimleriniz sayesinde, başlangıca göre oldukça ileri seviyeye ulaşmış durumdayım. Tüm sorulara hızlı bir şekilde cevap ve çözüm bulduğum eğitimleriniz sayesinde, ilerleyen zamanlarda işime oldukça faydalı olacak bilgiler aldım. Tüm emekleriniz için teşekkür ederim. Bu alanda ilerlemek isteyen kişilere de kesinlikle tavsiye ediyorum.",
		image: '/testimonial-people/aybegum-savas.jpg',
		igUsername: 'aybegumsavass',
	},
	{
		by: 'Damla Günhan',
		quote: "Kesinlikle çok verimli bir eğitimdi. Bir alt yapım vardı fakat malzemeler, ışık, kamera vs. kullandığımız herşeyi programı bize gösteren kişilerin tecrübelerine göre, ne yaptığımızı aslında tam da bilmeden kullandığımızı farkettim. Artık bu eğitimden sonra neyi neden yaptığımı, nasıl yaptığımı daha net bir şekilde öğrendim. Böylece kendi özgün sahnelerimi ve render görsellerimi elde edebilir konuma geldim :)",
		image: '/testimonial-people/damla-gunhan.jpg',
		igUsername: 'damlagunhan',
	},
	{
		by: 'Gülşah Sarığlu',
		quote: "Eğitim hem keyifli hem de çok öğretici, ilk dersten son derse kadar program ve render motoru ile ilgili daha önce bilmediğiniz detaylarla karşılaştığınızı rahatlıkla söyleyebilirim. Verimlilik ve efektifliğin yanı sıra, kesinlikle öğrenciyi birkaç adım ileriye taşıyan bir eğitimdi. Mesleki anlamda detaylara ve kaliteli/fotorealistik render anlayışına önem veren herkese kesinlikle öneriyorum Selman Hocamızın bu kıymetli eğitimini :)",
		image: '/testimonial-people/gulsah-sarioglu.jpg',
		igUsername: 'gulsahhsariogluu',
	},
	{
		by: 'Sena Şahintürk',
		quote: "Uzun zamandır 3Dsmaxle ilgili detay öğrenebileceğim, coronaya geçişte öz ama kaliteli bilgiler edinebileceğim bir platform arayışındaydım. Karşılaştığım sayısız eğitimci ve kurs programı olsa da süreç çoğunda benim için çok uzundu. Çok fazla zamanımı almayacak ama kaliteli trickler edinebileceğim bir program istiyordum, malum zaman hepimiz için inanılmaz hızlı akıyor ve çok değerli. Selman hocayı uzun uğraşlar sonucu buldum :) Render-uygulama konusunda incelemek bile aşırı keyif verdiği için kesinlikle eğitim programına dahil olmam gerektiğini düşündüm. Eğitim süreci boyunca bir dakikamı bile boşa harcamadığımdan, dolaylı yollardan değil direkt bilgiye ulaşabilmek için doğru kişiyi tercih ettiğimden emin oldum. Benim için inanılmaz keyifli, kaliteli bilgilerle dolu, sıkıcı olmayan, 3-4 saat ekran başında durulabilecek kadar nitelikli bir eğitim programıydı. Bu özelliklerin, içinde olduğumuz dönem için çok kıymetli ve önemsenmesi gerektiğini düşünüyorum; kolay bulunmuyor :) Ayrıca eğitim dönemi boyunca ve tamamladıktan sonra da her türlü soru-sorunumla ilgili çözüm odaklı yaklaşımı, yardımları da benim için önemli başka bir durumdu. Son olarak program bitiyor ama Selman hoca sizi bırakmıyor, başka platformlarda yanınızda olmaya devam ediyor :)",
		image: '/testimonial-people/sena-sahinturk.jpg',
		igUsername: 'sena.sahinturk',
	},
]
