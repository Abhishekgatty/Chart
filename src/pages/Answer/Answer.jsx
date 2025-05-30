

// import React from 'react';
// import data from './answer.json';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const sectionHeaders = {
//   long_essays: 'Long Essays',
//   short_essays: 'Short Essays',
//   short_answers: 'Short Answers',
// };

// const Answer = () => {
//   return (
//     <div className="container mt-4 text-start mb-3 text-justify">
//       {['long_essays', 'short_essays', 'short_answers'].map((sectionKey) => {
//         const sectionData = data.filter((item) => item.section === sectionKey);
//         return (
//           <div key={sectionKey} className="card mb-4 shadow-lg">
//             <div className="card-header bg-light">
//               <h4 className="mb-0">{sectionHeaders[sectionKey]}</h4>
//             </div>
//             <div className="card-body" style={{ paddingRight: '1rem' }}>
//               {sectionData.map((item, index) => (
//                 <div key={index} className="mb-4">
//                   <h5 className="text-dark">Q: {item.question}</h5>
//                   <div className="pt-0 mt-2">
//                     <strong>A:</strong>
//                     {item.response.split('\n').map((para, i) => (
//                       <p key={i} className="mb-2">{para}</p>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Answer;





import React from 'react';
import data from './answer.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const sectionHeaders = {
  long_essays: 'Long Essays',
  short_essays: 'Short Essays',
  short_answers: 'Short Answers',
};

const Answer = () => {
  return (
    <div className="container mt-4 text-start mb-3 pb-5  text-justify ">
      {['long_essays', 'short_essays', 'short_answers'].map((sectionKey) => {
        const sectionData = data.filter((item) => item.section === sectionKey);
        return (
          <div key={sectionKey} className="card mb-4 shadow-lg">
            <div className="card-header bg-light">
              <h4 className="mb-0">{sectionHeaders[sectionKey]}</h4>
            </div>
            <div className="card-body" style={{ paddingRight: '1rem' }}>
              {sectionData.map((item, index) => (
                <div key={index} className="mb-4">
                  <h5 className="text-dark">Q: {item.question}</h5>
                  <div className="pt-0 mt-2">
                    <strong>A:</strong>
                    {item.response.split('\n').map((para, i) => (
                      <p key={i} className="mb-2">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Answer;
