import { ProductItem } from '../../types/catalog/productsDataTypes'

export const productsData: ProductItem[] = [
  {
    id: '100',
    category: 'pizza',
    img: ['https://sun9-54.userapi.com/impg/59Qi2Htf5I-uVOvvrkNTJlemDORP934xDvhh9Q/tU6vlnpf0bA.jpg?size=750x751&quality=95&sign=f0d58dc41a190714455df89d1d03278f&optionType=album', 'https://sun9-60.userapi.com/impg/F2SHCkFqtJzNpy7RrFtLODEVyJEg9TbS-i0fmQ/eEKrp-6G7AM.jpg?size=750x751&quality=95&sign=0e0307b4873b542e6bddb4e01407598f&optionType=album'],
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
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Маленькая', priceChange: -200 },
          { id: '2', title: 'Средняя', priceChange: 0 },
          { id: '3', title: 'Большая', priceChange: +250 }
        ]
      },
      {
        id: '102',
        title: 'Тесто',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Тонкое', priceChange: -100 },
          { id: '2', title: 'Стандартное', priceChange: 0 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Шампиньоны', priceChange: +50 },
          { id: '2', title: 'Оливки', priceChange: +75 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '200',
    category: 'pizza',
    img: ['https://sun9-40.userapi.com/impg/wG2JjHMPDrDc2HBpuMIsoyH7r68sdcoYK7jzgA/puR8NerHLIQ.jpg?size=750x750&quality=95&sign=a8a36341376daefc0bb61af54b60c534&optionType=album', 'https://sun9-34.userapi.com/impg/Xrx3lQglWMpMz972_mHNtuWRaKSc1If0eD89rw/WAwI8T_iyCM.jpg?size=750x750&quality=95&sign=4c8c08124a08bcf1c151f8e57f16286e&optionType=album'],
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
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Маленькая', priceChange: -200 },
          { id: '2', title: 'Средняя', priceChange: 0 },
          { id: '3', title: 'Большая', priceChange: +250 }
        ]
      },
      {
        id: '102',
        title: 'Тесто',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Тонкое', priceChange: -100 },
          { id: '2', title: 'Стандартное', priceChange: 0 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Шампиньоны', priceChange: +50 },
          { id: '2', title: 'Оливки', priceChange: +75 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '300',
    category: 'pizza',
    img: ['https://sun9-77.userapi.com/impg/LKJFEAyx-z8GytiA3LPvXdJpwUmRjKFe94hMyQ/_gv1G5rWub4.jpg?size=750x750&quality=95&sign=7cdcbfcd4b916a2773cbd1c64d699f34&optionType=album'],
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
    id: '400',
    category: 'pizza',
    img: ['https://sun9-47.userapi.com/impg/HBqeTC0QR6NyCguLFrji0hjqSFeVa3cKKXZ43w/m2uBZRnkFX0.jpg?size=750x750&quality=95&sign=d85b6f87b903fe893e9d023aa83c4840&optionType=album'],
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
    id: '500',
    category: 'pizza',
    img: ['https://sun9-54.userapi.com/impg/d5eCDgC_LSwG_hDkDcBgLdVwUznFd-z_DshUJQ/vW5UxpJF6jM.jpg?size=750x751&quality=95&sign=b0f4c1a5bbc43b014edcf3efe2ed08ae&optionType=album'],
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
    },
    options: [
      {
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Маленькая', priceChange: -200 },
          { id: '2', title: 'Средняя', priceChange: 0 },
          { id: '3', title: 'Большая', priceChange: +250 }
        ]
      },
      {
        id: '102',
        title: 'Тесто',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Тонкое', priceChange: -100 },
          { id: '2', title: 'Стандартное', priceChange: 0 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Шампиньоны', priceChange: +50 },
          { id: '2', title: 'Оливки', priceChange: +75 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '600',
    category: 'burger',
    img: ['https://sun9-46.userapi.com/impg/DwoyXGlGdl7E-1OHvMwjIVegS9P5ZyVh6gplEg/OlN2qSMIgGc.jpg?size=750x751&quality=95&sign=c085aa47d23bb1b4da33ccf32fb9588d&optionType=album'],
    title: 'Гранд Три Сыра',
    description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, три сыра: нежный Эмменталь, ароматный Пармезан, сливочный Чеддер, карамелизованная булочка с кунжутом, кетчуп, горчица, свежий лук и маринованные огурчики',
    price: 329,
    properties: {
      title: 'Гранд Три Сыра',
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
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Средний', priceChange: 0 },
          { id: '2', title: 'Экстра', priceChange: +300 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Сыр', priceChange: +50 },
          { id: '2', title: 'Маринованные огурчики', priceChange: +35 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '700',
    category: 'burger',
    img: ['https://sun9-4.userapi.com/impg/2cKL7_NbeimjKgRYc2T1yVnwuvVlZSutY9mzhg/6s8rRdMDlYg.jpg?size=750x751&quality=95&sign=7760dcf0bde22b219209f4103da86c58&optionType=album'],
    title: 'Монблан Бургер',
    description: 'Сочный бифштекс из натуральной говядины, приготовленный на гриле, три сыра: нежный Эмменталь, ароматный Пармезан, сливочный Чеддер, карамелизованная булочка с кунжутом, кетчуп, горчица, свежий лук и маринованные огурчики',
    price: 429,
    properties: {
      title: 'Монблан Бургер',
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
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Средний', priceChange: 0 },
          { id: '2', title: 'Экстра', priceChange: +300 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Сыр', priceChange: +50 },
          { id: '2', title: 'Маринованные огурчики', priceChange: +35 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '800',
    category: 'burger',
    img: ['https://sun9-36.userapi.com/impg/ibwfoe2WYqSXlx9DNpLClIm4EI-je9-f3ap0Hg/sZ2LmCOZX8c.jpg?size=750x751&quality=95&sign=f6fd300d683cfdc4b6f51a4ee338e006&optionType=album'],
    title: 'Двойной Гранд',
    description: 'Два сочных бифштекса из натуральной говядины, приготовленных на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, лук, маринованные огурчики, кетчуп и горчицаДва сочных бифштекса из натуральной говядины, приготовленных на гриле, карамелизованная булочка с кунжутом, два ломтика сыра Чеддер, лук, маринованные огурчики, кетчуп и горчица',
    price: 379,
    properties: {
      title: 'Двойной Гранд',
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
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Сыр', priceChange: +50 },
          { id: '2', title: 'Маринованные огурчики', priceChange: +35 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '900',
    category: 'burger',
    img: ['https://sun9-27.userapi.com/impg/_VAlM15J3eqIca_qqCrtkU2EMrkdCaBv6nz0uQ/mo_e3OhUrA0.jpg?size=750x751&quality=95&sign=88e75cea57ce6097563020c1e7393930&optionType=album'],
    title: 'Двойной Биг Спешиал',
    description: 'Тот самый Бургер с двумя большими рублеными бифштексами из 100% говядины на булочке с кунжутом. Особенный вкус бургеру придает специальный соус с дымком, 3 кусочка сыра «эмменталь», ломтик помидора, свежий салат и лук.',
    price: 519,
    properties: {
      title: 'Двойной Биг Спешиал',
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
        id: '101',
        title: 'Размер',
        optionType: 'radio',
        values: [
          { id: '1', title: 'Средний', priceChange: 0 },
          { id: '2', title: 'Экстра', priceChange: +300 }
        ]
      },
      {
        id: '103',
        title: 'дополнительно',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Сыр', priceChange: +50 },
          { id: '2', title: 'Маринованные огурчики', priceChange: +35 },
          { id: '3', title: 'Томаты', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '1000',
    category: 'desert',
    img: ['https://sun9-13.userapi.com/impg/pgiZ0qUQB2novqbu-e1IYYJvCXIn8dqqM7f-1A/97YjPowuv5w.jpg?size=750x750&quality=95&sign=6233c4446316a168d01a5f5146288dfa&optionType=album'],
    title: 'Блины с ягодами',
    description: 'Румяные бездрожжевые блинчики с яркой начинкой из клубники, крыжовника и рябины — для самого вкусного завтрака и уютного семейного чаепития!',
    price: 189,
    properties: {
      title: 'Блины с ягодами',
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
        id: '103',
        title: 'ягоды',
        optionType: 'checkbox',
        values: [
          { id: '1', title: 'Клюква', priceChange: +50 },
          { id: '2', title: 'Клубничка', priceChange: +35 },
          { id: '3', title: 'Смородина', priceChange: +25 }
        ]
      }
    ]
  },
  {
    id: '1100',
    category: 'desert',
    img: ['https://sun9-47.userapi.com/impg/xjX1wOiG5v5pfyX3UMIiMDG2tglY0x_FLXysKA/87xV-OrGc5w.jpg?size=750x750&quality=95&sign=8fcff249f24e122425570d67b3a8a651&optionType=album'],
    title: 'Брауни',
    description: 'Брауни – один из самых популярных десертов в мире, шоколадное пирожное с влажной серединкой.  Ярко выраженный вкус и восхитительный шоколадный аромат, в сочетании с тонкой и хрустящей корочкой, делают этот изумительный десерт лучшим в кулинарном искусстве.',
    price: 219,
    properties: {
      title: 'Брауни',
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
    id: '1200',
    category: 'desert',
    img: ['https://sun9-41.userapi.com/impg/90Qn_oGIdObvwPCHVDoJfxy9JZvrXjuPGuZB_w/yvG4RnDjfMw.jpg?size=750x750&quality=95&sign=84882fef2684f1d64f52edde5df5c6ef&optionType=album'],
    title: 'Чизкейк',
    description: 'Чизкейк -  это восхитительный и необычайно популярный десерт. Многие любят его за нежный и легкий вкус. Он не слишком сладкий, но невероятно приятный. Сейчас  это чудо чаще всего готовят на основе мягких сливочных сыров, таких как: филадельфия, маскарпоне.',
    price: 179,
    properties: {
      title: 'Чизкейк',
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
    id: '1300',
    category: 'drinks',
    img: ['https://sun9-51.userapi.com/impg/QrrHTnNLd8TnTj6UJwxaEPu_DwK8dTOYBcr5ew/gp5fP7bGbDs.jpg?size=750x750&quality=95&sign=44403293a012a5740444311ac95e57be&optionType=album'],
    title: 'Фруктовый чай',
    description: 'При заваривании фруктового чая кипятком получается горячий напиток — приятный фруктовый настой коричневого или тёмно-коричневого цвета с кисловато-горьковатым вкусом, который употребляют с сахаром и обычно без молока. ',
    price: 129,
    properties: {
      title: 'Фруктовый чай',
      description: 'Свойства',
      table: [
        {
          title: 'Объем',
          value: '400 мл'
        }
      ]
    }
  },
  {
    id: '1400',
    category: 'drinks',
    img: ['https://sun9-65.userapi.com/impg/z8VS7LC643wMOn66hV4-XO9u_LvdJXeb3lNrkw/XFlw_fUj0qM.jpg?size=750x751&quality=95&sign=caa05597fa9b63b08749f92f9c2f523a&optionType=album'],
    title: 'Черный чай',
    description: 'Черный чай — это ароматный напиток, приготовленный из предварительно высушенных листьев чайного куста рода Камелия из семейства Чайные.',
    price: 89,
    properties: {
      title: 'Черный чай',
      description: 'Свойства',
      table: [
        {
          title: 'Объем',
          value: '400 мл'
        }
      ]
    }
  },
  {
    id: '1500',
    category: 'drinks',
    img: ['https://sun9-59.userapi.com/impg/EF6ZAHfC8Z6bcTNNpHUQsMACTiSDzMozju1aRQ/XgsQ186naBU.jpg?size=750x751&quality=95&sign=603bc16459950961452fa31901444e7a&optionType=album'],
    title: 'Латте',
    description: 'Ла́тте (англизированный и сокращённый вариант от итал. caffè latte [kaffeˈlatte] — «кофе с молоком») — кофейный напиток, на основе молока, представляющий собой трёхслойную смесь из пены, молока (итал. latte) и кофе эспрессо.',
    price: 89,
    properties: {
      title: 'Латте',
      description: 'Свойства',
      table: [
        {
          title: 'Объем',
          value: '300 мл'
        }
      ]
    }
  }
]
