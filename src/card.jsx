import React from "react";
import "./App.css";

function Card(props) {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {props.price.map((item, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      {item.plan}
                    </h5>
                    <h6 className="card-price text-center">
                      {item.priceData}
                      <span className="period">/month</span>
                    </h6>
                    <hr />
                    {item.listData.map((itemData, index) => {
                      return (
                        <ul className="fa-ul" key={index}>
                          <li className={itemData.visible ? "" : "text-muted"}>
                            <span className="fa-li">
                              <i
                                className={
                                  itemData.visible
                                    ? "fas fa-check"
                                    : "fas fa-times"
                                }
                              ></i>
                            </span>
                            {itemData.bold ? <strong>{itemData.user}</strong> : itemData.user}
                          </li>
                        </ul>
                      );
                    })}

                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;