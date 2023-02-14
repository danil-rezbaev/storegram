import { ProductItem } from '../../types/catalog/productsDataTypes'

export const productsData: ProductItem[] = [
  {
    id: 100,
    category: 'pizza',
    img: ['https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036'],
    title: 'Пицца четыре сыра',
    description: 'Соус томатный, шампиньоны, помидоры, сыр моцарелла',
    price: 500,
    info: 'Вес: 300г Ккал: 100г',
    properties: {
      title: 'Пицца четыре сыра',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
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
    category: 'pizza',
    img: ['https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg', 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg'],
    title: 'С ананасом и беконом',
    description: 'Кусочки ананаса, сочное куриное филе, ароматный блю чиз, хрустящий бекон, моцарелла и сливочный сыр «крем чиз»',
    price: 399,
    properties: {
      title: 'С ананасом и беконом',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    },
    options: [
      {
        id: 201,
        title: 'Размер',
        type: 'checkbox',
        values: [
          { id: 2, title: 'Средняя', priceChange: 0 },
          { id: 3, title: 'Большая', priceChange: +150 }
        ]
      },
      {
        id: 202,
        title: 'Тесто',
        type: 'radio',
        values: [
          { id: 1, title: 'Тонкое', priceChange: -50 },
          { id: 2, title: 'Стандартное', priceChange: 0 }
        ]
      }
    ]
  },
  {
    id: 300,
    category: 'pizza',
    img: ['https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg', 'https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg'],
    title: 'Крем-чиз с грибами',
    description: 'Сочная говядина, хрустящий бекон, шампиньоны, лук, моцарелла, сливочный сыр «крем чиз» и смесь итальянских трав',
    price: 900,
    properties: {
      title: 'Крем-чиз с грибами',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 400,
    category: 'pizza',
    img: ['https://www.restoranka.ru/ckfinder/userfiles/images/pizza1.jpg', 'https://www.restoranka.ru/ckfinder/userfiles/images/pizza1.jpg'],
    title: 'Пепперони Грин',
    description: 'Пикантная пепперони, сладкий перец, Моцарелла с фирменным томатным соусом',
    price: 329,
    properties: {
      title: 'Пепперони Грин',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 500,
    category: 'burger',
    img: ['https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png'],
    title: 'Биг Спешиал Три Сыра',
    description: 'Новое прочтение всем знакомого бургера. Большой сочный бифштекс из 100% говядины, приготовленный на гриле. Три вкуснейших сыра: нежный Эмменталь, сливочный Гауда и плавленый Чеддер в виде топпинга. Свежие овощи и знаменитый соус с дымком',
    price: 299,
    properties: {
      title: 'Биг Спешиал Три Сыра',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 600,
    category: 'burger',
    img: ['https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png'],
    title: 'Гранд Де Люкс',
    description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус',
    price: 185,
    properties: {
      title: 'Гранд Де Люкс',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 110,
    category: 'sushi',
    img: ['https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036', 'https://e0.edimdoma.ru/data/posts/0002/1429/21429-ed4_wide.jpg?1631194036'],
    title: 'Пицца четыре сыра',
    description: 'Соус томатный, шампиньоны, помидоры, сыр моцарелла',
    price: 500,
    info: 'Вес: 300г Ккал: 100г',
    properties: {
      title: 'Пицца четыре сыра',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
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
    id: 210,
    category: 'sushi',
    img: ['https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg', 'https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120131085053/171027192707/p_O.jpg'],
    title: 'С ананасом и беконом',
    description: 'Кусочки ананаса, сочное куриное филе, ароматный блю чиз, хрустящий бекон, моцарелла и сливочный сыр «крем чиз»',
    price: 399,
    properties: {
      title: 'С ананасом и беконом',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    },
    options: [
      {
        id: 201,
        title: 'Размер',
        type: 'checkbox',
        values: [
          { id: 2, title: 'Средняя', priceChange: 0 },
          { id: 3, title: 'Большая', priceChange: +150 }
        ]
      },
      {
        id: 202,
        title: 'Тесто',
        type: 'radio',
        values: [
          { id: 1, title: 'Тонкое', priceChange: -50 },
          { id: 2, title: 'Стандартное', priceChange: 0 }
        ]
      }
    ]
  },
  {
    id: 310,
    category: 'sushi',
    img: ['https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg', 'https://cdn.7days.ru/pic/70a/971797/1382739/86.jpg'],
    title: 'Крем-чиз с грибами',
    description: 'Сочная говядина, хрустящий бекон, шампиньоны, лук, моцарелла, сливочный сыр «крем чиз» и смесь итальянских трав',
    price: 900,
    properties: {
      title: 'Крем-чиз с грибами',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 410,
    category: 'sushi',
    img: ['https://www.restoranka.ru/ckfinder/userfiles/images/sushi1.jpg', 'https://www.restoranka.ru/ckfinder/userfiles/images/sushi1.jpg'],
    title: 'Пепперони Грин',
    description: 'Пикантная пепперони, сладкий перец, Моцарелла с фирменным томатным соусом',
    price: 329,
    properties: {
      title: 'Пепперони Грин',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 510,
    category: 'desert',
    img: ['https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/23452b7e92624e8fb33be73dc0104a3d/android/l/main.png'],
    title: 'Биг Спешиал Три Сыра',
    description: 'Новое прочтение всем знакомого бургера. Большой сочный бифштекс из 100% говядины, приготовленный на гриле. Три вкуснейших сыра: нежный Эмменталь, сливочный Гауда и плавленый Чеддер в виде топпинга. Свежие овощи и знаменитый соус с дымком',
    price: 299,
    properties: {
      title: 'Биг Спешиал Три Сыра',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  },
  {
    id: 610,
    category: 'desert',
    img: ['https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png', 'https://ma-prod-cdn.mcdonalds.ru/product/2a3a081a0e4f41c59df2311afc57443b/android/l/main.png'],
    title: 'Гранд Де Люкс',
    description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, свежий салат, кусочек помидора и лук, маринованные огурчики, кетчуп, горчица и специальный соус',
    price: 185,
    properties: {
      title: 'Гранд Де Люкс',
      description: 'Пищевая ценность на 100 г',
      table: [
        {
          title: 'Пищевая ценность',
          value: '255,3 ккал'
        },
        {
          title: 'Белки',
          value: '10,2 г'
        },
        {
          title: 'Жиры',
          value: '9,7 г'
        },
        {
          title: 'Углеводы',
          value: '30 г'
        },
        {
          title: 'Вес',
          value: '400 г'
        }
      ]
    }
  }
]
