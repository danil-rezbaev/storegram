import React, { FC, useRef, useState } from 'react'
import CategoryItem from './CategoryItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { HashNavigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/parallax'
import { Category } from '../../../layout/types/Category'

export type CategoryListProps = {
  categories: Category[],
  visibleCategory?: string | null,
}

const CategoryList: FC<CategoryListProps> = (props) => {
  const {
    categories,
    visibleCategory
  } = props

  SwiperCore.use([HashNavigation])
  const swiperRef = useRef(null) as any

  const swiperOnInit = (core: SwiperCore) => {
    swiperRef.current = core.el
  }

  const swiperOptions = {
    hashNavigation: {
      watchState: true,
      replaceState: true
    }
  }

  const [active, setActive] = useState<string | null>(visibleCategory ?? null)

  const activeHandler = (code: string) => {
    const element = document.getElementById(code)

    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActive(code)
      window.location.hash = `navigation-${code}`
    }
  }

  const onHashSet = () => {
    const hash = window.location.hash
    const hashFormat = hash.slice(12, hash.length)
    setActive(hashFormat)
  }

  return (
    <div className="category-list">
      <Swiper
        parallax={true}
        slidesPerView="auto"
        onInit={ swiperOnInit }
        hashNavigation={ swiperOptions.hashNavigation }
        grabCursor
        allowTouchMove
        centeredSlidesBounds={true}
        onHashChange={onHashSet}
      >
        { categories.map((item) => (
          <SwiperSlide
            key={item.id}
            data-hash={ `navigation-${item.code}` }
            className='category-list--slide'
          >
            <CategoryItem
              active={ active === item.code }
              activeHandler={activeHandler}
              {...item}
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}

export default CategoryList
