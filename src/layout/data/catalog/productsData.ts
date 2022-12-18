export const productsData = [
  {
    id: 1,
    category: {
      code: 'pizza',
      title: 'Пицца'
    },
    items: [
      {
        id: 1,
        img: 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036',
        title: 'Пицца четыре сыра',
        description: 'Соус томатный, шампиньоны, помидоры, сыр моцарелла',
        weight: 600,
        price: 500,
        count: 0,
        options: {
          properties: [
            {
              id: 1,
              title: 'Размер',
              values: ['Маленькая', 'Средняя', 'Большая']
            },
            {
              id: 2,
              title: 'Тесто',
              values: ['Тонкое', 'Стандартное']
            }
          ]
        }
      },
      {
        id: 2,
        img: 'https://knews.kg/wp-content/uploads/2019/09/pitstsa.jpg',
        title: 'С ананасом и беконом',
        description: 'Кусочки ананаса, сочное куриное филе, ароматный блю чиз, хрустящий бекон, моцарелла и сливочный сыр «крем чиз»',
        weight: 630,
        price: 399,
        count: 0
      },
      {
        id: 3,
        img: 'https://baking-academy.ru/upload/iblock/591/591d601f27b30d737aecafb72d046db9.jpg',
        title: 'Крем-чиз с грибами',
        description: 'Сочная говядина, хрустящий бекон, шампиньоны, лук, моцарелла, сливочный сыр «крем чиз» и смесь итальянских трав',
        weight: 680,
        price: 900,
        count: 0
      },
      {
        id: 4,
        img: 'https://www.restoranka.ru/ckfinder/userfiles/images/pizza1.jpg',
        title: 'Пепперони Грин',
        description: 'Пикантная пепперони, сладкий перец, Моцарелла с фирменным томатным соусом',
        weight: 700,
        price: 329,
        count: 0
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
        id: 1,
        img: 'https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png',
        title: 'Биг Спешиал Три Сыра',
        description: 'Новое прочтение всем знакомого бургера. Большой сочный бифштекс из 100% говядины, приготовленный на гриле. Три вкуснейших сыра: нежный Эмменталь, сливочный Гауда и плавленый Чеддер в виде топпинга. Свежие овощи и знаменитый соус с дымком',
        weight: 500,
        price: 299,
        count: 0
      },
      {
        id: 2,
        img: 'https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png',
        title: 'Гранд Де Люкс',
        description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус',
        weight: 300,
        price: 185,
        count: 0
      }
    ]
  }
]
