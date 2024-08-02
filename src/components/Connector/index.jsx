import './connector.css';

function Connector() {
    return (
        <div className="connector">
            <div className ="container-connector">
                <span className="vertical-left"></span>
                <span className="horizontal"></span>
                <span className="vertical-right"></span>
            </div>
            <div className="fleche">
                <span className="vertical-center"></span>
            </div>
        </div>
    )
}
export default Connector;