// import { Link } from "react-router-dom";
// const Footer = () => {
//   return (
//     <div>
//       <div class="container my-5">
//         <footer class="text-center text-lg-start text-color">
//           <div class="container-fluid p-4 pb-0">
//             <section class="">
//               <p class="d-flex justify-content-center align-items-center">
//                 <span class="me-3 text-color">Login from here</span>
//                 <Link to="/user/login" class="active">
//                   <button
//                     type="button"
//                     class="btn btn-outline-light btn-rounded bg-color custom-bg-text"
//                   >
//                     Log in
//                   </button>
//                 </Link>
//               </p>
//             </section>

//             <hr class="mb-4" />
//           </div>

//           <div class="text-center">
//             © 2023 Copyright:
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid p-0">
        <footer className="text-center text-lg-start text-light bg-dark py-3">
          <div className="container">
            <section className="mb-4">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-light">Login from here</span>
                <Link to="/user/login" className="active">
                  <button
                    type="button"
                    className="btn btn-outline-light btn-rounded bg-color custom-bg-text"
                  >
                    Log in
                  </button>
                </Link>
              </p>
            </section>
          </div>

          <div className="text-center text-light p-2">
            © 2023 Online Banking System
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
