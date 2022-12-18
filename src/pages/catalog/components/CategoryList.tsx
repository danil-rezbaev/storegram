import React, { FC } from 'react'
import CategoryItem from './CategoryItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/parallax'
import { productsData } from '../../../layout/data/catalog/productsData'

export type CategoryListProps = {
  visibleCategory?: string | null
}

const CategoryList: FC<CategoryListProps> = (props) => {
  const {
    visibleCategory
  } = props

  return (
    <div className="category-list">
      <Swiper
        spaceBetween={10}
        parallax={true}
        slidesPerView="auto"
      >
        { productsData.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <CategoryItem
              {...item.category}
              visibleCategory={visibleCategory}
            />
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}

export default CategoryList
