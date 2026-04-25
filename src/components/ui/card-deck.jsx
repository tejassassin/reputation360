import React, { useState } from "react";
import { ProfileValueLines } from "../ProfileValueLines.jsx";

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

  const industryColors = {
    "Consumer Electronics": "#f6cdcd",
    "Manufacturing & Industrial Services": "#f0fff5",
    Finance: "#fffef0",
    Healthcare: "#d6dfff",
    Education: "#fff4ff",
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
                  "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              }}
            >
              <div className="card-content gap-6 flex flex-col">
                {/* <span className="card-industry">{caseItem.data.industry}</span> */}
                <h3 className="card-title ">{caseItem.data.title}</h3>
                <div className="card-meta">
                  <div className="meta-item">
                    <span className="meta-label">Profile:</span>
                    <span className="meta-value block w-full min-w-0 break-words">
                      <ProfileValueLines value={caseItem.data.profile} line2ClassName="mt-0.5" />
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Duration:</span>
                    <span className="meta-value">{caseItem.data.duration}</span>
                  </div>

                  <div className="meta-item">
                    <span className="meta-label">Outcome:</span>
                    <span className="meta-value">{caseItem.data.outcome}</span>
                  </div>
                </div>
                <div className="card-cta">Virw Case Study</div>
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
            <div className="modal-header">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>

            {selectedCase && (
              <div className="modal-body">
              <div className="case-study-detail">
                <div className="detail-header">
                  <h2 className="detail-title">{selectedCase.data.title}</h2>
                  <div className="detail-meta">
                    <p><strong >Industry:</strong> {selectedCase.data.industry}</p>
                    <p>
                      <strong>Profile:</strong>{" "}
                      <ProfileValueLines
                        className="font-normal"
                        value={selectedCase.data.profile}
                        line2ClassName="mt-0.5"
                        title={selectedCase.data.profile}
                      />
                    </p>
                    <p><strong>Challenge Type:</strong> {selectedCase.data.challengeType}</p>
                    <p><strong>Duration:</strong> {selectedCase.data.duration}</p>
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
