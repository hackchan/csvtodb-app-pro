import React, { Fragment } from 'react'
import { ImgWrapper, Img, Button, Article, LikeIcon } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
const defaultIMage =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = defaultIMage }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? LikeIcon : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='' />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
