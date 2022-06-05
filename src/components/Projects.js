import './Project.css'
import { FaHandHoldingWater } from "react-icons/fa";
import { Button } from 'react-bootstrap';
// import { ReactComponent as ProjectIcon } from '../images/projectIcon.svg'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import TimelineElements from './TimelineElements'

function Projects() {
    return <>
        <div id="project">
            <h1>Our Projects</h1>
            <VerticalTimeline>
                {
                    TimelineElements.map(element => {
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== "";
                        return(
                          <VerticalTimelineElement 
                          //         key={element.key}>
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: '#089249', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  #089249' }}
                            date={element.date}
                            lineColor="black"    
                            dateClassName = "date"
                            iconStyle={{ background: '#089249', color: '#fff' }}
                            icon={<FaHandHoldingWater />}
                        >
                                <h3 className="vertical-timeline-element-title">{ element.title }</h3>
                                <h4 className="vertical-timeline-element-subtitle">{element.location}</h4>
                                <div className="overflow-p">
                                  <img src={element.img} alt="projectCoverImage" className='projectCoverImage'/>
                                </div>
                                <p id='description'>{element.description}</p>
                                {showButton && <Button variant="outline-dark">{ element.buttonText }</Button>}
                        </VerticalTimelineElement>  
                        //     <VerticalTimelineElement
                        //         icon={<FaHandHoldingWater />}
                                
                        // </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    </>
}

export default Projects