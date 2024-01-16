import { Models } from "appwrite"
import Loader from "./Loader"
import GridPostList from "./GridPostLIst"

type SearchResultsProps = {
  isSEARCHFetching: boolean
  searchedPosts: Models.Document[],
}

const SearchResults = ({ isSearchFetching, searchedPosts}: SearchResultsProps) => {
  if(isSearchFetching) return <Loader />

  if(seachedPosts && searchedPosts.documents.length > 0) {
    return (
      <GridPostList posts={searchedPosts.documents}/>
    )
  }

  return (
    <div>SearchResults</div>
  )
}

export default SearchResults