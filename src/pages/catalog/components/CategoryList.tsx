import React, { FC } from 'react'
import CategoryItem from './CategoryItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/parallax'
import { Category } from '../../../layout/types/catalog/productsDataTypes'

export type CategoryListProps = {
  categories: Category[],
  visibleCategory?: string | null,
}

const CategoryList: FC<CategoryListProps> = (props) => {
  const {
    categories,
    visibleCategory
  } = props

  return (
    <div className="category-list">
      <Swiper
        spaceBetween={7.5}
        parallax={true}
        slidesPerView="auto"
      >
        { categories.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <CategoryItem
              visibleCategory={visibleCategory}
              {...item}
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}

export default CategoryList
