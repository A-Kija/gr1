import { createContext, useContext } from 'react';
import usePosts from '../Hooks/usePosts';
import useComments from '../Hooks/useComments';
import RouterContext from './Router';


const DataContext = createContext();

export const Data = ({ children }) => {

    // duomenų gavimas ir Routerio konteksto. (duomenys tarp kontekstų)
    const { page, parameters } = useContext(RouterContext);


    const { posts, dispachPosts } = usePosts(page);

    const { comments, getComments, addNewPostComment, upVoteComment, downVoteComment, addNewCommentComment } = useComments();


    console.log('Perkraunamas Data.jsx:', page, posts);


    return (
        <DataContext.Provider value={{
            posts,
            comments, 
            getComments,
            dispachPosts,
            addNewPostComment,
            upVoteComment,
            downVoteComment,
            addNewCommentComment
        }}>
            {children}
            {console.log('Renderinamas DATA su posts:', posts)}
        </DataContext.Provider>
    );
}

export default DataContext;