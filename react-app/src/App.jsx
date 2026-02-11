import React from 'react'
import Card from './components/Card';

const App = () => {
    const jobOpenings = [
        {
            id: 1,
            brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRgjP0jGEHV1ptfo5FKGK4IFuQLMXwJWxhuOfo4WDtlzE2-Hsgx81bHOCdYVxoYprsNdfGy6UWLi1Pe3h3WZDxU-deEcStfnLVIH4PoI&s=10',
            companyName: 'Meta',
            datePosted: '3 days ago',
            post: 'Software Engineer',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 55,
            location: 'Menlo Park, California, USA'
        },
        {
            id:2,
            brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlpdEI6Xlo9wxFEJHom_dDyxkyF_32Y1T4A&s',
            companyName: 'Apple',
            datePosted: '1 day ago',
            post: 'iOS Developer',
            tags1: 'Full-time',
            tags2: 'Junior level',
            pay: 50,
            location: 'Cupertino, California, USA'
        },
        {
            id: 3,
            brandLogo: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564',
            companyName: 'Amazon',
            datePosted: '5 days ago',
            post: 'Cloud Solutions Architect',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 60,
            location: 'Seattle, Washington, USA'
        },
        {
            id: 4,
            brandLogo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
            companyName: 'Netflix',
            datePosted: '2 days ago',
            post: 'Data Scientist',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 65,
            location: 'Los Gatos, California, USA'
        },
        {
            id: 5,
            brandLogo: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg',
            companyName: 'Google',
            datePosted: '6 hours ago',
            post: 'Software Engineer Intern',
            tags1: 'Internship',
            tags2: 'Junior level',
            pay: 40,
            location: 'Mountain View, California, USA'
        },
        {
            id: 6,
            brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqRgjP0jGEHV1ptfo5FKGK4IFuQLMXwJWxhuOfo4WDtlzE2-Hsgx81bHOCdYVxoYprsNdfGy6UWLi1Pe3h3WZDxU-deEcStfnLVIH4PoI&s=10',
            companyName: 'Meta',
            datePosted: '4 days ago',
            post: 'Frontend Developer',
            tags1: 'Full-time',
            tags2: 'Junior level',
            pay: 45,
            location: 'Dublin, Ireland'
        },
        {
            id: 7,
            brandLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlpdEI6Xlo9wxFEJHom_dDyxkyF_32Y1T4A&s',
            companyName: 'Apple',
            datePosted: '3 days ago',
            post: 'Machine Learning Engineer',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 70,
            location: 'Austin, Texas, USA'
        },
        {
            id: 8,
            brandLogo: 'https://companieslogo.com/img/orig/AMZN-e9f942e4.png?t=1740113564',
            companyName: 'Amazon',
            datePosted: '1 week ago',
            post: 'Product Manager',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 75,
            location: 'London, UK'
        },
        {
            id: 9,
            brandLogo: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
            companyName: 'Netflix',
            datePosted: '2 days ago',
            post: 'Backend Engineer',
            tags1: 'Full-time',
            tags2: 'Senior level',
            pay: 65,
            location: 'Los Angeles, California, USA'
        },
        {
            id: 10,
            brandLogo: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg',
            companyName: 'Google',
            datePosted: '5 hours ago',
            post: 'Product Designer',
            tags1: 'Full-time',
            tags2: 'Junior level',
            pay: 50,
            location: 'Berlin, Germany'
        }
    ];
  
    return (
    <div className="parent">
        {jobOpenings.map((job) => (
            <Card key={job.id} company={job} />
        ))}
    </div>
    )
}

export default App