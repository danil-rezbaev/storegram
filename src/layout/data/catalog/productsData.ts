import { ProductType } from '../../types/catalog/productsDataTypes'

export const productsData: ProductType[] = [
  {
    id: 1,
    category: {
      code: 'pizza',
      title: 'Пицца'
    },
    items: [
      {
        id: 100,
        img: ['https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036'],
        title: 'Пицца четыре сыра',
        description: 'Соус томатный, шампиньоны, помидоры, сыр моцарелла',
        price: 500,
        info: 'Вес: 300г Ккал: 100г',
        properties: {
          weight: 600
        },
        options: [
          {
            id: 101,
            title: 'Размер',
            type: 'checkbox',
            values: [
              { id: 1, title: 'Маленькая', priceChange: -200 },
              { id: 2, title: 'Средняя', priceChange: 0 },
              { id: 3, title: 'Большая', priceChange: +250 }
            ]
          },
          {
            id: 102,
            title: 'Тесто',
            type: 'radio',
            values: [
              { id: 1, title: 'Тонкое', priceChange: -100 },
              { id: 2, title: 'Стандартное', priceChange: 0 }
            ]
          }
        ]
      },
      {
        id: 200,
        img: ['https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg', 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg'],
        title: 'С ананасом и беконом',
        description: 'Кусочки ананаса, сочное куриное филе, ароматный блю чиз, хрустящий бекон, моцарелла и сливочный сыр «крем чиз»',
        price: 399,
        properties: {
          weight: 600
        }
      },
      {
        id: 300,
        img: ['https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg', 'https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg'],
        title: 'Крем-чиз с грибами',
        description: 'Сочная говядина, хрустящий бекон, шампиньоны, лук, моцарелла, сливочный сыр «крем чиз» и смесь итальянских трав',
        price: 900,
        properties: {
          weight: 600
        }
      },
      {
        id: 400,
        img: ['https://www.restoranka.ru/ckfinder/userfiles/images/pizza1.jpg', 'https://www.restoranka.ru/ckfinder/userfiles/images/pizza1.jpg'],
        title: 'Пепперони Грин',
        description: 'Пикантная пепперони, сладкий перец, Моцарелла с фирменным томатным соусом',
        price: 329,
        properties: {
          weight: 600
        }
      }
    ]
  },
  {
    id: 2,
    category: {
      code: 'burger',
      title: 'Бургер'
    },
    items: [
      {
        id: 500,
        img: ['https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png'],
        title: 'Биг Спешиал Три Сыра',
        description: 'Новое прочтение всем знакомого бургера. Большой сочный бифштекс из 100% говядины, приготовленный на гриле. Три вкуснейших сыра: нежный Эмменталь, сливочный Гауда и плавленый Чеддер в виде топпинга. Свежие овощи и знаменитый соус с дымком',
        price: 299,
        properties: {
          weight: 600
        }
      },
      {
        id: 600,
        img: ['https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png'],
        title: 'Гранд Де Люкс',
        description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус',
        price: 185,
        properties: {
          weight: 600
        }
      }
    ]
  }
]
