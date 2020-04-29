import React from 'react'
import { Button } from './Children';

export const LikeButton = props => <Button handleClick={() => alert('Curtir!')}>Curtir</Button>
export const SearchButton = props => <Button handleClick={() => alert('Pesquisar!')}>Pesquisar</Button>

export default { LikeButton, SearchButton };