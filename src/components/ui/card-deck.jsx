import React, { useState } from "react";

export default function CardDeck({ caseStudies }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const closeModal = () => {
    setShowModal(false);
    setSelectedCase(null);
  };

  const openModal = (caseStudy) => {
    setSelectedCase(caseStudy);
    setShowModal(true);
  };

  // Industry color mapping for visual variety
  const industryColors = {
    "Consumer Electronics": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    "Manufacturing & Industrial Services":
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    Finance: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    Healthcare: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    Education: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  };

  return (
    <div className="card-container">
      <div className="card-list">
        {caseStudies &&
          caseStudies.map((caseItem) => (
            <div
              key={caseItem.id}
              onClick={() => openModal(caseItem)}
              className="card card-deck"
              style={{
                background:
                  industryColors[caseItem.data.industry] ||
                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <div className="card-content gap-6 flex flex-col">
                {/* <span className="card-industry">{caseItem.data.industry}</span> */}
                <h3 className="card-title ">{caseItem.data.title}</h3>
                <div className="card-meta">
                  <div className="meta-item">
                    <span className="meta-label">Profile:</span>
                    <span className="meta-value">{caseItem.data.profile}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{caseItem.data.duration}</span>
                  </div>
                  {/* <div className="meta-item">
                    <span className="meta-label">Challenge:</span>
                    <span className="meta-value">
                      {caseItem.data.challengeType}
                    </span>
                  </div> */}
                </div>
                <div className="card-cta">Click to view details</div>
              </div>
            </div>
          ))}

        {/* Modal for full case study details */}
        <div
          id="myModal"
          className="modal"
          style={{
            opacity: !showModal ? "0" : "1",
            visibility: !showModal ? "hidden" : "visible",
          }}
          onClick={closeModal}
        >
          <div
            className="modal-content-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            {selectedCase && (
              <div className="case-study-detail">
                <div className="detail-header">
                  <span className="detail-industry">
                    {selectedCase.data.industry}
                  </span>
                  <h2 className="detail-title">{selectedCase.data.title}</h2>
                  <div className="detail-meta-row">
                    <span className="detail-profile">
                      {selectedCase.data.profile}
                    </span>
                    <span className="detail-duration">
                      {selectedCase.data.duration}
                    </span>
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Challenge</h4>
                  <p>{selectedCase.data.challenge}</p>
                  <p className="challenge-drivers">
                    {selectedCase.data.challengeDrivers}
                  </p>
                  <ul className="drivers-list">
                    {selectedCase.data.challengeDriversList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <p>{selectedCase.data.challengeClosing}</p>
                </div>

                <div className="detail-section">
                  <h4>Objective</h4>
                  <p>{selectedCase.data.objective}</p>
                </div>

                <div className="detail-section">
                  <h4>Strategy</h4>
                  <ul className="strategy-list">
                    {selectedCase.data.strategy.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h4>Results</h4>
                  <ul className="results-list">
                    {selectedCase.data.results.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section impact-section">
                  <h4>Impact</h4>
                  <p>{selectedCase.data.impact}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
