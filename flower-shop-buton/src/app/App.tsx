import { ChevronLeft, ChevronRight, Clock, MapPin, ShoppingCart, Star, Truck } from 'lucide-react'
import Slider from 'react-slick'
import type { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const CATALOG_IMAGES = [
  '/assets/catalog-1.png',
  '/assets/hero.png',
  '/assets/about.png',
  '/assets/extra.png',
  '/assets/catalog-1.png',
]

const DAILY_IMAGES = ['/assets/catalog-1.png', '/assets/about.png', '/assets/extra.png']

const NextArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2a2a2a] transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
    aria-label="Следующий слайд"
  >
    <ChevronRight size={24} />
  </button>
)

const PrevArrow = ({ onClick }: CustomArrowProps) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#2a2a2a] transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
    aria-label="Предыдущий слайд"
  >
    <ChevronLeft size={24} />
  </button>
)

export default function App() {
  const catalogSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const reviewsSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const catalogItems = [
    { name: 'Букет "Весенний"', price: '2 500 ₽' },
    { name: 'Букет "Романтика"', price: '3 200 ₽' },
    { name: 'Букет "Нежность"', price: '2 800 ₽' },
    { name: 'Букет "Солнечный"', price: '3 000 ₽' },
    { name: 'Букет "Элегант"', price: '4 500 ₽' },
  ]

  const dailyBouquets = [
    { name: 'Букет дня #1', price: '1 990 ₽' },
    { name: 'Букет дня #2', price: '2 490 ₽' },
    { name: 'Букет дня #3', price: '2 990 ₽' },
  ]

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Замечательный магазин! Цветы всегда свежие, букеты собраны со вкусом. Доставка точно в срок.',
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Заказываю здесь цветы уже не первый раз. Качество на высоте, флористы настоящие профессионалы!',
    },
    {
      name: 'Елена Смирнова',
      text: 'Очень довольна! Букет превзошел все ожидания. Спасибо за внимание к деталям.',
    },
    { name: 'Михаил Козлов', text: 'Отличный сервис и красивые композиции. Рекомендую всем!' },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]" style={{ fontFamily: "'Crimson Text', serif" }}>
      <header className="sticky top-0 z-50 border-b border-[#e0e0e0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div
            className="text-3xl font-bold tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            BUTON
          </div>
          <nav className="hidden gap-10 text-lg md:flex">
            <a href="#catalog" className="transition-opacity hover:opacity-60">
              Каталог
            </a>
            <a href="#about" className="transition-opacity hover:opacity-60">
              О нас
            </a>
            <a href="#delivery" className="transition-opacity hover:opacity-60">
              Доставка
            </a>
            <a href="#reviews" className="transition-opacity hover:opacity-60">
              Отзывы
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-60">
              Контакты
            </a>
          </nav>
          <button type="button" className="p-2 transition-opacity hover:opacity-60" aria-label="Корзина">
            <ShoppingCart size={28} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <section className="border-b border-[#e0e0e0] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <h1
                className="text-7xl font-light leading-tight tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Цветы, которые
                <br />
                говорят больше слов
              </h1>
              <p className="max-w-md text-xl leading-relaxed text-[#666]">
                Авторские букеты ручной работы с доставкой по городу
              </p>
              <button
                type="button"
                className="bg-[#2d5016] px-10 py-4 text-lg tracking-wide text-white transition-all duration-300 hover:bg-[#3d6020]"
              >
                Выбрать букет
              </button>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/assets/hero.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-[#e0e0e0] pt-20">
            <div className="space-y-2 text-center">
              <div
                className="text-5xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                500+
              </div>
              <div className="text-sm uppercase tracking-wider text-[#666]">Довольных клиентов</div>
            </div>
            <div className="space-y-2 text-center">
              <div
                className="text-5xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                100+
              </div>
              <div className="text-sm uppercase tracking-wider text-[#666]">Видов букетов</div>
            </div>
            <div className="space-y-2 text-center">
              <div
                className="text-5xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5
              </div>
              <div className="text-sm uppercase tracking-wider text-[#666]">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Свежесть
              </h3>
              <p className="leading-relaxed text-[#666]">
                Работаем напрямую с поставщиками, гарантируем свежесть каждого цветка
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Индивидуальность
              </h3>
              <p className="leading-relaxed text-[#666]">
                Создаем уникальные композиции под ваш запрос и предпочтения
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Забота
              </h3>
              <p className="leading-relaxed text-[#666]">
                Бережная упаковка и быстрая доставка в любую точку города
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="border-y border-[#e0e0e0] bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Каталог
          </h2>

          <div className="px-16">
            <Slider {...catalogSettings}>
              {catalogItems.map((item, index) => (
                <div key={item.name} className="px-4">
                  <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-sm">
                      <img
                        src={CATALOG_IMAGES[index % CATALOG_IMAGES.length]}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3
                        className="text-2xl font-light"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xl font-semibold text-[#2d5016]">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-16 text-center">
            <button
              type="button"
              className="border-2 border-[#2a2a2a] px-12 py-4 text-lg tracking-wide transition-all duration-300 hover:bg-[#2a2a2a] hover:text-white"
            >
              Открыть каталог
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Букет дня
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {dailyBouquets.map((bouquet, index) => (
              <div key={bouquet.name} className="space-y-6 border border-[#e0e0e0] bg-white p-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    src={DAILY_IMAGES[index % DAILY_IMAGES.length]}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-2xl font-light"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {bouquet.name}
                    </h3>
                    <span className="text-xl font-semibold text-[#2d5016]">{bouquet.price}</span>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-[#2d5016] py-3 text-lg text-white transition-all duration-300 hover:bg-[#3d6020]"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#e0e0e0] bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img src="/assets/about.png" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="space-y-8">
              <h2
                className="text-6xl font-light leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                О нас
              </h2>
              <p className="text-xl leading-relaxed text-[#666]">
                Мы — команда профессиональных флористов с многолетним опытом создания неповторимых
                цветочных композиций. Каждый букет для нас — это произведение искусства, созданное с
                любовью и вниманием к деталям.
              </p>
              <p className="text-xl leading-relaxed text-[#666]">
                Наша миссия — дарить эмоции и создавать особенные моменты в жизни каждого клиента.
              </p>
              <div className="pt-8">
                <div
                  className="text-4xl font-light italic opacity-60"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  С любовью, команда BUTON
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="bg-[#fafafa] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Доставка
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#2a2a2a]">
                  <Truck size={36} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Быстрая доставка
              </h3>
              <p className="leading-relaxed text-[#666]">
                Доставим ваш заказ в течение 2-3 часов по городу
              </p>
            </div>

            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#2a2a2a]">
                  <Clock size={36} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Работаем 24/7
              </h3>
              <p className="leading-relaxed text-[#666]">Принимаем заказы круглосуточно без выходных</p>
            </div>

            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#2a2a2a]">
                  <MapPin size={36} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-2xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Вся Москва
              </h3>
              <p className="leading-relaxed text-[#666]">Бесплатная доставка при заказе от 3000 ₽</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="border-y border-[#e0e0e0] bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className="mb-16 text-center text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Отзывы
          </h2>

          <div className="px-16">
            <Slider {...reviewsSettings}>
              {reviews.map((review) => (
                <div key={review.name} className="px-4">
                  <div className="min-h-[280px] space-y-6 border border-[#e0e0e0] bg-[#fafafa] p-8">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="#2d5016" stroke="#2d5016" />
                      ))}
                    </div>
                    <p className="text-lg italic leading-relaxed text-[#666]">&quot;{review.text}&quot;</p>
                    <div className="flex items-center gap-4 pt-4">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#d4d4d4]">
                        <img src="/assets/extra.png" alt="" className="h-full w-full object-cover" />
                      </div>
                      <div className="font-semibold">{review.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#2a2a2a] py-24 text-white">
        <div className="mx-auto max-w-2xl px-6">
          <h2
            className="mb-4 text-center text-6xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Оформить заказ
          </h2>
          <p className="mb-12 text-center text-lg text-[#b0b0b0]">
            Заполните форму и мы свяжемся с вами в течение 15 минут
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border-b-2 border-[#666] bg-transparent px-2 py-4 text-lg placeholder-[#888] transition-colors focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full border-b-2 border-[#666] bg-transparent px-2 py-4 text-lg placeholder-[#888] transition-colors focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-[#666] bg-transparent px-2 py-4 text-lg placeholder-[#888] transition-colors focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Комментарий к заказу"
                rows={4}
                className="w-full resize-none border-b-2 border-[#666] bg-transparent px-2 py-4 text-lg placeholder-[#888] transition-colors focus:border-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full bg-[#2d5016] py-5 text-lg tracking-wide text-white transition-all duration-300 hover:bg-[#3d6020]"
            >
              Отправить заказ
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-[#e0e0e0] bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-[#666]">
          <div
            className="mb-4 text-2xl font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            BUTON
          </div>
          <p>© 2026 Цветочный магазин BUTON. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}
