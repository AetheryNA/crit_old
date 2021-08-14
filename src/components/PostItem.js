import Like from '../../public/img/icons/like.svg'
import Favourite from '../../public/img/icons/favourite.svg'

const PostItem = () => {
  return (
    <div className="post-item">
      <div className="post-item__profile flex items-center overflow-hidden">
        <img
          className="h-8 w-8 rounded-full"
          src="/img/pfp.png"
          alt=""
        />
        <a className="ml-3"> Alice Prisma </a>
      </div>

      <div className="post-item__content mt-4 mb-2">
        <div className="post-item__image mb-6">
          <img className="mx-auto" src="https://picsum.photos/1600/900" alt="" />  
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec sem risus. Donec quis ex blandit, interdum arcu nec, iaculis ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin feugiat mollis nisl, sed congue justo mollis non. Suspendisse et est eu arcu gravida luctus.
        </p>
        <div className="post-item__social-status flex justify-end mt-6">
          <form className="post-item__comment mt-auto mr-auto w-8/12 md:w-1/2">
            <input className="py-0.5 px-2 w-full" placeholder="Comment here..."/>
          </form>

          <div className="post-item__svg mr-2.5">
            <Like />
          </div>
          <div className="post-item__svg">
            <Favourite />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem
