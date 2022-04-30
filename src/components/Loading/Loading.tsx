import React from 'react'

interface LoadingProps {

}

export const Loading: React.FC<LoadingProps> = ({}) => {
        return (
            <div className="text-center" style={{marginTop: '15vh', marginBottom: '20vh'}}>
                <div className="spinner-border" style={{width: "8rem", height: "8rem"}} role="status"></div>
                <h1>Loading...</h1>
            </div>
        );
}