import PostsTable from "@/components/posts/PostsTable";
import Backbutton from "@/components/Backbutton";
import PostPagination from "@/components/posts/PostPagination";
const PostsPage = () => {
    return (  
        <div>
            <Backbutton text='Go Back' link='/'/>
            <PostsTable/>
            {/* <PostPagination/> */}

        </div>
    );
}
 
export default PostsPage;