import React from "react";
import { Bookmark } from "lucide-react"

const Card = ({ company }) => {
  return (
    <div className="card">
        <div className="top">
            <img
                src={company.brandLogo}
                alt={`${company.companyName} logo`}
            />
            <button>
                Save <Bookmark size={16} />
            </button>
        </div>

        <div className="center">
            <h2>
            {company.companyName} <span>{company.datePosted}</span>
            </h2>
            <h3>{company.post}</h3>
        
            <div className="tag">
                <h4>{company.tags1}</h4>
                <h4>{company.tags2}</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h3>${company.pay}/hr</h3>
                <p>{company.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
