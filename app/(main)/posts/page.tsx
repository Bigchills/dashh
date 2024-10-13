import PostsTable from "@/components/posts/PostsTable";
import Backbutton from "@/components/Backbutton";
const PostsPage = () => {
    return (
        <div>
            <Backbutton text='Go Back' link="/"/>
            <PostsTable/>
        </div>

     );
}
 
export default PostsPage;