import { AiOutlineSearch } from 'react-icons/ai';
import { FaArrowTurnUp } from 'react-icons/fa6';
import univer from '../../Images/univer.png';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="search-bar">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
      </div>
      <div className="course-fees">
        <div className="container-courseFees">
          <div className="box-courseFees distance-start-15">
            <h5 className="courseFees-content">Information Technology</h5>
            <h4>
              <span className="counter">$5000</span>
              <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
              <div className="progress-bar-success"></div>
            </div>
          </div>
          <div className="box-courseFees distance-center-15">
            <h5 className="courseFees-content">Business Administration</h5>
            <h4>
              <span className="counter">$3000</span>
              <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
              <div className="progress-bar-purple"></div>
            </div>
          </div>
          <div className="box-courseFees distance-center-15">
            <h5 className="courseFees-content">Graphic Design</h5>
            <h4>
              <span className="counter">$2000</span>
              <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
              <div className="progress-bar-green"></div>
            </div>
          </div>
          <div className="box-courseFees distance-end-15">
            <h5 className="courseFees-content">Logistics</h5>
            <h4>
              <span className="counter">$3500</span>
              <span className="tuition-fees">Tuition Fees</span>
            </h4>
            <div className="progress-bar">
              <div className="progress-bar-red"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-main-img">
        <div className="container-main-image">
          <div className="image-container">
            <img
              src={univer}
              alt=""
              style={{ height: '600px', borderRadius: '8px' }}
            />
          </div>
          <div className="International">
            <h4 style={{ marginLeft: '25px' }}>International Students</h4>
            <ul>
              <li>
                <h4 className="number-student">250</h4>
                <div className="infor-international">
                  <span className="location">From USA</span>
                  <span className="percent">
                    75%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-purple"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">150</h4>
                <div className="infor-international">
                  <span className="location">From England</span>
                  <span className="percent">
                    55%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-UK"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">350</h4>
                <div className="infor-international">
                  <span className="location">From Canada</span>
                  <span className="percent">
                    20%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-Can"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">550</h4>
                <div className="infor-international">
                  <span className="location">From VietNam</span>
                  <span className="percent">
                    60%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-VN"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">50</h4>
                <div className="infor-international">
                  <span className="location">From India</span>
                  <span className="percent">
                    33%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-In"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">50</h4>
                <div className="infor-international">
                  <span className="location">From India</span>
                  <span className="percent">
                    33%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-Can"></div>
                </div>
              </li>
              <li>
                <h4 className="number-student">50</h4>
                <div className="infor-international">
                  <span className="location">From India</span>
                  <span className="percent">
                    33%
                    <FaArrowTurnUp />
                  </span>
                </div>
                <div className="Student-bar">
                  <div className="Student-bar-In"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
