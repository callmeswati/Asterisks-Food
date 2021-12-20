import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';

export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Our Team">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image3}
                        name="Asmita Srivastav"
                        position="Director"
                    />


                    <TeamCard
                        img={Image1}
                        name="Ashwini Srivastav"
                        position="Chief Executive Officer"
                    />

                    <TeamCard
                        img={Image2}
                        name="Anjali Singh"
                        position="Technical Lead"
                    />

                </div>
            </div>
        </section>
    );
}
