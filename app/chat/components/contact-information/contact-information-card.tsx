import { Button } from '~/components/ui/button'
import ContactInformationSkeleton from './contact-information-skeleton'
import ContactInformation from './contact-information'
import NoContactSelected from './no-contact-selected'

const ContactInformationCard = () => {
  return <NoContactSelected/>


  return <ContactInformationSkeleton/>
   
  return  <ContactInformation/>
}

export default ContactInformationCard
