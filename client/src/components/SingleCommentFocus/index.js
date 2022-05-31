import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_COMMENT } from '../../utils/queries';
import { Link } from 'react-router-dom';
import ReactionList from '../../components/ReactionList';
import ReactionForm from '../../components/ReactionForm';
import Auth from '../../utils/auth';

const SingleCommentFocus = props => {
  const { id: commentId } = useParams();
  console.log(commentId);

  const { loading, data } = useQuery(QUERY_COMMENT, {
    variables: { id: commentId },  // The id property on the variables object will become the $id parameter in the GraphQL query
  });

  const comment = data?.comment || [];
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
    <div className='flex-row justify-space-between'>
      
      <div className={`col-12 col-lg-8 mb-3 ${Auth.loggedIn && 'col-lg-8'}`}>
      &laquo;&laquo;<Link to={`/cakediscussion`}><span> View your custom cake dashboard </span></Link> &raquo;&raquo;
      </div>     
      <div className="col-12 col-lg-3 mb-3"> </div> 
      
      <div className="col-12 col-lg-8 mb-3">
        <h4> Comment's Feedback</h4>
      </div>
      <div className="col-12 col-lg-3 mb-3">  <h5>Welcome, {comment.username}</h5></div> 

      <div className="col-12 col-lg-8 mb-3">  
          <div className="card mb-3">
            <p className="card-header">
              <span style={{ fontWeight: 700 }} className="text-light">
                {comment.username}
              </span>{' '}
              comment on {comment.createdAt}
            </p>
            <div className="card-body">
              <p>{comment.commentText}</p>
            </div>
        </div>

          {comment.reactionCount > 0 && (
            <ReactionList reactions={comment.reactions} />
          )}

          {Auth.loggedIn() && <ReactionForm commentId={comment._id} />}

          <br></br>
      </div>                           
        
      </div>
  </main>

  );
};
export default SingleCommentFocus;


//     <main>
//       <div className='flex-row justify-space-between'>     
//         <div className="col-12 mb-3">
//             <h4> Welcome to Florally Enchanting Cake Website</h4>
// 
//         </div>
//         <div>
//           <div className="card mb-3">
//             <p className="card-header">
//               <span style={{ fontWeight: 700 }} className="text-light">
//                 {comment.username}
//               </span>{' '}
//               comment on {comment.createdAt}
//             </p>
//             <div className="card-body">
//               <p>{comment.commentText}</p>
//             </div>
//           </div>
// 
//           {comment.reactionCount > 0 && (
//             <ReactionList reactions={comment.reactions} />
//           )}
// 
//           {Auth.loggedIn() && <ReactionForm commentId={comment._id} />}
// 
//           <br></br>
//         </div>
//       </div>
//     </main>

   

