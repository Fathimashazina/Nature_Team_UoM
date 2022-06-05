import CountUp from "react-countup"
import { Container } from "react-bootstrap"
import './AboutUs.css'
import CountUpItems from "./CountUpItems"

function AboutUs() {
    return <>
        <Container fluid id="aboutus">
            <div className="about-us-container">
                <h1>Who We Are</h1>
                <Container>
                <p>Nature team UoM is the official organization for nature studies and environmental 
                    issues at university of Moratuwa since the formation in 2004. We are functioning for the 17th 
                    successful year now. Started as a forum of a group of environmentally enthusiastic young 
                    university students. The society evolved its years to deal with the environmental studies and 
                    environmental issues in the university.
                </p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex consequuntur eum ad nisi optio impedit omnis expedita dolorem voluptates nam enim, quaerat, sequi, quidem hic harum ipsam sapiente aspernatur. Aspernatur doloremque alias quas, eveniet odit dolores excepturi commodi unde cupiditate ut ad amet expedita vel mollitia illo voluptatum libero consequuntur earum laboriosam fuga, quod quo! Reprehenderit voluptatum magnam nesciunt ea quae error ullam cupiditate nihil quidem dolorem minus omnis, repudiandae id autem pariatur voluptate mollitia voluptas a tempore? Nostrum nulla in ex facere nam odit animi unde nobis molestiae, modi sint dolor natus corporis! Dolores neque necessitatibus eos exercitationem error voluptates quae, aut autem ducimus, pariatur impedit eius, optio voluptatibus amet nostrum consequatur cupiditate vero facilis eum dolorum officiis! Assumenda ipsa quos maiores eos iste voluptatibus aspernatur? Corrupti tempore, odit incidunt quia doloremque aspernatur excepturi eligendi nesciunt veniam facilis. Quam natus rem magnam omnis dignissimos unde, sunt voluptate voluptas cumque, quod sint odit, aperiam voluptatem est. Dolore ad suscipit libero maxime veniam sint natus, non hic vel soluta minus odio, vitae ullam et quidem consequatur fugiat? Consequuntur, tenetur cupiditate? Quam dolor amet autem eos quidem ex quae odit, aliquid aperiam voluptas saepe nemo expedita fugiat officiis aspernatur, numquam fuga excepturi eligendi. Itaque, numquam distinctio, debitis possimus iusto commodi soluta inventore magnam totam ut similique dolor a. Facilis impedit recusandae eum sint voluptatibus labore alias quia cupiditate est voluptas at, nam reprehenderit ducimus totam vitae itaque atque, minus facere excepturi. Iure eum voluptatem ut perspiciatis placeat nemo. Laborum dicta qui autem veniam odio adipisci, libero cum atque nihil similique deserunt magnam modi laboriosam totam porro quam facere vero provident cupiditate ipsum laudantium dolorum! Laboriosam error a dolore voluptate culpa fugit, obcaecati voluptates nulla modi illum illo? Unde officia repudiandae veniam aperiam blanditiis quam? Natus esse nam inventore magnam et tempora modi, facilis nesciunt commodi nemo culpa illum nostrum qui odio odit ab. Sunt explicabo magnam fuga inventore, officiis possimus illum quia voluptate fugit iste sed ad. Deleniti quibusdam ab repellendus, quas reprehenderit minima voluptatem eius maxime esse amet totam tempore enim at magni vero, sit dicta, omnis quos? Dicta voluptatibus fugit possimus reprehenderit facere natus, ut culpa asperiores aliquid sed illum animi quisquam cumque, dolorum assumenda rerum optio id, temporibus eum ex? Voluptates, est ipsa quibusdam in maxime tempore velit minus iure dolores dolorum. Iste illum amet nisi quidem quasi optio non consequatur. Doloremque optio delectus nesciunt nulla dolorem? Enim eum illum labore laboriosam quam fugiat temporibus, fugit deleniti inventore sequi saepe natus perferendis ex praesentium nihil. Facere in velit ipsa repellat nostrum vel iure quos eaque, cum ipsum omnis obcaecati repudiandae architecto maiores adipisci nulla at nihil debitis deserunt corrupti tempora quis autem perspiciatis dolorum. Tempore delectus odio, distinctio suscipit voluptatibus et tenetur molestiae voluptate nihil temporibus totam fugiat, tempora quasi atque modi corporis dolorem recusandae labore non, a id maxime! Esse quo sapiente cumque incidunt suscipit fugiat eligendi asperiores reiciendis facilis, amet quidem obcaecati officiis porro illo et ratione dolor culpa delectus tempora eum. Ab ut sequi et.</p>
                </Container>
            </div>
            <div className="svgContainerGreen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 310"><path fill="#fff" fill-opacity="1" d="M0,64L30,85.3C60,107,120,149,180,176C240,203,300,213,360,229.3C420,245,480,267,540,240C600,213,660,139,720,133.3C780,128,840,192,900,202.7C960,213,1020,171,1080,160C1140,149,1200,171,1260,170.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
            <main>
                <div className="circle-group me-5 ms-5">
                        {
                            CountUpItems.map(item => {
                                return (
                                    <div className="circle">
                                        <CountUp 
                                            className="count-up"
                                            end={item.endCount}
                                            duration={3}
                                            suffix=' + '
                                        />
                                        <p>{ item.detail }</p>
                                    </div>
                                )
                            })
                        }

                                    <div className="circle">
                                        <p>
                                            Graduated <br/>
                                            Members in <br/>
                                            various <br/>
                                            steams
                                        </p>
                                    </div>
                </div>
            </main>
                <div className="svgContainerblack">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000" fill-opacity="1" d="M0,64L30,85.3C60,107,120,149,180,176C240,203,300,213,360,229.3C420,245,480,267,540,240C600,213,660,139,720,133.3C780,128,840,192,900,202.7C960,213,1020,171,1080,160C1140,149,1200,171,1260,170.7C1320,171,1380,149,1410,138.7L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </div>
        </Container>
    </>
}

export default AboutUs